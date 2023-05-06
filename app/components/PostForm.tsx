import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import Button from "./Button";

export default function PostForm() {
  async function PostFormHandler(data: FormData) {
    'use server';
    const post = data.get('post');
    if (typeof post !== 'string') {
      throw new Error('Post is invalid!');
    }
    await sql`INSERT INTO posts (Post) VALUES (${post})`;
    revalidatePath('/');
  }
  return (
    <form action={PostFormHandler} className='flex flex-col gap-y-4'>
      <label className='flex flex-col gap-y-2'>
        <span className='font-bold'>Add a comment</span>
        <textarea className='p-4 shadow-xl' name='post' rows={4} />
      </label>
      <Button className='self-start' type='submit'>
        Add Comment
      </Button>
    </form>
  )
}
