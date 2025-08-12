'use client'

import styles from './page.module.css'
import { Header } from '@/ui-components/header/Header'
import { EmptyPage } from '@/ui-components/empty-page/EmptyPage'

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <EmptyPage>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <p>
              Ez az oldal a Tótikék tanösvény weboldala, ahol mesék és kiegésítő tartalmak
              olvashotók.
            </p>
            <p>A fejlesztés alatt álló oldalon hamarosan elérhető lesz a teljes élmény.</p>
          </div>
        </EmptyPage>
      </main>
      <footer />
    </div>
  )
}
