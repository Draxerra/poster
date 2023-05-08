import { sql } from '@vercel/postgres';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import 'server-only';

import { Post } from '@/app/types/post';

export const getPost = cache(async function getPost(id: string) {
  const { rows } = await sql`SELECT * from posts WHERE id=${id}`;
  if (!rows[0]) {
    notFound();
  }
  return rows[0] as Post;
});

export const getPosts = cache(async function getPosts() {
  const { rows } = await sql`SELECT * from posts`;
  return rows as Post[];
});

export const getPostIds = cache(async function getPostIds() {
  const { rows } = await sql`SELECT id from posts`;
  return rows as Pick<Post, 'id'>[];
});
