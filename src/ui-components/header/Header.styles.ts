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

export const BurgerIcon = styled.div<{ $isOpen: boolean }>(({ $isOpen }) => ({
  width: 24,
  height: 18,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& span': {
    display: 'block',
    width: '100%',
    height: 2,
    backgroundColor: theme.colors.text.inverse,
    borderRadius: 2,
    transition: 'all 0.3s ease',
    transformOrigin: 'center',
  },
  '& span:nth-of-type(1)': {
    transform: $isOpen ? 'translateY(8px) rotate(45deg)' : 'none',
  },
  '& span:nth-of-type(2)': {
    opacity: $isOpen ? 0 : 1,
    transform: $isOpen ? 'scaleX(0)' : 'none',
  },
  '& span:nth-of-type(3)': {
    transform: $isOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
  },
}))

export const Menu = styled.ul<{ $isOpen: boolean }>(({ $isOpen }) => ({
  listStyle: 'none',
  margin: 0,
  padding: '0.75rem 1rem',
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
  zIndex: 40,
  opacity: $isOpen ? 1 : 0,
  transform: $isOpen ? 'translateY(0)' : 'translateY(-10px)',
  visibility: $isOpen ? 'visible' : 'hidden',
  pointerEvents: $isOpen ? 'auto' : 'none',
  transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease',
  '& li a': {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: theme.colors.text.inverse,
    textDecoration: 'none',
    fontWeight: 500,
  },
  '& li a:hover': {
    textDecoration: 'underline',
  },
}))
