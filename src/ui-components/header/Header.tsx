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
        <Styled.Menu id="site-menu" $isOpen={isOpen}>
          {items.map(it => (
            <li key={it.path}>
              <Link href={it.path} onClick={() => setIsOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d={it.icon} />
                </svg>
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
        <Styled.BurgerIcon $isOpen={isOpen}>
          <span />
          <span />
          <span />
        </Styled.BurgerIcon>
      </Styled.MenuButton>
    </Styled.Header>
  )
}
