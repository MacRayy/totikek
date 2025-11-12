import type { Metadata } from 'next'
import { AboutUs } from '@/components/about-us/AboutUs'
import { Page } from '@/ui-components/page/Page'

export const metadata: Metadata = {
  title: 'Rólunk',
  description:
    'Ismerd meg a Tótikék tanösvény kezdeményezőit és céljait – történetek, természet és közösség Káptalantótiban.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'Rólunk – Tótikék',
    description: 'Kik vagyunk és miért hoztuk létre a Tótikék tanösvényt a Tóti-hegyen.',
    url: '/about',
  },
}

export default function About() {
  return (
    <Page>
      <AboutUs />
    </Page>
  )
}
