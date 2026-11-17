import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: 'Contact Corporate Office & Project Enquiries | TUSK Innovations',
  description:
    'Start an engineering project with TUSK Innovations Global Private Limited. Contact our Thiruvananthapuram, Kerala office for AI solutions, PCB design services, embedded systems, or end-to-end product development.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/contact',
  },
  openGraph: {
    title: 'Contact Corporate Office & Project Enquiries | TUSK Innovations',
    description:
      'Direct communication channels and project consultation with TUSK Innovations Global Private Limited in Thiruvananthapuram, Kerala.',
    url: 'https://www.tuskinnovations.in/contact',
    siteName: 'TUSK Innovations',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.tuskinnovations.in/' },
          { name: 'Contact Corporate Office', url: 'https://www.tuskinnovations.in/contact' },
        ]}
      />
      {children}
    </>
  );
}
