const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://totikek.hu'

// Main organization/project schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tótikék',
  url: siteUrl,
  logo: `${siteUrl}/totikek-logo-blue.png`,
  description:
    'A Tótikék tanösvény Káptalantótiban - történelem, természet és kulturális örökség a Balaton-felvidéken.',
}

// Tourist attraction schema for the trail
const touristAttractionSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Tótikék Tanösvény',
  alternateName: 'Tótikék Trail',
  description:
    'A Tótikék tanösvény egy 6,3 km hosszú kirándulási útvonal Káptalantótiban, amely bemutatja a település történelmét, természeti értékeit és kulturális örökségét. A túra kb. 3 óra alatt teljesíthető.',
  url: siteUrl,
  image: `${siteUrl}/totikek-logo-blue.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Káptalantóti',
    addressRegion: 'Veszprém',
    addressCountry: 'HU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.825,
    longitude: 17.483,
  },
  touristType: ['Hikers', 'Nature lovers', 'Families'],
  availableLanguage: {
    '@type': 'Language',
    name: 'Hungarian',
    alternateName: 'hu',
  },
  isAccessibleForFree: true,
  publicAccess: true,
}

// Hiking trail specific schema
const hikingTrailSchema = {
  '@context': 'https://schema.org',
  '@type': 'Place',
  '@id': `${siteUrl}/#trail`,
  name: 'Tótikék Tanösvény',
  description: '6,3 km-es tanösvény a Tóti-hegyen, Káptalantótiban',
  url: siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Káptalantóti',
    addressRegion: 'Veszprém megye',
    addressCountry: 'HU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.825,
    longitude: 17.483,
  },
  containedInPlace: {
    '@type': 'Place',
    name: 'Balaton-felvidék',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Veszprém megye',
      addressCountry: 'HU',
    },
  },
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Útvonal hossza',
      value: '6,3 km',
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Szintemelkedés',
      value: '198 m',
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Időtartam',
      value: '3 óra',
    },
  ],
}

// FAQ schema for common questions
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Milyen hosszú a Tótikék tanösvény?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Tótikék tanösvény 6,3 km hosszú, és körülbelül 3 óra alatt teljesíthető kényelmes tempóban. A szintemelkedés 198 m fel és le.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hogyan lehet megközelíteni a Tótikék tanösvényt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Autóval Tapolca, Nemesgulács vagy Zánka felől érhető el Káptalantóti. Tömegközlekedéssel vonattal Tapolcáig, onnan a Tapolca–Zánka helyközi buszjárattal. A kiindulópont a település központjában van, parkolási lehetőség a templom közelében.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hol található a Tótikék tanösvény?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tanösvény Káptalantótiban található, a Tóti-hegyen, a Balaton-felvidéken. A falu hét hegy ölelésében fekszik: Tóti-hegy, Gulács, Szent György-hegy, Csobánc, Hajagos, Bács és Sabar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mit lehet látni a Tótikék tanösvényen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tanösvény 6 állomáson keresztül mutatja be a település történelmét, a víz útját, a madárvilágot, a bányászati múltat, a növényvilágot, valamint a szőlészeti és borászati hagyományokat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ingyenes a Tótikék tanösvény?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Igen, a Tótikék tanösvény ingyenesen bejárható. A tanösvényt mindenki saját felelősségre járhatja be.',
      },
    },
  ],
}

// Breadcrumb schema for navigation
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Kezdőlap',
      item: siteUrl,
    },
  ],
}

// Website schema for sitelinks search box
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tótikék Tanösvény',
  url: siteUrl,
  description:
    'A Tótikék tanösvény egy 6,3 km hosszú kirándulási útvonal Káptalantótiban, a Balaton-felvidéken.',
  inLanguage: 'hu-HU',
  publisher: {
    '@type': 'Organization',
    name: 'Tótikék',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/totikek-logo-blue.png`,
    },
  },
}

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hikingTrailSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
