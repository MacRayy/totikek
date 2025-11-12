import type { Metadata } from 'next'
import { Page } from '@/ui-components/page/Page'
import { Birdlife } from '@/components/birdlife/Birdlife'

export const metadata: Metadata = {
  title: 'A Tóti-hegy izgalmas madárvilága',
  description:
    'Zöld küllő, fekete harkály, vércse és társai – Fülöp meséje a Tóti-hegy madárvilágáról.',
  alternates: { canonical: '/madarvilag' },
  openGraph: {
    title: 'A Tóti-hegy izgalmas madárvilága',
    description: 'Madármegfigyelés Káptalantótiban – élőhelyek és fajok bemutatása.',
    url: '/madarvilag',
  },
}

export default function BirdlifePage() {
  return (
    <Page>
      <Birdlife />
    </Page>
  )
}
