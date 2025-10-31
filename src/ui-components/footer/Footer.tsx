import * as Styled from './Footer.styles'
import { Copyright } from './Footer.styles'

export const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.ImageWrapper>
        <Styled.Image src="/7hegyfalu-logo.png" alt="7 Hegy Falu Logo" />
        <Styled.Image src="/zold_oazis_logo_ok_CMYK.png" alt="Zöld Oázis Logo" />
        <Styled.Image src="/toti-cimer.png" alt="Toti cimer" />
        <Styled.Image src="/logo-bfnp-hu.svg" alt="Balatonfelvidéki nemzeti park logo" />
        <Styled.Image src="/totikek-logo.png" alt="Tótikék Tanösvény Logo" />
      </Styled.ImageWrapper>

      <Styled.Copyright>&copy; 2025 Tótikék Tanösvény. Minden jog fenntartva.</Styled.Copyright>
    </Styled.Footer>
  )
}
