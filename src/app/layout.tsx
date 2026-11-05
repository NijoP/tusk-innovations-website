import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Script from 'next/script';
import { COMPANY_DETAILS } from '@/lib/data';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | TUSK INNOVATIONS GLOBAL PRIVATE LIMITED',
    default: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED | Official Corporate Website',
  },
  description:
    'Official corporate portal of TUSK INNOVATIONS GLOBAL PRIVATE LIMITED (CIN: U62011KL2026PTC106386). Engineering intelligence for electronics development and developers of Electronics Agent Kit (EAK).',
  keywords: [
    'Tusk Innovations',
    'Tusk Innovations Global',
    'Tusk Innovations Global Private Limited',
    'Tusk Innovations Global Pvt Ltd',
    'Tusk Innovation',
    'Tusk Innovations Kerala',
    'Nijo Ponnachan',
    'Electronics Agent Kit',
    'EAK',
    'EDA',
    'Electronics Design Automation',
    'AI in Electronics',
    'PCB Design Automation',
    'Schematic Synthesis',
  ],
  authors: [{ name: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED' }],
  metadataBase: new URL('https://www.tuskinnovations.in'),
  alternates: {
    canonical: 'https://www.tuskinnovations.in',
  },
  openGraph: {
    title: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED',
    description:
      'Official corporate website of TUSK INNOVATIONS GLOBAL PRIVATE LIMITED. Developers of Electronics Agent Kit (EAK).',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tuskinnovations.in',
    siteName: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED',
    images: [
      {
        url: '/brand/tusk-logo.jpg',
        width: 800,
        height: 800,
        alt: 'TUSK INNOVATIONS Official Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED',
    description: 'Engineering Intelligence for the Next Generation of Electronics.',
    images: ['/brand/tusk-logo.jpg'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Google Structured Organization Schema (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED',
    legalName: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED',
    alternateName: ['TUSK INNOVATIONS', 'Tusk Innovations Global Pvt Ltd', 'Tusk Innovations'],
    url: 'https://www.tuskinnovations.in',
    logo: 'https://www.tuskinnovations.in/brand/tusk-logo.jpg',
    founder: {
      '@type': 'Person',
      name: 'Nijo Ponnachan',
      jobTitle: 'Founder & CEO',
      sameAs: 'https://www.linkedin.com/in/nijoponnachan',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '26/378(1), Thekkumoodu, Vanchiyoor P.O.',
      addressLocality: 'Thiruvananthapuram',
      addressRegion: 'Kerala',
      postalCode: '695035',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_DETAILS.phone,
      contactType: 'corporate',
      email: COMPANY_DETAILS.email,
      areaServed: 'IN',
      availableLanguage: ['English', 'Malayalam'],
    },
    sameAs: [
      'https://github.com/NijoP',
      'https://github.com/NijoP/electronics-agent-kit-proto',
      'https://github.com/NijoP/tusk-innovations-website',
    ],
    identifier: {
      '@type': 'PropertyValue',
      name: 'Corporate Identification Number (CIN)',
      value: 'U62011KL2026PTC106386',
    },
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="organization-ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#faf9f6] text-[#121316]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
