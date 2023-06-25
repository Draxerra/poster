import PostForm from "./components/PostForm";
import PostsSection from "./components/PostsSection";

export default async function Home() {
  return (
    <main className='p-8'>
      <PostsSection />
      <PostForm />
    </main>
  )
}
