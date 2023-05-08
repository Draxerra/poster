import Link from 'next/link';

import { buttonStyles } from '@/app/components/Button';
import PostListItem from '@/app/components/PostListItem';
import { getPost } from '@/app/utils/posts';

type PostProps = {
  id: string;
}

export default async function Post({ id }: PostProps) {
  const post = await getPost(id);
  return (
    <section aria-labelledby='post-heading' className='mb-8 space-y-4'>
      <h1 className='text-5xl font-bold' id='post-heading'>Post</h1>
      <ul className='bg-white shadow-xl divide-y-2 divide-neutral-100'>
        <PostListItem id={post.id} likes={post.likes}>
          <span>{post.message}</span>
        </PostListItem>
      </ul>
      <Link className={buttonStyles} href='/'>Back</Link>
    </section>
  )
}
