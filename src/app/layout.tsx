import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | TUSK INNOVATIONS GLOBAL PRIVATE LIMITED',
    default: 'TUSK INNOVATIONS — Engineering Intelligence for Next-Gen Electronics',
  },
  description:
    'Official corporate portal of TUSK INNOVATIONS GLOBAL PRIVATE LIMITED. Developers of Electronics Agent Kit (EAK), an open-source AI-assisted electronics engineering system and verified runtime.',
  keywords: [
    'Tusk Innovations',
    'Electronics Agent Kit',
    'EAK',
    'EDA',
    'Electronics Design Automation',
    'AI in Hardware',
    'PCB Design',
    'Schematic Synthesis',
    'Rust EDA',
  ],
  authors: [{ name: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tusk-innovations.vercel.app'),
  openGraph: {
    title: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED',
    description: 'Engineering Intelligence for the Next Generation of Electronics. Builders of Electronics Agent Kit.',
    type: 'website',
    locale: 'en_US',
    siteName: 'TUSK INNOVATIONS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED',
    description: 'Engineering Intelligence for the Next Generation of Electronics.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#faf9f6] text-[#121316]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
