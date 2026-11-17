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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google7a389c822d4abb67',
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
    '@type': 'Organization',
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
    url: 'https://www.tuskinnovations.in/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.tuskinnovations.in/brand/tusk-logo.jpg',
      width: 800,
      height: 800,
      caption: 'TUSK Innovations Official Brand Logo',
    },
    image: 'https://www.tuskinnovations.in/brand/tusk-logo.jpg',
    description:
      'TUSK Innovations Global Private Limited is an AI and electronics engineering company based in Thiruvananthapuram, Kerala, India, building intelligent software, autonomous AI solutions, multi-layer PCB designs, and complete physical technology products.',
    founder: [
      {
        '@type': 'Person',
        name: 'Nijo Ponnachan',
        jobTitle: 'Founder, CEO & Principal Systems Architect',
        sameAs: 'https://www.linkedin.com/in/nijoponnachan',
      },
      {
        '@type': 'Person',
        name: 'Anjai Itty Jacob',
        jobTitle: 'Co-Founder',
      },
    ],
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
      telephone: '+91 62823 53042',
      contactType: 'corporate',
      email: 'tuskinnovationsglobal@gmail.com',
      areaServed: ['IN', 'Worldwide'],
      availableLanguage: ['English', 'Malayalam'],
    },
    sameAs: [
      'https://startups.startupmission.in/startups/poGrk',
      'https://github.com/NijoP/electronics-agent-kit-new-prototype',
      'https://github.com/NijoP/tusk-innovations-website',
      'https://github.com/NijoP',
      'https://www.linkedin.com/company/tusk-innovations',
      'https://www.linkedin.com/in/nijoponnachan',
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
      'Hardware Compilers',
    ],
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.tuskinnovations.in/#website',
    url: 'https://www.tuskinnovations.in/',
    name: 'TUSK Innovations',
    alternateName: 'TUSK',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('tusk-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&d)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
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
      <body className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} min-h-screen flex flex-col bg-[#faf9f5] dark:bg-[#0a0c0f] text-[#141413] dark:text-[#f5f5f7] antialiased selection:bg-[#da552f]/15 dark:selection:bg-[#ff5500]/30 selection:text-[#141413] dark:selection:text-white transition-colors duration-200`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
