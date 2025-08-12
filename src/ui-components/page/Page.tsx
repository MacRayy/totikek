'use client'

import type { PropsWithChildren } from 'react'
import { Header } from '@/ui-components/header/Header'
import * as Styled from './Page.styles'

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <Styled.Page className="page">
      <Header />
      <main>{children}</main>
      <footer />
    </Styled.Page>
  )
}
