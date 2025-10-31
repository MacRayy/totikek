'use client'

import styled from '@emotion/styled'
import { theme } from '@/styles/theme'

interface TypographyProps {
  children: React.ReactNode
  color?: 'primary' | 'secondary' | 'muted' | 'inverse'
  align?: 'left' | 'center' | 'right'
  className?: string
}

// Heading Components
export const H1 = styled.h1<Pick<TypographyProps, 'color' | 'align'>>`
  font-size: ${theme.fontSize['4xl']};
  font-weight: ${theme.fontWeight.bold};
  line-height: ${theme.lineHeight.tight};
  margin-bottom: 0;
  color: ${({ color = 'primary' }) => theme.colors.text[color]};
  text-align: ${({ align = 'left' }) => align};

  @media (max-width: 768px) {
    font-size: ${theme.fontSize['3xl']};
  }
`

export const H2 = styled.h2<Pick<TypographyProps, 'color' | 'align'>>`
  font-size: ${theme.fontSize['3xl']};
  font-weight: ${theme.fontWeight.bold};
  line-height: ${theme.lineHeight.tight};
  margin-bottom: 0;
  color: ${({ color = 'primary' }) => theme.colors.text[color]};
  text-align: ${({ align = 'left' }) => align};

  @media (max-width: 768px) {
    font-size: ${theme.fontSize['2xl']};
  }
`

export const H3 = styled.h3<Pick<TypographyProps, 'color' | 'align'>>`
  font-size: ${theme.fontSize['2xl']};
  font-weight: ${theme.fontWeight.semibold};
  line-height: ${theme.lineHeight.snug};
  margin-bottom: 0;
  color: ${({ color = 'primary' }) => theme.colors.text[color]};
  text-align: ${({ align = 'left' }) => align};
`

export const H4 = styled.h4<Pick<TypographyProps, 'color' | 'align'>>`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.semibold};
  line-height: ${theme.lineHeight.snug};
  margin-bottom: 0;
  color: ${({ color = 'primary' }) => theme.colors.text[color]};
  text-align: ${({ align = 'left' }) => align};
`

export const H5 = styled.h5<Pick<TypographyProps, 'color' | 'align'>>`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.medium};
  line-height: ${theme.lineHeight.snug};
  margin-bottom: 0;
  color: ${({ color = 'primary' }) => theme.colors.text[color]};
  text-align: ${({ align = 'left' }) => align};
`

// Body Text Components
export const Body = styled.p<Pick<TypographyProps, 'color' | 'align'>>`
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.normal};
  line-height: ${theme.lineHeight.relaxed};
  margin-bottom: 0;
  color: ${({ color = 'primary' }) => theme.colors.text[color]};
  text-align: ${({ align = 'left' }) => align};
`

export const BodyLarge = styled.p<Pick<TypographyProps, 'color' | 'align'>>`
  font-size: ${theme.fontSize.lg};
  font-weight: ${theme.fontWeight.normal};
  line-height: ${theme.lineHeight.relaxed};
  margin-bottom: 0;
  color: ${({ color = 'primary' }) => theme.colors.text[color]};
  text-align: ${({ align = 'left' }) => align};
`

export const BodySmall = styled.p<Pick<TypographyProps, 'color' | 'align'>>`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.normal};
  line-height: ${theme.lineHeight.normal};
  margin-bottom: 0;
  color: ${({ color = 'muted' }) => theme.colors.text[color]};
  text-align: ${({ align = 'left' }) => align};
`

// Special Text Components
export const Lead = styled.p<Pick<TypographyProps, 'color' | 'align'>>`
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.light};
  line-height: ${theme.lineHeight.relaxed};
  margin-bottom: 0;
  color: ${({ color = 'secondary' }) => theme.colors.text[color]};
  text-align: ${({ align = 'left' }) => align};
`

export const Caption = styled.span<Pick<TypographyProps, 'color' | 'align'>>`
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight.medium};
  line-height: ${theme.lineHeight.normal};
  color: ${({ color = 'muted' }) => theme.colors.text[color]};
  text-align: ${({ align = 'left' }) => align};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const Code = styled.code`
  font-family: ${theme.fontFamily.mono};
  font-size: ${theme.fontSize.sm};
  background-color: ${theme.colors.neutral[100]};
  color: ${theme.colors.primary[700]};
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid ${theme.colors.border.light};
`

// Link Component
export const Link = styled.a<Pick<TypographyProps, 'color'>>`
  color: ${theme.colors.primary[500]};
  text-decoration: none;
  font-weight: ${theme.fontWeight.medium};
  transition: all ${theme.transition.fast};

  &:hover {
    color: ${theme.colors.primary[600]};
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary[500]};
    outline-offset: 2px;
    border-radius: ${theme.borderRadius.sm};
  }
`

// Blockquote
export const Blockquote = styled.blockquote`
  border-left: 4px solid ${theme.colors.primary[500]};
  padding-left: ${theme.spacing[4]};
  margin: ${theme.spacing[6]} 0;
  font-style: italic;
  font-size: ${theme.fontSize.lg};
  color: ${theme.colors.text.secondary};
  background-color: ${theme.colors.primary[50]};
  padding: ${theme.spacing[4]} ${theme.spacing[4]} ${theme.spacing[4]} ${theme.spacing[6]};
  border-radius: 0 ${theme.borderRadius.md} ${theme.borderRadius.md} 0;
`
