'use client'

import Button from "./components/Button";

type ErrorProps = {
  error: Error;
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <main className='p-8'>
      <section aria-labelledby='error-heading' className='space-y-4 text-center'>
        <h1 className='text-5xl font-bold' id='error-heading'>Oops, something went wrong!</h1>
        <Button onClick={reset}>Try again?</Button>
      </section>
    </main>
  );
}
