import { EmptyPage } from '@/ui-components/empty-page/EmptyPage'
import { Page } from '@/ui-components/page/Page'

export default function Home() {
  return (
    <Page>
      <EmptyPage>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <p>
            Ez az oldal a Tótikék tanösvény weboldala, ahol mesék és kiegésítő tartalmak olvashotók.
          </p>
          <p>A fejlesztés alatt álló oldalon hamarosan elérhető lesz a teljes élmény.</p>
        </div>
      </EmptyPage>
      <footer />
    </Page>
  )
}
