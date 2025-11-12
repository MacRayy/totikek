import type { Metadata } from 'next'
import { Page } from '@/ui-components/page/Page'
import { Water } from '@/components/water/Water'

export const metadata: Metadata = {
  title: 'A víz útja Káptalantótiban',
  description:
    'Karsztforrások, patakok és természetes vízvisszatartás – Fülöp történetében bejárjuk a víz szerepét Káptalantótiban.',
  alternates: { canonical: '/viz-utja' },
  openGraph: {
    title: 'A víz útja Káptalantótiban',
    description: 'Források és élőhelyek – hogyan óvjuk a vizet és a tájat Káptalantótiban.',
    url: '/viz-utja',
  },
}

export default function WaterPage() {
  return (
    <Page>
      <Water />
    </Page>
  )
}
