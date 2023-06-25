import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './component/navbar';
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
      <Navbar />
      {children}
      <Analytics />


    </body>
  </html>
  )
}
