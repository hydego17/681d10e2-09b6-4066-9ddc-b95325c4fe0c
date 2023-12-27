import Link from "next/link";

export default function Home() {
  return (
    <main className='min-h-screen centered bg-slate-100'>
      <div>
        <h1 className='text-3xl font-bold text-center'>Next.js Sarter</h1>

        <div className='mt-8 flex gap-2'>
          <Link href='/server' className='bg-black px-4 py-2 rounded-lg text-white'>
            Server Component
          </Link>
          <Link href='/client' className='bg-black px-4 py-2 rounded-lg text-white'>
            Client (Hydration)
          </Link>
        </div>
      </div>
    </main>
  );
}
