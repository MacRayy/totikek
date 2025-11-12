import Link from 'next/link'
import * as Styled from './Footer.styles'

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
      </Styled.ImageWrapper>

      <Styled.Copyright>&copy; 2025 Tótikék Tanösvény. Minden jog fenntartva.</Styled.Copyright>
    </Styled.Footer>
  )
}
