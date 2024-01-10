import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import './globals.css'

import ThemeRegistry from './styles/ThemeRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs-MaterialUI Server Rendering',
  description: 'Testing a nextjs app with MaterialUI with server-side rendering',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <ThemeRegistry>
        <body className={inter.className}>
          <NavBar>{children}</NavBar>
        </body>
      </ThemeRegistry>
    </html>
  )
}
