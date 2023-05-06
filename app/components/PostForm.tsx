export default function PostForm() {
  async function PostFormHandler(data: FormData) {
    'use server';
    console.log(data);
  }
  return (
    <form action={PostFormHandler} className='flex flex-col gap-y-4'>
      <label className='flex flex-col gap-y-2'>
        Add a comment
        <textarea className='p-4' name='message' rows={4} />
      </label>
      <button
        className='self-start bg-red-700 text-neutral-100 py-4 px-6 rounded-lg active:bg-red-900 hover:bg-red-800'
        type='submit'
      >
        Add Comment
      </button>
    </form>
  )
}
