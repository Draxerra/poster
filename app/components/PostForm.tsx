import { createPost } from "@/app/actions/posts";
import Button from "@/app/components/Button";

/** Seems to force pages to dynamic? */
export default function PostForm() {
  return (
    <form action={createPost} className='flex flex-col gap-y-4'>
      <label className='flex flex-col gap-y-2'>
        <span className='font-bold'>Add a comment</span>
        <textarea className='p-4 shadow-xl' name='message' rows={4} />
      </label>
      <Button className='self-start' type='submit'>
        Add Comment
      </Button>
    </form>
  )
}
