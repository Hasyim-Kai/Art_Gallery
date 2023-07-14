import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Art Gallery',
  description: 'Art Gallery where you can see many great inspiration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <html lang="en">
    <body className={`${playfairDisplay.className} min-h-screen bg-amber-50`}>
      {children}
    </body>
  </html>
}
