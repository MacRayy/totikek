import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from 'next/link'

const navStyles = css({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1rem',
  paddingTop: '1rem',
})

const btnStyles = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  background: 'var(--color-primary-50)',
  color: 'inherit',
  textDecoration: 'none',
})

export const Nav = styled.nav(navStyles)
export const Prev = styled(Link)(btnStyles)
export const Next = styled(Link)(btnStyles)
