import type { Metadata } from 'next'
import { Page } from '@/ui-components/page/Page'
import { History } from '@/components/history/History'

export const metadata: Metadata = {
  title: 'Káptalantóti története',
  description:
    'Fülöp és Borz Bendegúz meséjén keresztül megismerheted Káptalantóti múltját és a templom környékének különlegességeit.',
  alternates: { canonical: '/kaptalantoti' },
  openGraph: {
    title: 'Káptalantóti története',
    description:
      'Történetek a templomról, a Szentháromság-szoborról és a falu múltjáról a Tóti-hegy lábánál.',
    url: '/kaptalantoti',
  },
}

export default function HistoryPage() {
  return (
    <Page>
      <History />
    </Page>
  )
}
