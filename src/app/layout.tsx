import type { Metadata } from 'next';
import { Newsreader, Inter, JetBrains_Mono } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Script from 'next/script';
import { COMPANY_DETAILS } from '@/lib/data';
import './globals.css';

const serifFont = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sansFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | TUSK Innovations',
    default: 'TUSK Innovations | AI Solutions, Electronics & PCB Engineering',
  },
  description:
    'TUSK Innovations is an AI and engineering startup building intelligent business solutions, AI-powered software, electronics, embedded systems, and advanced PCB designs. We deliver projects from concept to final delivery.',
  keywords: [
    'TUSK Innovations',
    'TUSK Innovation',
    'TUSK Innovations Global',
    'TUSK Innovations Global Pvt Ltd',
    'TUSK AI',
    'TUSK Innovations Kerala',
    'AI development company in Kerala',
    'AI solutions for businesses',
    'AI agent development',
    'Electronics product development',
    'PCB design services',
    'Embedded systems development',
    'Custom electronics engineering',
    'End-to-end product development',
    'AI-powered engineering solutions',
    'Electronics Agent Kit',
    'EAK',
    'NVIDIA Inception',
    'Kerala Startup Mission',
    'DPIIT Startup India',
    'Nijo Ponnachan',
  ],
  authors: [{ name: 'TUSK Innovations Global Pvt. Ltd.' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL('https://www.tuskinnovations.in'),
  alternates: {
    canonical: 'https://www.tuskinnovations.in',
  },
  openGraph: {
    title: 'TUSK Innovations | AI Solutions, Electronics & PCB Engineering',
    description:
      'TUSK Innovations is an AI and engineering startup building intelligent business solutions, AI-powered software, electronics, embedded systems, and advanced PCB designs. We deliver projects from concept to final delivery.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tuskinnovations.in',
    siteName: 'TUSK Innovations',
    images: [
      {
        url: '/brand/tusk-logo.jpg',
        width: 800,
        height: 800,
        alt: 'TUSK Innovations Official Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TUSK Innovations | AI Solutions, Electronics & PCB Engineering',
    description:
      'TUSK Innovations is an AI and engineering startup building intelligent business solutions, AI-powered software, electronics, embedded systems, and advanced PCB designs.',
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
  // Enhanced Google Structured Data (JSON-LD)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': 'https://www.tuskinnovations.in/#organization',
    name: 'TUSK Innovations',
    legalName: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED',
    alternateName: [
      'TUSK Innovation',
      'TUSK Innovations Global',
      'TUSK Innovations Global Pvt Ltd',
      'TUSK AI',
      'TUSK Innovations Kerala',
    ],
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
      areaServed: ['IN', 'Worldwide'],
      availableLanguage: ['English', 'Malayalam'],
    },
    sameAs: [
      'https://github.com/NijoP',
      'https://github.com/NijoP/electronics-agent-kit-new-prototype',
      'https://github.com/NijoP/tusk-innovations-website',
      'https://www.linkedin.com/company/tusk-innovations',
    ],
    identifier: {
      '@type': 'PropertyValue',
      name: 'Corporate Identification Number (CIN)',
      value: 'U62011KL2026PTC106386',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'AI Agent Development',
      'Business Workflow Automation',
      'Electronics Engineering',
      'PCB Design',
      'Embedded Systems',
      'Electronics Design Automation',
    ],
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.tuskinnovations.in/#website',
    url: 'https://www.tuskinnovations.in',
    name: 'TUSK Innovations',
    publisher: {
      '@id': 'https://www.tuskinnovations.in/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.tuskinnovations.in/insights?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        <Script
          id="organization-ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} min-h-screen flex flex-col bg-[#faf9f5] text-[#141413] antialiased selection:bg-[#da552f]/15 selection:text-[#141413]`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
