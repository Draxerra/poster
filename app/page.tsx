import { sql } from "@vercel/postgres";
import PostForm from "./components/PostForm";
import Link from "next/link";

export default async function Home() {
  const { rows } = await sql`SELECT * from posts`;
  return (
    <main className='p-8'>
      <section aria-labelledby='posts-heading' className='mb-8'>
        <h1 className='text-5xl font-bold mb-4' id='posts-heading'>List of Posts</h1>
        <ul className='bg-white shadow-xl divide-y-2 divide-neutral-100'>
          {rows.map(row => (
            <li className='p-4' key={row.id}>
              <Link className='underline text-blue-800' href={`/post/${row.id}`}>{row.post}</Link>
            </li>
          ))}
        </ul>
      </section>
      <PostForm />
    </main>
  )
}
