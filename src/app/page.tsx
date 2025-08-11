'use client'

import styles from './page.module.css'
import { Header } from '@/ui-components/header/Header'

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>totikék</main>
      <footer />
    </div>
  )
}
