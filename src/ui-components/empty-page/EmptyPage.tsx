'use client'

import type { PropsWithChildren, ReactNode } from 'react'
import Image from 'next/image'
import * as Styled from './EmptyPage.styles'
import { H2 } from '@/styles/Typography'

type Props = {
  title?: string | ReactNode
  description?: string | ReactNode
}

export const EmptyPage = ({
  children,
  title = 'Itt valami készül...',
  description = 'Ez az oldal jelenleg fejlesztés alatt áll.',
}: PropsWithChildren<Props>) => {
  return (
    <Styled.Container>
      <Image src="/fulop.png" alt="Fülöp a füleskuvik" width={350} height={350} />
      <H2>{title}</H2>
      <p>{description}</p>
      {children}
    </Styled.Container>
  )
}
