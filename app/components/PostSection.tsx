import Link from 'next/link';

import { buttonStyles } from '@/app/components/Button';
import { getPost } from '@/app/utils/posts';

type PostProps = {
  id: string;
}

export default async function Post({ id }: PostProps) {
  const { post } = await getPost(id);
  return (
    <section aria-labelledby='post-heading' className='mb-8 space-y-4'>
      <h1 className='text-5xl font-bold' id='post-heading'>Post</h1>
      <div className='bg-white shadow-xl divide-y-2 divide-neutral-100'>
        <p className='p-4'>{post}</p>
      </div>
      <Link className={buttonStyles} href='/'>Back</Link>
    </section>
  )
}
