import { commentMultipleSchema, isZodError, type CommentMultiple } from "@/types/schema";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  // access post id from params
  const postId = params.id;

  try {
    // fetch data
    const res: CommentMultiple = await fetch(`https://dummyjson.com/comments/post/${postId}`, {
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }).then((res) => res.json());

    // validate schema
    await commentMultipleSchema.parse(res);

    // send formatted response
    return new Response(JSON.stringify({ data: res, errors: null }), { status: 200 });
    //
  } catch (err) {
    // throw validation error
    if (isZodError(err)) {
      return new Response(JSON.stringify({ data: null, errors: err.issues }), { status: 422 });
    }

    return new Response("Unexpected Error Occurred", { status: 500 });
  }
}
