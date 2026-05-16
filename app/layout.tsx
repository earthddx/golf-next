import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Alle Golf Lab LLC — Alessandra Miller | Northern Virginia Golf Fitness & Biomechanics Coach',
  description:
    'Alle Golf Lab LLC — science-based golf biomechanics coaching and fitness training with Alessandra Miller. Serving Northern Virginia and the DMV area. MyTPI, K-Vest 3D Analysis, ELDOA, and more. Available in-person and online.',
  authors: [{ name: 'Alessandra Miller' }],
  alternates: { canonical: 'https://allegolflab.com' },
  keywords: [
    'golf coach Northern Virginia',
    'golf biomechanics DMV',
    'golf fitness trainer NoVA',
    'TPI Fitness & Medical certified Northern Virginia',
    'K-Vest 3D golf analysis Virginia',
    'Alle Golf Lab',
    'Alessandra Miller golf',
  ],
  openGraph: {
    type: 'website',
    url: 'https://allegolflab.com',
    title: 'Alle Golf Lab LLC — Alessandra Miller | Northern Virginia Golf Fitness & Biomechanics Coach',
    description:
      'Science-based golf biomechanics coaching and fitness training serving Northern Virginia and the DMV area. MyTPI, K-Vest 3D Analysis, ELDOA, and corrective exercise. Available in-person and online.',
    images: [
      {
        url: 'https://allegolflab.com/thumbnail.jpeg',
        alt: 'Alessandra Miller — Golf Biomechanics Coach, Northern Virginia',
      },
    ],
    siteName: 'Alle Golf Lab LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alle Golf Lab LLC — Alessandra Miller | Northern Virginia Golf Fitness & Biomechanics Coach',
    description:
      'Science-based golf biomechanics coaching and fitness training in Northern Virginia / DMV. MyTPI, K-Vest 3D Analysis, ELDOA, and corrective exercise.',
    images: ['https://allegolflab.com/thumbnail.jpeg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'Alle Golf Lab LLC',
      url: 'https://allegolflab.com',
      email: 'allemiller@allegolflab.com',
      description:
        'Science-based golf biomechanics coaching and fitness training serving Northern Virginia and the DMV area.',
      image: 'https://allegolflab.com/thumbnail.jpeg',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Northern Virginia' },
        { '@type': 'AdministrativeArea', name: 'Maryland' },
        { '@type': 'AdministrativeArea', name: 'Washington DC Metro Area' },
        { '@type': 'AdministrativeArea', name: 'DMV' },
      ],
      founder: { '@id': '#alessandra' },
      sameAs: [],
    },
    {
      '@type': 'Person',
      '@id': '#alessandra',
      name: 'Alessandra Miller',
      jobTitle: 'Golf Biomechanics Coach & Fitness Trainer',
      worksFor: { '@type': 'Organization', name: 'Alle Golf Lab LLC' },
      email: 'allemiller@allegolflab.com',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
