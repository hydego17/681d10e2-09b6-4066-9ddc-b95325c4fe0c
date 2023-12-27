import React from "react";
import Link from "next/link";

import { getPosts } from "@/services/core";

export default async function ServerPage() {
  // Get posts data
  const posts = await getPosts();

  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-1'>
        <section className='min-h-[600px]'>
          <div className='container'>
            <header className='flex items-center justify-between py-6'>
              <h1 className='text-3xl font-bold'>Server Page</h1>

              <div className='centered'>
                <Link href='/' className='bg-black px-4 py-2 rounded-lg text-white'>
                  Go Back
                </Link>
              </div>
            </header>

            <pre className='rounded p-4 bg-slate-200 overflow-scroll text-xs'>{JSON.stringify(posts, null, 2)}</pre>
          </div>
        </section>
      </main>
    </div>
  );
}
