import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { theme } from '@/styles/theme'

const sectionStyles = css({
  padding: '1rem',
  display: 'grid',
  gap: '1rem',
  justifyItems: 'center',
  maxWidth: 900,
  margin: '0 auto',
})

const contentStyles = css({
  width: '100%',
  display: 'grid',
  gap: '0.75rem',
})

const activitiesListStyles = css({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '0.75rem',
  ['@media (min-width: 640px)']: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
})

const cardStyles = css({
  backgroundColor: theme.colors.background.primary,
  border: `1px solid ${theme.colors.border.light}`,
  borderRadius: theme.borderRadius.md,
  padding: '0.75rem 1rem',
  boxShadow: theme.shadow.sm,
})

export const Section = styled.section(sectionStyles)
export const Content = styled.div(contentStyles)
export const ActivitiesList = styled.ul(activitiesListStyles)
export const Card = styled.li(cardStyles)
