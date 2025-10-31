import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

const sectionStyles = css({
  padding: '1rem',
  display: 'grid',
  gap: '1rem',
  justifyItems: 'center',
})

const stationsGridStyles = css({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '0.5rem',
  ['@media (min-width: 640px)']: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
})

const infoGridStyles = css({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '0.75rem',
  ['@media (min-width: 640px)']: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
})

const cardStyles = css({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.75rem',
  backgroundColor: theme.colors.background.primary,
  border: `1px solid ${theme.colors.border.light}`,
  borderRadius: theme.borderRadius.md,
  padding: '0.75rem 1rem',
  boxShadow: theme.shadow.sm,
})

const iconWrapStyles = css({
  width: 28,
  height: 28,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.text.primary,
})

const mapWrapStyles = css({
  width: '100%',
  aspectRatio: '16 / 9',
  borderRadius: theme.borderRadius.md,
  overflow: 'hidden',
  ['& iframe']: {
    width: '100%',
    height: '100%',
    border: 0,
    display: 'block',
  },
})

export const Section = styled.section(sectionStyles)
export const StationsGrid = styled.ul(stationsGridStyles)
export const InfoGrid = styled.div(infoGridStyles)
export const Card = styled.div(cardStyles)
export const IconWrap = styled.div(iconWrapStyles)
export const MapWrap = styled.div(mapWrapStyles)
