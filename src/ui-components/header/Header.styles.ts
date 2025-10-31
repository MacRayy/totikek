import styled from '@emotion/styled'
import { theme } from '@/styles/theme'
import { css } from '@emotion/react'

const headerStyles = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '0 1rem',
  backgroundColor: theme.colors.background.inverse,
  width: '100%',
  justifyContent: 'flex-start',
  position: 'sticky',
  top: 0,
  zIndex: 50,
})

export const Header = styled.header(headerStyles)

export const Nav = styled.nav({})

export const MenuButton = styled.button({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: theme.borderRadius.md,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  marginLeft: 'auto',
})

export const Menu = styled.ul({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'none',
  gap: '1rem',
  '&[data-open="true"]': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    position: 'absolute',
    left: 0,
    right: 0,
    top: '100%',
    backgroundColor: theme.colors.background.inverse,
    boxShadow: theme.shadow.md,
    padding: '0.75rem 1rem',
    zIndex: 40,
  },
  '& li a': {
    color: theme.colors.text.inverse,
    textDecoration: 'none',
    fontWeight: 500,
  },
  '& li a:hover': {
    textDecoration: 'underline',
  },
})
