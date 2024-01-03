import Link from "next/link";
import { CircleUserRound, MessageSquare } from "lucide-react";

import { capitalize } from "@/lib/utils";
import SearchBar from "@/components/search-bar";

import { getPosts } from "../actions";

export default async function PostsPage({ searchParams }: { searchParams?: any }) {
  const data = await getPosts({
    q: searchParams?.["q"] || "",
    skip: 0,
    limit: 50,
  });
  const totalPosts = data?.posts.length ?? 0;

  return (
    <div className='py-12 container max-w-screen-sm'>
      <section>
        <h1 className='text-2xl font-bold mx-1'>All Posts</h1>

        <div className='my-6'>
          <SearchBar />
        </div>

        <div className='space-y-3'>
          <div className='text-xs text-right'>
            Post{totalPosts > 1 ? "s" : ""} Count: {totalPosts}
          </div>

          {data?.posts.map((p, i) => (
            <Link
              href={`/posts/${p.id}`}
              key={p.id}
              className='block group p-4 border rounded-lg hover:shadow hover:bg-muted/50'
            >
              <div className='text-xs flex items-center gap-1'>
                <CircleUserRound size={14} />
                u/User{p.userId}
              </div>

              <h2 className='mt-2 text-base font-bold group-hover:cursor-pointer w-fit'>{p.title}</h2>

              <div className='mt-4 flex justify-between items-center'>
                <span className='py-1 px-2.5 text-xs flex items-center gap-1.5 border rounded-xl'>
                  <MessageSquare size={14} />
                  {p.reactions || 0} Comments
                </span>

                <div className='flex gap-1.5'>
                  {p.tags.slice(0, 1).map((tag) => (
                    <span key={tag} className='py-1 px-2.5 border rounded-xl text-xs'>
                      {capitalize(tag)}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
