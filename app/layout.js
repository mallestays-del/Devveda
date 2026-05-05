import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Deveda Academy – Business Analysis Training Institute | Become a Job-Ready BA',
  description: 'Deveda Academy offers industry-focused Business Analyst training with real projects, expert trainers, SQL, Excel, JIRA, Agile & Scrum, and 100% placement assistance. Enroll now and launch your BA career.',
  keywords: ['Business Analyst training', 'BA course', 'Deveda Academy', 'Business Analysis Institute', 'SQL training', 'Agile Scrum', 'Data Analyst course', 'Career in business analysis', 'BA placement assistance'],
  authors: [{ name: 'Deveda Academy' }],
  creator: 'Deveda Academy',
  publisher: 'Deveda Academy',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://academy-vyom-learn.internal.emergent.host'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Deveda Academy – Business Analysis Training Institute',
    description: 'Become a Job-Ready Business Analyst with practical, industry-focused training. Real-world projects, expert mentors, and placement support.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://academy-vyom-learn.internal.emergent.host',
    siteName: 'Deveda Academy',
    images: [
      {
        url: 'https://customer-assets.emergentagent.com/job_2c4eb540-7423-418a-91a3-9287fdd9b7d7/artifacts/rdvsdqgr_WhatsApp%20Image%202026-05-05%20at%201.02.51%20PM.jpeg',
        width: 1200,
        height: 1200,
        alt: 'Deveda Academy – Business Analyst Training Institute',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deveda Academy – Business Analysis Training Institute',
    description: 'Become a Job-Ready Business Analyst. Practical, industry-focused training with placement assistance.',
    images: ['https://customer-assets.emergentagent.com/job_2c4eb540-7423-418a-91a3-9287fdd9b7d7/artifacts/rdvsdqgr_WhatsApp%20Image%202026-05-05%20at%201.02.51%20PM.jpeg'],
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
    icon: 'https://customer-assets.emergentagent.com/job_2c4eb540-7423-418a-91a3-9287fdd9b7d7/artifacts/rdvsdqgr_WhatsApp%20Image%202026-05-05%20at%201.02.51%20PM.jpeg',
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
  name: 'Deveda Academy – Business Analysis Training Institute',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://academy-vyom-learn.internal.emergent.host',
  logo: 'https://customer-assets.emergentagent.com/job_2c4eb540-7423-418a-91a3-9287fdd9b7d7/artifacts/rdvsdqgr_WhatsApp%20Image%202026-05-05%20at%201.02.51%20PM.jpeg',
  description: 'Industry-focused Business Analyst training institute with expert trainers, real projects, and placement assistance.',
  sameAs: [
    'https://www.instagram.com/devedaacademy',
    'https://www.linkedin.com/in/deveda-academy-29962b275',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8511890947',
    contactType: 'admissions',
    email: 'devedaacademy@gmail.com',
    availableLanguage: ['English', 'Hindi'],
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
