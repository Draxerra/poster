'use server'

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export type FormReturnData = {
  errors: Record<string, string>;
}

export async function updatePostLikes(id: number, likes: number) {
  await sql`UPDATE posts SET likes = ${likes} WHERE id=${id}`;
  /** Currently bugged? Doesn't seem to trigger a revalidation */
  revalidatePath('/');
  revalidatePath(`/post/${id}`);
}

export async function createPost(data: FormData): Promise<FormReturnData> {
  const message = data.get('message');
  if (typeof message !== 'string') {
    return { errors: { message: 'Message is invalid.' } };
  }
  if (message.length === 0) {
    return { errors: { message: 'Message is required.' } };
  }
  await sql`INSERT INTO posts (message, likes) VALUES (${message}, 0)`;
  /** Ditto */
  revalidatePath('/');
  return { errors: {} };
}
