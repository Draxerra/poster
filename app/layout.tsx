import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Poster',
  description: 'Create some posts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.variable} lang="en">
      <body className='bg-slate-100 text-neutral-900 font-inter'>{children}</body>
    </html>
  )
}
