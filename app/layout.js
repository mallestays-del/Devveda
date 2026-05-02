import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Vyom Academy – Business Analysis Training Institute | Become a Job-Ready BA',
  description: 'Vyom Academy offers industry-focused Business Analyst training with real projects, expert trainers, Excel, SQL, Power BI, Agile & Scrum, and 100% placement assistance. Enroll now and launch your BA career.',
  keywords: ['Business Analyst training', 'BA course', 'Vyom Academy', 'Business Analysis Institute', 'SQL training', 'Power BI course', 'Agile Scrum', 'Data Analyst course', 'Career in business analysis', 'BA placement assistance'],
  authors: [{ name: 'Vyom Academy' }],
  creator: 'Vyom Academy',
  publisher: 'Vyom Academy',
  metadataBase: new URL('https://vyomacademy.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Vyom Academy – Business Analysis Training Institute',
    description: 'Become a Job-Ready Business Analyst with practical, industry-focused training. Real-world projects, expert mentors, and placement support.',
    url: 'https://vyomacademy.com',
    siteName: 'Vyom Academy',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1698306642516-9841228dcff3?w=1200&q=85',
        width: 1200,
        height: 630,
        alt: 'Vyom Academy – Business Analysis Training',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vyom Academy – Business Analysis Training Institute',
    description: 'Become a Job-Ready Business Analyst. Practical, industry-focused training with placement assistance.',
    images: ['https://images.unsplash.com/photo-1698306642516-9841228dcff3?w=1200&q=85'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Vyom Academy – Business Analysis Training Institute',
  url: 'https://vyomacademy.com',
  logo: 'https://vyomacademy.com/logo.png',
  description: 'Industry-focused Business Analyst training institute with expert trainers, real projects, and placement assistance.',
  sameAs: [
    'https://www.linkedin.com/company/vyom-academy',
    'https://www.facebook.com/vyomacademy',
    'https://www.instagram.com/vyomacademy',
    'https://twitter.com/vyomacademy',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'TS',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9876543210',
    contactType: 'admissions',
    email: 'admissions@vyomacademy.com',
    availableLanguage: ['English', 'Hindi', 'Telugu'],
  },
  offers: {
    '@type': 'Offer',
    category: 'Business Analyst Training Course',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
