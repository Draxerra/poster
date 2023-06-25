import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import 'server-only';

export const getPost = cache(async function getPost(id: string) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    }
  })
  if (!post) {
    notFound();
  }
  return post;
});

export const getPosts = cache(async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
});

export const getPostIds = cache(async function getPostIds() {
  const ids = await prisma.post.findMany({
    select: {
      id: true,
    },
  });
  return ids;
});
