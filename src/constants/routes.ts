export const Routes = {
  HOME: {
    path: '/',
    title: 'Kezdőlap',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  ABOUT: {
    path: '/about',
    title: 'Rólunk',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  HISTORY: {
    path: '/kaptalantoti',
    title: 'Káptalantóti',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  WATER: {
    path: '/viz-utja',
    title: 'A víz útja',
    icon: 'M12 3c-1.5 0-3 1.5-3 4 0 2 1.5 3.5 3 5.5 1.5-2 3-3.5 3-5.5 0-2.5-1.5-4-3-4zm-6 8c-1 0-2 1-2 2.5 0 1.2 1 2.2 2 3.5 1-1.3 2-2.3 2-3.5 0-1.5-1-2.5-2-2.5zm12 0c-1 0-2 1-2 2.5 0 1.2 1 2.2 2 3.5 1-1.3 2-2.3 2-3.5 0-1.5-1-2.5-2-2.5zm-6 5c-1 0-2 1-2 2.5 0 1.2 1 2.2 2 3.5 1-1.3 2-2.3 2-3.5 0-1.5-1-2.5-2-2.5z',
  },
  BIRDLIFE: {
    path: '/madarvilag',
    title: 'Madarvilág',
    icon: 'M16 7c0 1.5-1.5 3-4 4-2.5-1-4-2.5-4-4 0-2.5 2-4 4-4s4 1.5 4 4zM4 14c0 0 2-1 4-1s4 2 4 2 2-2 4-2 4 1 4 1M8 13l-4 6M16 13l4 6M12 13v8',
  },
  MINING: {
    path: '/banyaszat',
    title: 'Bányászat',
    icon: 'M14.121 14.121L19 19m-7-14v4m-4.879 1.879L3 7m11.879 4.879L19 7M6.343 17.657L3 21m9-9a3 3 0 11-6 0 3 3 0 016 0z',
  },
  PLANTS: {
    path: '/novenyvilag',
    title: 'Növényvilág',
    icon: 'M12 21c-3-3-7-6-7-10a7 7 0 0114 0c0 4-4 7-7 10zm0 0V11m0 0c2-2 4-3 6-3m-6 3c-2-2-4-3-6-3',
  },
  WINE: {
    path: '/szolo',
    title: 'Szőlő és bor',
    icon: 'M12 19V8m0 0c-2 0-4-1-4-4h8c0 3-2 4-4 4zm-3 11h6M9 5c0-1 1-2 3-2s3 1 3 2',
  },
} as const

export type RouteKeys = keyof typeof Routes
