import PostSection from "@/app/components/PostSection";
import { getPost } from "@/app/utils/posts";

type PageProps = {
  params: {
    id: string;
  }
}

export async function generateMetadata({ params: { id }}: PageProps) {
  const { post } = await getPost(id);
  return {
    description: post,
    title: 'Post',
  }
}

export default async function PostPage({ params: { id }}: PageProps) {
  return (
    <main className='p-8'>
      { /* @ts-expect-error */}
      <PostSection id={id} />
    </main>
  )
}
