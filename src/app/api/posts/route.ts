import { isZodError, postMultipleSchema, type PostMultiple } from "@/types/schema";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const search = url.searchParams.get("q");

  try {
    let fetchUrl = "https://dummyjson.com/posts";
    if (!!search) fetchUrl += `/search`;
    fetchUrl += url.search;

    // fetch data
    const res: PostMultiple = await fetch(fetchUrl, {
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    }).then((res) => res.json());

    // validate schema
    await postMultipleSchema.parse(res);

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
