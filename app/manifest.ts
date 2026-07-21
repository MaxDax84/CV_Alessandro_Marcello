import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Alessandro Marcello | Business & Marketing Leader',
    short_name: 'Alessandro Marcello',
    description:
      'Business and Marketing leader with 13+ years of experience driving market entry, revenue growth, and go-to-market execution across Europe and Asia.',
    start_url: '/',
    display: 'standalone',
    background_color: '#141420',
    theme_color: '#141420',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-192-maskable.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
