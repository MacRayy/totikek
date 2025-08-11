export const Routes = {
  HOME: {
    path: '/',
    title: 'Kezdőlap',
  },
  ABOUT: {
    path: '/about',
    title: 'Rólunk',
  },
  HISTORY: {
    path: '/kaptalantoti',
    title: 'Káptalantóti',
  },
  WATER: {
    path: '/viz-utja',
    title: 'A víz útja',
  },
  BIRDLIFE: {
    path: '/madarvilag',
    title: 'Madarvilág',
  },
  MINING: {
    path: '/banyaszat',
    title: 'Bányászat',
  },
  PLANTS: {
    path: '/novenyvilag',
    title: 'Növényvilág',
  },
  WINE: {
    path: '/szolo',
    title: 'Szőlő és bor',
  },
} as const

export type RouteKeys = keyof typeof Routes
