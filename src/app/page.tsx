import type { Metadata } from 'next'
import { Home } from '@/components/home/Home'

export const metadata: Metadata = {
  title: 'Kezdőlap',
  description:
    'Üdvözlünk a Tóti-hegyen! A Tótikék tanösvény 6,3 km-es útvonal Káptalantótiban – történelem, természet és kulturális örökség.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tótikék – Kezdőlap',
    description:
      '6,3 km-es tanösvény a Tóti-hegyen – fedezd fel Káptalantóti történelmét, természetét és kulturális örökségét.',
    url: '/',
    images: [
      {
        url: '/totikek-logo-blue.png',
        width: 512,
        height: 512,
        alt: 'Tótikék logó',
      },
    ],
  },
}

export default function HomePage() {
  return <Home />
}
