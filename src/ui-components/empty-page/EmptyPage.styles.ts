import styled from '@emotion/styled'
import { css } from '@emotion/react'

const containerStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  gap: '2rem',
  padding: '1rem',
  width: '100%',
  flexDirection: 'column',
})

export const Container = styled.header(containerStyles)
