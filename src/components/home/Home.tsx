'use client'

import { Page } from '@/ui-components/page/Page'
import { H1, H2, Body } from '@/styles/Typography'
import { theme } from '@/styles/theme'
import * as Styled from './Home.styles'
import Image from 'next/image'
import Link from 'next/link'

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
          óra alatt teljesíthető kényelmes tempóban. A szintemelkedés 198 m fel és le. Az útvonalat
          kék madártollak jelölik - kövesd ezeket a jelzéseket!
        </Body>

        <Image src="/fulop.png" alt="Fülöp a füleskuvik" width={350} height={350} />

        <H2>A tanösvény állomásai</H2>
        <Styled.StationsGrid>
          <li>
            <Link href="/kaptalantoti" aria-label="Barangolás Káptalantóti múltjában – oldal">
              <Body>Barangolás Káptalantóti múltjában</Body>
            </Link>
          </li>
          <li>
            <Link href="/viz-utja" aria-label="A víz útja Káptalantótiban – oldal">
              <Body>A víz útja Káptalantótiban</Body>
            </Link>
          </li>
          <li>
            <Link href="/madarvilag" aria-label="A Tóti-hegy izgalmas madárvilága – oldal">
              <Body>A Tóti-hegy izgalmas madárvilága</Body>
            </Link>
          </li>
          <li>
            <Link href="/banyaszat" aria-label="Bányászat és felelős tájhasználat – oldal">
              <Body>Bányászat és felelős tájhasználat</Body>
            </Link>
          </li>
          <li>
            <Link href="/novenyvilag" aria-label="A Tóti-hegy és környékének növényvilága – oldal">
              <Body>A Tóti-hegy és környékének növényvilága</Body>
            </Link>
          </li>
          <li>
            <Link href="/szolo" aria-label="Szőlészet és borászat – oldal">
              <Body>Szőlészet és borászat</Body>
            </Link>
          </li>
        </Styled.StationsGrid>

        <H2>Megközelítés</H2>
        <Body>
          Autóval: Tapolca felől érkezve Gyulakeszi után kell letérni Káptalantóti irányába, Zánka
          felé. Nemesgulács felől érkezve Nemesgulács után jobbra érdemes fordulni Káptalantóti
          felé. Zánka felől érkezve Köveskál után balra kell fordulni a piacnál, hogy elérd
          Káptalantótit.
        </Body>
        <Body>
          Tömegközlekedéssel: Vonattal Tapolcára érdemes érkezni, onnan a Tapolca–Zánka helyközi
          buszjárat halad át Káptalantótin. A menetrendek változhatnak; indulás előtt érdemes
          ellenőrizni.
        </Body>
        <Body>
          A tanösvény kezdőpontja: A tanösvény több pontról is megközelíthető. A fő kiindulópont a
          település központjában található, ahonnan jól jelzett útvonal vezet. Parkolási lehetőség
          van a templom közelében és a falu több pontján. Az útvonal változatos terepen halad:
          települési utcákon, mezei utakon, erdei ösvényeken, szőlődűlők között.
        </Body>

        <Styled.MapImageWrap>
          <Image
            src="/map.png"
            alt="Tótikék tanösvény térképe"
            width={1200}
            height={800}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </Styled.MapImageWrap>

        <Styled.MapWrap>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.221928337612!2d17.483!3d46.825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4769a7f2a1b9c2f1%3A0x0000000000000000!2sKáptalantóti!5e0!3m2!1shu!2shu!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Káptalantóti térkép"
          />
        </Styled.MapWrap>

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
