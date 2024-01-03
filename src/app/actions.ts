"use server";

import type { ApiResponse } from "@/types/api";
import { addCommentSchema, PostComment, type CommentMultiple, type Post, type PostMultiple } from "@/types/schema";
import { appConfig } from "@/config";
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

export async function getPosts(params = {}) {
  const res: ApiResponse<PostMultiple> = await fetch(createRequestUrl(`${appConfig.CLIENT_URL}/api/posts`, params), {
    next: { revalidate: 60 },
  }).then((res) => res.json());

  if (!!res.errors) {
    throw new Error(JSON.stringify(res.errors));
  }

  return res.data as PostMultiple;
}

export async function getPostDetail(id: string) {
  const res: ApiResponse<Post> = await fetch(`${appConfig.CLIENT_URL}/api/posts/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());

  if (!!res.errors) {
    throw new Error(JSON.stringify(res.errors));
  }

  return res.data as Post;
}

export async function getCommentsByPost(id: string) {
  const res: ApiResponse<CommentMultiple> = await fetch(`${appConfig.CLIENT_URL}/api/comments/post/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());

  if (!!res.errors) {
    throw new Error(JSON.stringify(res.errors));
  }

  return res.data as CommentMultiple;
}
