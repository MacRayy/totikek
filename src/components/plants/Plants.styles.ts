import styled from '@emotion/styled'
import { css } from '@emotion/react'

const sectionStyles = css({
  padding: '1rem',
  display: 'grid',
  gap: '1rem',
})

const articleStyles = css({
  display: 'grid',
  gap: '1rem',
  maxWidth: 900,
})

export const Section = styled.section(sectionStyles)
export const Article = styled.article(articleStyles)
