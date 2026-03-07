import Link from 'next/link'
import * as Styled from './Footer.styles'

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

export const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.ImageWrapper>
        <a
          href="https://www.facebook.com/profile.php?id=61558080938183"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook – 7hegyfalu profil"
        >
          <Styled.Image src="/7hegyfalu-logo.png" alt="7 Hegy Falu Logo" />
        </a>
        <a
          href="https://molujeuropaalapitvany.hu/palyazatok/fenntarthatosag-gazdasagfejlesztes/zold-oazis"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="MOL – Új Európa Alapítvány – Zöld Oázis program"
        >
          <Styled.Image src="/zold_oazis_logo_ok_CMYK.png" alt="Zöld Oázis Logo" />
        </a>
        <a
          href="https://kaptalantoti.hu/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Káptalantóti hivatalos weboldala"
        >
          <Styled.Image src="/toti-cimer.png" alt="Káptalantóti címer" />
        </a>
        <a
          href="https://www.bfnp.hu/hu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Balaton-felvidéki Nemzeti Park Igazgatóság weboldala"
        >
          <Styled.Image src="/logo-bfnp-hu.svg" alt="Balaton-felvidéki Nemzeti Park" />
        </a>
        <Link href="/" aria-label="Tótikék Tanösvény – Kezdőlap">
          <Styled.Image src="/totikek-logo.png" alt="Tótikék Tanösvény Logo" />
        </Link>
        <Styled.FacebookLink
          href="https://www.facebook.com/profile.php?id=61558080938183"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tótikék Facebook oldal"
        >
          <FacebookIcon />
        </Styled.FacebookLink>
      </Styled.ImageWrapper>

      <Styled.Copyright>&copy; 2025 Tótikék Tanösvény. Minden jog fenntartva.</Styled.Copyright>
    </Styled.Footer>
  )
}
