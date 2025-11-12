import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from 'next/link'
import { theme } from '@/styles/theme'

const navStyles = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing[4],
  paddingTop: theme.spacing[4],
})

const btnStyles = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing[2],
  padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
  borderRadius: theme.borderRadius.md,
  background: theme.colors.primary[50],
  color: theme.colors.text.primary,
  textDecoration: 'none',
})

export const Nav = styled.nav(navStyles)
export const Prev = styled(Link)(btnStyles)
export const Next = styled(Link)(btnStyles)
