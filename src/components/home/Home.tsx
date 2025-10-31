'use client'

import { Page } from '@/ui-components/page/Page'
import { H1, H2, Body } from '@/styles/Typography'
import { theme } from '@/styles/theme'
import * as Styled from './Home.styles'
import Image from 'next/image'

const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={theme.colors.accent.warning}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12" y2="17" />
  </svg>
)

const LeafIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={theme.colors.accent.success}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 3a8.5 8.5 0 1 0 8 8 8.5 8.5 0 0 0-8-8Z" />
    <path d="M2 22s3-3 7-3 7 3 7 3" />
  </svg>
)

const TrashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={theme.colors.accent.teal}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
)

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={theme.colors.primary[500]}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="8" />
  </svg>
)

export const Home = () => {
  return (
    <Page>
      <Styled.Section>
        <H1 align="center">Tótikék Tanösvény - Káptalantóti</H1>

        <H2>Üdvözlünk a Tóti-hegyen!</H2>
        <Body>
          A Tótikék tanösvény egy 6,3 km hosszú kirándulási útvonal Káptalantótiban, amely bemutatja
          a település gazdag történelmét, természeti értékeit és kulturális örökségét. A túra kb. 3
          óra alatt teljesíthető kényelmes tempóban. Az útvonalat kék madártollak jelölik - kövesd
          ezeket a jelzéseket!
        </Body>

        <Image src="/fulop.png" alt="Fülöp a füleskuvik" width={350} height={350} />

        <H2>A tanösvény állomásai</H2>
        <Styled.StationsGrid>
          <li>
            <Body>Barangolás Káptalantóti múltjában</Body>
          </li>
          <li>
            <Body>A víz útja Káptalantótiban</Body>
          </li>
          <li>
            <Body>A Tóti-hegy izgalmas madárvilága</Body>
          </li>
          <li>
            <Body>Bányászat és felelős tájhasználat</Body>
          </li>
          <li>
            <Body>A Tóti-hegy és környékének növényvilága</Body>
          </li>
          <li>
            <Body>Szőlészet és borászat</Body>
          </li>
        </Styled.StationsGrid>

        <H2>Megközelítés</H2>
        <Body>
          Autóval: Káptalantótihoz a 77-es főútról Tapolca irányából érkezve, Nemesgulácsnál kell
          letérni észak felé. Budapest felől az M7-es autópályáról a balatonederici lehajtónál kell
          lehajtani, majd a 71-es főúton Tapolca felé haladva Nemesgulácsnál észak felé fordulni.
        </Body>
        <Body>
          Tömegközlekedéssel: Vonattal Tapolca vasútállomásra érkezve, onnan helyközi busszal lehet
          eljutni Káptalantótiba. A buszjáratok a Tapolca-Sümeg vonalon közlekednek, megállva a
          településen.
        </Body>
        <Body>
          A tanösvény kezdőpontja: A tanösvény több pontról is megközelíthető. A fő kiindulópont a
          település központjában található, ahonnan jól jelzett útvonal vezet. Parkolási lehetőség
          van a templom közelében és a falu több pontján. Az útvonal változatos terepen halad:
          települési utcákon, mezei utakon, erdei ösvényeken.
        </Body>

        <H2>Tótikék kisokos</H2>
        <Styled.InfoGrid>
          <Styled.Card>
            <Styled.IconWrap>
              <WarningIcon />
            </Styled.IconWrap>
            <Body>Fontos tudnivalók: A tanösvényt mindenki saját felelősségre járhatja be.</Body>
          </Styled.Card>
          <Styled.Card>
            <Styled.IconWrap>
              <LeafIcon />
            </Styled.IconWrap>
            <Body>
              Vigyázzunk a természetre! A tanösvény növényei és állatai a saját élőhelyükön érzik
              jól magukat. Kérjük, csak az élményt vidd haza!
            </Body>
          </Styled.Card>
          <Styled.Card>
            <Styled.IconWrap>
              <TrashIcon />
            </Styled.IconWrap>
            <Body>
              Tisztaság és környezetvédelem: Kérjük, hogy óvjátok a Tótikék tanösvény tisztaságát és
              élővilágának nyugalmát! A kirándulás során keletkezett szemetet vigyétek magatokkal,
              ne hagyjátok a tanösvényen!
            </Body>
          </Styled.Card>
          <Styled.Card>
            <Styled.IconWrap>
              <InfoIcon />
            </Styled.IconWrap>
            <Body>
              Praktikus információk: Ha a kirándulás során WC-re kell menni, van rá lehetőség. Az
              ösvénytől kicsit távolabb, kis gödör kialakításával, majd talaj-, kő-, vagy
              avartakarással hagyhatsz rendet magad után.
            </Body>
          </Styled.Card>
        </Styled.InfoGrid>
      </Styled.Section>
    </Page>
  )
}
