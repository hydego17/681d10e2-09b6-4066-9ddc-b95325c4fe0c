import { ZodIssue } from "zod";

type ApiResponse<T> = {
  data: T;
  errors: string | ZodIssue[];
};
