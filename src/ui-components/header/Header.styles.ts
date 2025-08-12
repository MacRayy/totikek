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
})

export const Header = styled.header(headerStyles)
