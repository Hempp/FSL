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
        src: '/favicon.svg',
        type: 'image/svg+xml',
        sizes: 'any',
      },
      {
        src: '/images/ft-logo.png',
        type: 'image/png',
        sizes: '232x233',
      },
      {
        src: '/images/ft-logo-4x-v2.png',
        type: 'image/png',
        sizes: '928x932',
      },
    ],
  }
}
