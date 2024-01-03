import { ZodIssue } from "zod";

export type ApiResponse<T> = {
  data: T;
  errors: string | ZodIssue[];
};
