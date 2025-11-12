import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
  subsets: ['latin', 'latin-ext'], // latin-ext for Hungarian characters
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'], // Specify the weights you want
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tótikék Tanösvény – Káptalantóti',
    template: '%s | Tótikék',
  },
  description:
    'A Tótikék tanösvény egy 6,3 km hosszú kirándulási útvonal Káptalantótiban, amely bemutatja a település történelmét, természeti értékeit és kulturális örökségét.',
  keywords: ['Tótikék', 'Káptalantóti', 'Tóti-hegy', 'tanösvény', 'Balaton-felvidék', 'túra'],
  authors: [{ name: 'Tótikék' }],
  creator: 'Tótikék',
  publisher: 'Tótikék',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Tótikék Tanösvény – Káptalantóti',
    description:
      '6,3 km-es tanösvény a Tóti-hegyen – történelem, természet és kulturális örökség Káptalantótiban.',
    siteName: 'Tótikék',
    images: [
      {
        url: '/totikek-logo-blue.png',
        width: 512,
        height: 512,
        alt: 'Tótikék logó',
      },
    ],
    locale: 'hu_HU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tótikék Tanösvény – Káptalantóti',
    description:
      '6,3 km-es tanösvény a Tóti-hegyen – történelem, természet és kulturális örökség Káptalantótiban.',
    images: ['/totikek-logo-blue.png'],
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="hu">
      <body suppressHydrationWarning className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
