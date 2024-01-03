"use server";

import {
  addCommentSchema,
  commentMultipleSchema,
  isZodError,
  PostComment,
  postMultipleSchema,
  postSchema,
  type CommentMultiple,
  type Post,
  type PostMultiple,
} from "@/types/schema";
import { createRequestUrl } from "@/lib/utils";

export async function addComment(formData: FormData) {
  const form = Object.fromEntries(formData.entries());
  const payload = addCommentSchema.safeParse(form);

  // Return early if the form data is invalid
  if (!payload.success) {
    return {
      data: null,
      errors: payload.error.flatten().fieldErrors,
    };
  }

  // Mutate data
  const res = await fetch("https://dummyjson.com/comments/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload.data),
  }).then((res) => res.json());

  // Return added comment
  return {
    data: res as PostComment,
    errors: null,
  };
}

export async function getPosts(params: Record<string, any>) {
  let fetchUrl = "https://dummyjson.com/posts";
  if (!!params.q) fetchUrl += `/search`;

  try {
    const res = await fetch(createRequestUrl(fetchUrl, params), {
      next: { revalidate: 60 },
    }).then((res) => res.json());

    // validate schema
    await postMultipleSchema.parse(res);

    return res as PostMultiple;
    //
  } catch (err) {
    // throw validation error
    if (isZodError(err)) {
      throw new Error(JSON.stringify(err.issues));
    }
  }
}

export async function getPostDetail(id: string) {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${id}`, {
      next: { revalidate: 60 },
    }).then((res) => res.json());

    // validate schema
    await postSchema.parse(res);

    return res as Post;
    //
  } catch (err) {
    // throw validation error
    if (isZodError(err)) {
      throw new Error(JSON.stringify(err.issues));
    }
  }
}

export async function getCommentsByPost(id: string) {
  try {
    const res = await fetch(`https://dummyjson.com/comments/post/${id}`, {
      next: { revalidate: 60 },
    }).then((res) => res.json());

    // validate schema
    await commentMultipleSchema.parse(res);

    return res as CommentMultiple;
    //
  } catch (err) {
    // throw validation error
    if (isZodError(err)) {
      throw new Error(JSON.stringify(err.issues));
    }
  }
}
