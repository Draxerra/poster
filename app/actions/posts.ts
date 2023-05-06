'use server'

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function updatePostLikes(id: string, likes: number) {
  await sql`UPDATE posts SET Likes = ${likes} WHERE id=${id}`;
  // TODO: Revalidate tag would be better here? How to add a tag to `cache`?
  revalidatePath('/');
}

export async function createPost(data: FormData) {
  const post = data.get('post');
  if (typeof post !== 'string') {
    throw new Error('Post is invalid!');
  }
  await sql`INSERT INTO posts (Post, Likes) VALUES (${post}, 0)`;
  revalidatePath('/');
}