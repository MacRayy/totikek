'use client'

import type { PropsWithChildren } from 'react'
import { Header } from '@/ui-components/header/Header'
import { Footer } from '@/ui-components/footer/Footer'
import * as Styled from './Page.styles'

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <Styled.Page className="page">
      <Header />
      <main>{children}</main>
      <Footer />
    </Styled.Page>
  )
}
