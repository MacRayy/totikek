'use client'
import { H1, H2, Body } from '@/styles/Typography'
import * as Styled from './Birdlife.styles'
import * as Nav from '@/ui-components/navigation/Navigation.styles'

export const Birdlife = () => {
  return (
    <Styled.Section>
      <H1 align="center">A tóti-hegy izgalmas madárvilága</H1>
      <Styled.Article>
        <H2>3. fejezet – Fülöp és a Tóti-hegy tollas titkai</H2>
        <Body>
          A Tóti-hegyre vezető ösvényen szálltam felfelé, a lágy szél végigsimított a tollaimon, és
          úgy éreztem, mintha az egész hegy halkan duruzsolna körülöttem. A nap éppen kibukkant a
          hegy mögül, hosszú árnyékokat rajzolva a kaszálórétekre.
        </Body>
        <Body>A hegy tetejéhez közeledve különös kopácsolás harsant fel. Tudtam, ki lehet az.</Body>
        <Body>– Hahó, Küllő Károly! – kiáltottam.</Body>
        <Body>
          A vastag bükkfa oldalán egy zöldes árny suhant le, majd egy vidám „krü-krü” kíséretében
          megjelent Károly, a zöld küllő.
        </Body>
        <Body>
          – Üdv, Fülöp barátom! – rikkantotta. – Ma épp hangyavadászaton vagyok! Tudtad, hogy a
          hegyoldal tele van finom falatokkal?
        </Body>
        <Body>
          – Te mindenütt találsz valami finomat – nevettem. – De mondd, milyen madarakat láttál ma?
        </Body>
        <Body>Károly büszkén kihúzta magát.</Body>
        <Body>
          Ó, rengeteget! – kezdte. – Reggel hollók köröztek a sziklák felett, aztán megjelent egy
          fekete harkály, aki úgy kopogott, mintha egész erdőt építene újra. A rét fölött vörös
          vércse vadászott, kecsesen lebegve a levegőben, és láttam gyurgyalagokat is – igazi
          színpompás művészek a magasban!
        </Body>
        <Body>Az ágak között hirtelen seregélycsapat húzott végig, tömör, mozgó felhőként.</Body>
        <Body>
          – Nézd csak őket! – mutatott Károly. – Amikor a szőlők érnek, aztán igazán tudnak táncolni
          az égen!
        </Body>
        <Body>A hegy alatti rétek felől mély, suhanó mozgás tört fel.</Body>
        <Body>– Kékes rétihéja – mondtam halkan. – Téli vendég, de milyen gyönyörű!</Body>
        <Body>
          – És itt van valahol a karvaly is – tette hozzá Károly. – Éles szemű, villámgyors, gyakran
          lep meg mindenkit az etetők környékén.
        </Body>
        <Body>Ahogy tovább sétáltunk, a bokrok közül dallam csendült fel.</Body>
        <Body>
          – Fülemüle Fanni biztosan gyakorol – nevette el magát Károly. – Ő mindig a nyár eleji
          éjszakák csillaga.
        </Body>
        <Body>
          A távolból jellegzetes „ku-ku” hívás szólalt meg, majd sárga villanás suhant át az ágak
          között.
        </Body>
        <Body>– Kakukk Karolina és Sárgarigó Sári – mosolyodtam el. – Jó látni őket is.</Body>
        <Body>
          – Egyre több balkáni gerle és örvös galamb jár erre – mondta Károly kissé elgondolkodva. –
          De sajnos a vadgerle már sokkal kevesebb… és a fecskék is egyre fogynak. Nem olyan könnyű
          nekik manapság.
        </Body>
        <Body>Felhorkantottam szomorkásan.</Body>
        <Body>
          – A gólyapár sem tér vissza minden évben. De a macskabagoly legalább kitart. Ő aztán
          biztos fészkelő a hegy környékén!
        </Body>
        <Body>
          – Mi madarak sokfélék vagyunk, Fülöp, de egy dolog közös bennünk: szükségünk van az
          emberek segítségére. Van, amit már nem tudunk egyedül megoldani.
        </Body>
        <Body>
          Ekkor leszálltam egy lapos bazaltkőre, és komolyan néztem körbe a hegyre, amely annyi
          életet rejt.
        </Body>
        <Body>
          – Magyarországon a madarak többsége védett – mondtam. – És mindenki tehet értük valamit.
          Tavasszal fészkelőhelyekkel vagy madárodúkkal segíthetünk. Nyáron itatót és fürdőhelyet
          érdemes kialakítani, mindig friss vízzel. Télen etetni az itt maradó madarakat… És jó, ha
          a kertekben hagyunk bokrokat és rejtekhelyeket is, mert ezek otthont és táplálékot adnak.
        </Body>
        <Body>Károly lelkes bólogatásba kezdett.</Body>
        <Body>– Pontosan! És ha valaki szeretne segíteni, te megmutathatod neki, Fülöp!</Body>
        <Body>
          Elmosolyodtam. – Akkor induljunk tovább… és aki kíváncsi, hogyan segíthet a madaraknak,
          kövesse tovább a kék tollaimat. Mutatják az utat a következő meséhez!
        </Body>
        <Body>
          A szél meglengette a tollaimat, és néhány kék pelyhem újra puhán hullott az ösvényre,
          előre vezetve mindenkit a történet folytatásához.
        </Body>
      </Styled.Article>
      <Nav.Nav>
        <Nav.Prev href="/viz-utja">← Előző: A víz útja</Nav.Prev>
        <Nav.Next href="/banyaszat">Következő: Bányászat →</Nav.Next>
      </Nav.Nav>
    </Styled.Section>
  )
}
