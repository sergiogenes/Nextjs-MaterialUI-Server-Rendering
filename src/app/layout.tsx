import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import ThemeRegistry from './styles/ThemeRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zurich',
  description: 'Aplicación para consultas de información ex RightNow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <ThemeRegistry>
        <body className={inter.className}>{children}</body>
      </ThemeRegistry>
    </html>
  )
}
