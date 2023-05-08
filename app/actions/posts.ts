'use server'

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function updatePostLikes(id: number, likes: number) {
  await sql`UPDATE posts SET Likes = ${likes} WHERE Id=${id}`;
  revalidatePath('/');
  revalidatePath(`/post/${id}`);
}

export async function createPost(data: FormData) {
  const message = data.get('message');
  if (typeof message !== 'string') {
    throw new Error('Message is invalid!');
  }
  await sql`INSERT INTO posts (Message, Likes) VALUES (${message}, 0)`;
  revalidatePath('/');
}
