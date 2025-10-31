import { css } from '@emotion/react'
import styled from '@emotion/styled'

const pageStyles = css({
  display: 'grid',
  gridTemplateRows: 'auto 1fr auto',
  alignItems: 'center',
  justifyItems: 'center',
  minHeight: '100svh',

  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    gridRowStart: '2',
  },

  ['@media (max-width: 600px)']: {
    ['main']: {
      alignItems: 'center',
    },
  },
})

export const Page = styled('div')(() => pageStyles)
