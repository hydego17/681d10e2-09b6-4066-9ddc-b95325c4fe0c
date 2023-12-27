"use client";

import React from "react";
import Link from "next/link";

import { useGetProducts } from "@/resolvers/core";

export default function TestPage() {
  // Get products data
  const { data } = useGetProducts();

  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-1'>
        <div>
          <section className='min-h-[600px]'>
            <div className='container'>
              <header className='flex items-center justify-between py-6'>
                <h1 className='text-3xl font-bold'>Product Page</h1>

                <div className='centered'>
                  <Link href='/' className='bg-black px-4 py-2 rounded-lg text-white'>
                    Go Back
                  </Link>
                </div>
              </header>

              <pre className='rounded p-4 bg-slate-200 overflow-scroll text-xs'>{JSON.stringify(data, null, 2)}</pre>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
