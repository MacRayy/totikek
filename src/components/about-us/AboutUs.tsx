'use client'
import { H1, H2, Body } from '@/styles/Typography'
import * as Styled from './AboutUs.styles'

export const AboutUs = () => {
  return (
    <Styled.Section>
      <Styled.Content>
        <H1>Rólunk</H1>
        <H2>„TÓTIKÉK” – Tanösvény a Tóti-hegyre</H2>
        <Body>
          A 7hegyfalu Környezetfejlesztő Egyesület a MOL – Új Európa Alapítvány Zöld Oázis
          Programjának támogatásával, Káptalantóti Község Önkormányzata és a Balaton-felvidéki
          Nemzeti Park Igazgatósága együttműködésében új tanösvényt alakított ki a Tóti-hegyre
          vezető út mentén.
        </Body>
        <Body>
          A projekt célja, hogy a Balaton-felvidék egyik legnépszerűbb kirándulóhelye, a Tóti-hegy
          mindenki számára biztonságosan és fenntartható módon legyen elérhető.
        </Body>
        <Body>
          A 346 méter magas Tóti-hegy évente több ezer látogatót vonz, azonban a jelenlegi
          turistaútvonal sok helyen elhanyagolt, nehezen követhető és meredek szakaszai miatt sokak
          számára megközelíthetetlen volt. A fejlesztés célja, hogy a természetes környezet
          megőrzésével, ugyanakkor annak védelmét és elérhetőségét erősítve, akadálymentes és
          biztonságos tanösvény jöjjön létre.
        </Body>
        <H2>A projekt fő céljai és tevékenységei</H2>
        <Body>
          A „Tótikék” projekt 2025. március 1. és október 31. között valósult meg, közösségi
          összefogással.
        </Body>
        <Body as="div">A fejlesztés során az alábbi tevékenységek történnek:</Body>
        <Styled.ActivitiesList>
          <Styled.Card>
            Túraútvonal tereprendezése – szemétszedés, bozótirtás, a természetes környezet
            helyreállítása közösségi munkával.
          </Styled.Card>
          <Styled.Card>
            Tanösvény kialakítása – 6 db térképes, interaktív tábla elhelyezése a természetvédelem,
            a víz- és borkultúra, valamint a Tóti-hegy földtani értékeinek bemutatására.
          </Styled.Card>
          <Styled.Card>
            Pihenőhelyek és élőhelyek kialakítása – 5 pihenőpad, madárodúk és 30 őshonos fa
            telepítése, fasorok létrehozása az árnyékolás és a biodiverzitás növelésére.
          </Styled.Card>
          <Styled.Card>
            Biztonsági fejlesztések – falépcsők létesítése a meredek szakaszokon, természetes
            anyagok felhasználásával.
          </Styled.Card>
        </Styled.ActivitiesList>
        <Body>
          Ha bármi kérdése, észrevétele van a TÓTIKÉK tanösvénnyel kapcsolatban, keresse a 7hegyfalu
          Környezetfejlesztő Egyesületet emailen a{' '}
          <a href="mailto:7hegyfalu@gmail.com">7hegyfalu@gmail.com</a> címen vagy a{' '}
          <a
            href="https://www.facebook.com/profile.php?id=61558080938183"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebookon
          </a>
          .
        </Body>
      </Styled.Content>
    </Styled.Section>
  )
}
