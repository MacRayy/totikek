import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

const footerStyle = css({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
  width: '100%',
})

const imageWrapperStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  flexWrap: 'wrap',
})

const imageStyle = css({
  height: '2rem',
  width: 'auto',
})

const copyrightStyle = css({
  fontSize: theme.fontSize.sm,
  textAlign: 'center',
  color: 'var(--foreground)',
})

export const Footer = styled.footer(footerStyle)

export const ImageWrapper = styled.div(imageWrapperStyle)

export const Image = styled.img(imageStyle)

export const Copyright = styled.p(copyrightStyle)
