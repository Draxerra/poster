import clsx from 'clsx';

export const buttonStyles = clsx(
  'inline-flex items-center justify-center',
  'bg-red-700 text-neutral-100 py-4 px-6 rounded-lg',
  'active:bg-red-900 hover:bg-red-800',
);

export default function Button(props: JSX.IntrinsicElements['button']) {
  return (
    <button
      {...props}
      className={clsx(
        buttonStyles,
        props.className,
      )}
    />
  )
}
