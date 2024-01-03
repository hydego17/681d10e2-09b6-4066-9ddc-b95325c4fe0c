import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className='py-12 container max-w-screen-sm'>
      <section className='min-h-[300px] flex flex-col justify-center items-center border rounded-lg'>
        <h1 className='text-2xl font-bold'>Imagine a landing page</h1>

        <div className='mt-4'>
          <Link
            href='/posts'
            className={cn(
              buttonVariants({
                variant: "default",
              })
            )}
          >
            See All Posts
          </Link>
        </div>
      </section>
    </div>
  );
}
