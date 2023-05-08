import PostSection from "@/app/components/PostSection";
import { getPost, getPostIds } from "@/app/utils/posts";

type PageProps = {
  params: {
    id: string;
  }
}


/* Currently bugged with server actions - method not allowed */
export const revalidate = 60;
export async function generateStaticParams() {
  const ids = await getPostIds();
  return ids.map(({ id }) => ({
    id: id.toString(),
  }));
}

export async function generateMetadata({ params: { id }}: PageProps) {
  const { message } = await getPost(id);
  return {
    description: message,
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
