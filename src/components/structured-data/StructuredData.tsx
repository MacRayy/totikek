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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
