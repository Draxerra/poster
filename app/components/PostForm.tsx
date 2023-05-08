'use client'

import { createPost } from "@/app/actions/posts";
import Button from "@/app/components/Button";
import PostFormErrorBoundary from "@/app/components/PostFormErrorBoundary";

/** Seems to force pages to dynamic? */
export default function PostForm() {
  return (
    <PostFormErrorBoundary>
      {(error, reset) => (
        <form action={createPost} className='flex flex-col gap-y-4' onSubmit={reset}>
          <label className='flex flex-col gap-y-2'>
            <span className='font-bold'>Add a comment</span>
            <textarea className='p-4 shadow-xl' name='message' rows={4} />
            {error && <span className='text-red-700 font-bold text-sm'>{error.message}</span>}
          </label>
          <Button className='self-start' type='submit'>
            Add Comment
          </Button>
        </form>
      )}
    </PostFormErrorBoundary>
  )
}
