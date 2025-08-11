import styled from '@emotion/styled'
import { theme } from '@/styles/theme'

export const Header = styled.header({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '0 1rem',
  backgroundColor: theme.colors.background.inverse,
  width: '100%',
})
