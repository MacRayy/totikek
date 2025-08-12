import Image from 'next/image'
import Link from 'next/link'
import { Routes } from '@/constants/routes'
import * as Styled from './Header.styles'
import { H1 } from '@/styles/Typography'
import { theme } from '@/styles/theme'

export const Header = () => {
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
    </Styled.Header>
  )
}
