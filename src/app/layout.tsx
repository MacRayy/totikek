import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'], // latin-ext for Hungarian characters
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'], // Specify the weights you want
})

export const metadata: Metadata = {
  title: 'Tótikék',
  description: 'Tanösvény a Tóti-hegyre Káptalantótiban',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="hu">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
