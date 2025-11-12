import type { Metadata } from 'next'
import { Page } from '@/ui-components/page/Page'
import { Mining } from '@/components/mining/Mining'

export const metadata: Metadata = {
  title: 'Bányászat és felelős tájhasználat',
  description:
    'A bazaltbányászat története a Tóti-hegy környékén, és hogyan gyógyul a táj – Fülöp, Vilmos és Vencel története.',
  alternates: { canonical: '/banyaszat' },
  openGraph: {
    title: 'Bányászat és felelős tájhasználat',
    description: 'Haláp és Hajagos példája, bezárt bányák és természetvédelem a Tóti-hegyen.',
    url: '/banyaszat',
  },
}

export default function MiningPage() {
  return (
    <Page>
      <Mining />
    </Page>
  )
}
