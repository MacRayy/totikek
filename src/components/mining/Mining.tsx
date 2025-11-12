'use client'
import { H1, H2, Body } from '@/styles/Typography'
import * as Styled from './Mining.styles'
import * as Nav from '@/ui-components/navigation/Navigation.styles'

export const Mining = () => {
  return (
    <Styled.Section>
      <H1 align="center">Bányászat és felelős tájhasználat</H1>
      <Styled.Article>
        <H2>4. fejezet – Fülöp, Vilmos és a vörösbegy kérdése</H2>
        <Body>
          A Tóti-hegy oldalán emelkedtem felfelé, amikor különös beszédfoszlányt sodort felém a
          szél. Két ismerős madárhang keveredett benne. Közelebb repültem, és hamarosan megláttam
          őket: Varjú Vilmos egy széles bazaltperemen ült, mellette pedig apró, vörös mellényét
          csillogtatva billegett jó barátja, Vörösbegy Vencel.
        </Body>
        <Body>
          – Ezt most akkor magyarázd el újra, Vilmos! – csipogta Vencel izgatottan. – Miért vannak
          ilyen egyenes, meredek falak a hegy oldalán? Nem hiszem el, hogy a természet csinálta!
        </Body>
        <Body>
          – És jól is teszed, hogy nem hiszed el – károgta Vilmos. – Ezek bizony emberi kezek
          munkái. Nézd csak, milyen élesek a vonalak! Ilyet az erózió nem hoz létre.
        </Body>
        <Body>Finoman melléjük szálltam.</Body>
        <Body>– Szervusztok! – köszöntöttem. – Miről folyt a vita?</Body>
        <Body>Vencel felém fordult.</Body>
        <Body>
          – Fülöp! Épp azt magyarázza nekem Vilmos, hogy ezek a sziklafalak nem is természetesek.
          Igaz ez?
        </Body>
        <Body>Vilmos bólogatott.</Body>
        <Body>
          – Bizony igaz. Az emberek már nagyon régóta bányászták a bazaltot. Kőbalták is előkerültek
          a környéken, a rómaiak pedig a Borostyán út építéséhez hordták innen a követ.
        </Body>
        <Body>Vencel füttyentett egyet.</Body>
        <Body>– És azt hittem, csak fán és bogáron múlik a világ! – mondta csodálkozva.</Body>
        <Body>Vilmos nevetett.</Body>
        <Body>
          – Ó, barátom, a hegy története sokkal nagyobb falat, mint egy hernyó! Az itt élők már
          régen is használták a bazaltot: házakhoz, kutakhoz, kerítésekhez, és persze a
          szőlőteraszok támfalaihoz. A mai napig láthatjuk a szépen rakott szárazkő falakat.
        </Body>
        <Body>– De mikor lett ilyen nagy baj? – kérdeztem.</Body>
        <Body>A varjú hangja elkomolyodott.</Body>
        <Body>
          – 1909-ben, amikor a balatoni vasutat építették. Megindult az ipari kitermelés. A Haláp és
          a Hajagos hegy szinte teljesen eltűnt. Elhordták őket, Fülöp! Egykor olyan nagyok voltak,
          mint a Badacsony.
        </Body>
        <Body>Vencel szárnya megrebbent a döbbenettől.</Body>
        <Body>– Egy hegyet… elhordtak?</Body>
        <Body>
          – Kettőt – pontosította Vilmos csendesen. – És nemcsak a táj sérült. A badacsonyi bányában
          politikai foglyokat dolgoztattak hosszú évekig. Nagyon sötét időszak volt ez.
        </Body>
        <Body>
          A szél ekkor megmozgatta a bazaltot borító mohokat, mintha a hegy maga is emlékezne.
        </Body>
        <Body>
          – De aztán jött a változás – folytatta Vilmos. – Az 1960-as évektől a természetvédők
          felléptek, és sok bányát bezártak. Szerencsére a Tóti-hegyen soha nem volt nagy gyártelep,
          csak kis kézi fejtés. Ezért maradt meg ilyen épen.
        </Body>
        <Body>Vencel fekete szeme csillogott, ahogy végignézett a tájon.</Body>
        <Body>– És most? Helyrejön a hegy?</Body>
        <Body>Mosolyogva mutattam a repedésekből előbújó zöld növénykékre.</Body>
        <Body>
          – Igen, Vencel. A természet visszaveszi a helyét. Az elhagyott bányaudvarokon megjelentek
          az első pionír növények. Fű, moha, zuzmó, cserjék… minden, ami új életet hoz.
        </Body>
        <Body>Vilmos bólintott.</Body>
        <Body>
          – Mi, madarak is segítünk. Magot hordunk, gallyat, életet. Együtt dolgozunk a heggyel.
        </Body>
        <Body>
          A szél játékos mozdulattal kitépett néhány kék tollpihét a szárnyam alól, és azok lassan a
          mélybe libbentek.
        </Body>
        <Body>
          – Kövessétek tovább a kék tollaimat – szóltam halkan. – Ha beszkenneled a következő kódot,
          elmesélem, mely állatok dolgoznak a heggyel együtt, hogy újra élő és egészséges legyen.
        </Body>
        <Body>
          Vilmos és Vencel egyszerre biccentett – barátságuk olyan természetes volt, mint a hegyet
          borító erdő.
        </Body>
      </Styled.Article>
      <Nav.Nav>
        <Nav.Prev href="/madarvilag">← Előző: Madárvilág</Nav.Prev>
        <Nav.Next href="/novenyvilag">Következő: Növényvilág →</Nav.Next>
      </Nav.Nav>
    </Styled.Section>
  )
}
