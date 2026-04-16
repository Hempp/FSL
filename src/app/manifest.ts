import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fundamental Sports Labs',
    short_name: 'FSL',
    description:
      'Free youth sports and life skills programming in Los Angeles',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#F4767C',
    icons: [
      {
        src: '/icon-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        src: '/icon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
      {
        src: '/apple-icon.png',
        type: 'image/png',
        sizes: '180x180',
      },
    ],
  }
}
