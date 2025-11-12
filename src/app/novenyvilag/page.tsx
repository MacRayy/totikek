import type { Metadata } from 'next'
import { Page } from '@/ui-components/page/Page'
import { Plants } from '@/components/plants/Plants'

export const metadata: Metadata = {
  title: 'A Tóti-hegy és környékének növényvilága',
  description:
    'Őshonos és invazív fajok, pannon madárbirs és virágszőnyeg – tippek a természetbarát kertekhez.',
  alternates: { canonical: '/novenyvilag' },
  openGraph: {
    title: 'A Tóti-hegy és környékének növényvilága',
    description: 'Hogyan segíthetünk az őshonos növényeknek és óvhatjuk a tájat Káptalantótiban.',
    url: '/novenyvilag',
  },
}

export default function PlantsPage() {
  return (
    <Page>
      <Plants />
    </Page>
  )
}
