import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Vyom Academy – India\u2019s Premier Business Analysis Training Institute',
  description: 'Vyom Academy delivers industry-leading Business Analyst training led by Fortune 500 mentors. Master SQL, Excel, JIRA, Agile and real-world case studies — backed by 100% placement assistance.',
  keywords: ['Business Analyst training', 'BA course', 'Vyom Academy', 'Business Analysis Institute', 'SQL training', 'Agile Scrum', 'Data Analyst course', 'Career in business analysis', 'BA placement assistance'],
  authors: [{ name: 'Vyom Academy' }],
  creator: 'Vyom Academy',
  publisher: 'Vyom Academy',
  metadataBase: new URL('https://vyomacademy.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Vyom Academy – India\u2019s Premier Business Analysis Training Institute',
    description: 'Become a Job-Ready Business Analyst with practical, industry-focused training. Real-world projects, expert mentors, and dedicated placement support.',
    url: 'https://vyomacademy.com',
    siteName: 'Vyom Academy',
    images: [
      {
        url: 'https://customer-assets.emergentagent.com/job_business-analyst-hub-6/artifacts/uo20v9aw_image.png',
        width: 1200,
        height: 1200,
        alt: 'Vyom Academy – Business Analyst Training Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vyom Academy – India\u2019s Premier Business Analysis Training Institute',
    description: 'Become a Job-Ready Business Analyst. Practical, industry-focused training with placement assistance.',
    images: ['https://customer-assets.emergentagent.com/job_business-analyst-hub-6/artifacts/uo20v9aw_image.png'],
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
    icon: 'https://customer-assets.emergentagent.com/job_business-analyst-hub-6/artifacts/uo20v9aw_image.png',
  },
}

export const viewport = {
  themeColor: '#0B1437',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Vyom Academy – Business Analysis Training Institute',
  url: 'https://vyomacademy.com',
  logo: 'https://customer-assets.emergentagent.com/job_business-analyst-hub-6/artifacts/uo20v9aw_image.png',
  description: 'India\u2019s premier Business Analyst training institute with Fortune 500 mentors, real projects, and dedicated placement assistance.',
  sameAs: [
    'https://www.instagram.com/vyoma_cademy',
    'https://www.linkedin.com/in/vyom-academy-29962b275',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8511890947',
    contactType: 'admissions',
    email: 'vyomacademyy@gmail.com',
    availableLanguage: ['English', 'Hindi'],
  },
  offers: {
    '@type': 'Offer',
    category: 'Business Analyst Training Course',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
