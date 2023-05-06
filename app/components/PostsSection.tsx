import { getPosts } from "@/app/utils/posts";
import PostListItem from "./PostListItem";

export default async function Posts() {
  const posts = await getPosts();
  return (
    <section aria-labelledby='posts-heading' className='mb-8'>
      <h1 className='text-5xl font-bold mb-4' id='posts-heading'>List of Posts</h1>
      <ul className='bg-white shadow-xl divide-y-2 divide-neutral-100'>
        {posts.map(post => <PostListItem key={post.id} post={{...post}} />)}
      </ul>
    </section>
  )
}
