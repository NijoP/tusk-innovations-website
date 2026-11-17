import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Corporate Office & Project Enquiries | TUSK Innovations',
  description:
    'Start a project with TUSK Innovations. Submit inquiries for custom AI applications, autonomous agents, PCB design services, embedded systems, or end-to-end product development.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
