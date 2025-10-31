'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Routes } from '@/constants/routes'
import * as Styled from './Header.styles'
import { H1 } from '@/styles/Typography'
import { theme } from '@/styles/theme'
import { useState } from 'react'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const items = Object.values(Routes)

  return (
    <Styled.Header>
      <Link href={Routes.HOME.path}>
        <Image src="/totikek-logo-blue.png" alt="logo" width={100} height={100} />
      </Link>
      <Link href={Routes.HOME.path} className="text-2xl font-bold text-blue-600">
        <H1
          style={{
            color: theme.colors.text.inverse,
          }}
        >
          Tótikék
        </H1>
      </Link>

      <Styled.Nav>
        <Styled.Menu id="site-menu" data-open={isOpen}>
          {items.map(it => (
            <li key={it.path}>
              <Link href={it.path} onClick={() => setIsOpen(false)}>
                {it.title}
              </Link>
            </li>
          ))}
        </Styled.Menu>
      </Styled.Nav>

      <Styled.MenuButton
        aria-label="Menü megnyitása"
        aria-controls="site-menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(v => !v)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme.colors.text.inverse}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </Styled.MenuButton>
    </Styled.Header>
  )
}
