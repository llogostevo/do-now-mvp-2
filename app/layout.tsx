import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Do Now Generator',
  description: 'Generate starter questions based upon specification points for GCSE courses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className="bg-black text-white min-h-screen">
      <nav className="w-full bg-black py-6">
        <div className="flex justify-center space-x-10">
          <Link href="/compsci">Computer Science</Link>
          <Link href="/geography">Geography</Link>
          <Link href="/history">History</Link>
          <Link href="/history">Drama</Link>
        </div>
      </nav>
      {children}
      <Analytics />

    </body>
  </html>
  )
}
