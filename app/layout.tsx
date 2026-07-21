import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Alessandro Marcello | Business & Marketing Leader',
  description: 'Business and Marketing leader with 13+ years of experience driving market entry, revenue growth, and go-to-market execution across Europe and Asia.',
  generator: 'v0.app',
  metadataBase: new URL('https://www.alessandromarcello.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Alessandro Marcello | Business & Marketing Leader',
    description: 'Business and Marketing leader with 13+ years of experience driving market entry, revenue growth, and go-to-market execution across Europe and Asia.',
    url: 'https://www.alessandromarcello.it',
    siteName: 'Alessandro Marcello',
    locale: 'en_US',
    type: 'profile',
  },
  verification: {
    google: 'Ii9Jhp1EXoiJHm_oAl0Hy87mUiTwMI9J2rBVB_FjWrc',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/favicon.ico', sizes: '48x48' },
    ],
    apple: '/apple-icon.png',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alessandro Marcello',
  jobTitle: 'Business & Marketing Leader',
  description:
    'Business and Marketing leader with 13+ years of experience driving market entry, revenue growth, and go-to-market execution across Europe and Asia.',
  url: 'https://www.alessandromarcello.it',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Milan',
    addressCountry: 'IT',
  },
  sameAs: ['https://www.linkedin.com/in/alessandromarcello1987/'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
