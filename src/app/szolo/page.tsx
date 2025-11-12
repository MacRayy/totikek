import type { Metadata } from 'next'
import { Page } from '@/ui-components/page/Page'
import { Wine } from '@/components/wine/Wine'

export const metadata: Metadata = {
  title: 'Szőlészet és borászat',
  description:
    'Káptalantóti szőlőhegyének története: dűlők, pincék és kőkeresztek – Seregély Sára meséje.',
  alternates: { canonical: '/szolo' },
  openGraph: {
    title: 'Szőlészet és borászat',
    description: 'Talaj, domborzat és hagyomány – miért különleges a Tóti-hegy szőlője és bora.',
    url: '/szolo',
  },
}

export default function WinePage() {
  return (
    <Page>
      <Wine />
    </Page>
  )
}
