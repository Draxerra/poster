'use client'

import { useState } from "react";
import { type FormReturnData, createPost } from "@/app/actions/posts";
import Button from "@/app/components/Button";

/** Seems to force pages to dynamic? */
export default function PostForm() {
  const [formErrors, setFormErrors] = useState<FormReturnData['errors']>({});
  return (
    <form
      action={async(data) => {
        const { errors } = await createPost(data);
        setFormErrors(errors);
      }}
      className='flex flex-col gap-y-4'
    >
      <label className='flex flex-col gap-y-2'>
        <span className='font-bold'>Add a comment</span>
        <textarea className='p-4 shadow-xl' name='message' rows={4} />
        {formErrors.message && <span className='text-red-700 text-sm font-bold'>{formErrors.message}</span>}
      </label>
      <Button className='self-start' type='submit'>
        Add Comment
      </Button>
    </form>
  )
}
