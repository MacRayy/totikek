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
  maxWidth: '75vw',
  textAlign: 'center',
})

export const Container = styled.header(containerStyles)
