import { z } from "zod";

export function isZodError(err: unknown): err is z.ZodError {
  return err instanceof z.ZodError;
}

const apiMetaSchema = z.object({
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
  tags: z.array(z.string()),
  reactions: z.number(),
});

export const postMultipleSchema = apiMetaSchema.extend({
  posts: z.array(postSchema),
});

export const addCommentSchema = z.object({
  body: z.string().min(1, "Please enter your comment"),
  postId: z.string().or(z.number()),
  userId: z.string().or(z.number()),
});

export const postCommentSchema = z.object({
  id: z.number().or(z.string()),
  body: z.string(),
  postId: z.number(),
  user: z.object({
    id: z.number(),
    username: z.string(),
  }),
});

export const commentMultipleSchema = apiMetaSchema.extend({
  comments: z.array(postCommentSchema),
});

export type Post = z.infer<typeof postSchema>;
export type PostMultiple = z.infer<typeof postMultipleSchema>;
export type PostComment = z.infer<typeof postCommentSchema>;
export type CommentMultiple = z.infer<typeof commentMultipleSchema>;
export type AddCommentPayload = z.infer<typeof addCommentSchema>;
