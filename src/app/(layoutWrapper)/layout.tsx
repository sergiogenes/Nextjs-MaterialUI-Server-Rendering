import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Zurich | Home',
  description: 'Aplicación para consultas de información ex RightNow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <NavBar>{children}</NavBar>
      </body>
    </html>
  )
}
