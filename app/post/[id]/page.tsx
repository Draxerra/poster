import { notFound } from "next/navigation";
import { sql } from "@vercel/postgres";
import Link from "next/link";

import { buttonStyles } from "@/app/components/Button";

export default async function Post({ params }: { params: { id: string }}) {
  const { rows } = await sql`SELECT * from posts WHERE id=${params.id}`;
  if (!rows[0]?.post) {
    notFound();
  }
  return (
    <main className='p-8'>
      <section aria-labelledby='post-heading' className='mb-8 space-y-4'>
        <h1 className='text-5xl font-bold' id='post-heading'>Post</h1>
        <div className='bg-white shadow-xl divide-y-2 divide-neutral-100'>
          <p className='p-4'>{rows[0].post}</p>
        </div>
        <Link className={buttonStyles} href='/'>Back</Link>
      </section>
    </main>
  )
}
