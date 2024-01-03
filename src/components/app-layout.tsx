import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 h-[65px] md:h-[72px] centered w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='w-full max-w-screen-sm px-5 flex items-center justify-between'>
          <Link href='/'>
            <div className='text-xl font-bold'>My Social</div>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className='flex-1'>{children}</main>
    </div>
  );
}
