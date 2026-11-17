import Link from 'next/link';
import { ArrowLeft, Home, Compass } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found (404) | TUSK Innovations',
  description: 'The requested page could not be found on TUSK Innovations.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 bg-[#faf9f5] dark:bg-[#0a0c0f] text-[#141413] dark:text-[#f5f5f7]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium border border-[#e6e4dc] dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[#da552f] dark:text-[#ff5500]">
          <span>HTTP 404</span>
          <span>•</span>
          <span>Resource Not Found</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif tracking-tight text-[#141413] dark:text-white">
          Page Not Located
        </h1>

        <p className="text-sm text-[#5a5a55] dark:text-neutral-400 font-sans leading-relaxed">
          The requested engineering resource or URL does not exist or has been relocated to a canonical route.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-[#faf9f5] dark:text-[#141413] bg-[#141413] dark:bg-white hover:bg-[#282725] dark:hover:bg-neutral-200 rounded-full transition-all shadow-sm"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-[#141413] dark:text-white bg-white dark:bg-neutral-900 border border-[#e6e4dc] dark:border-neutral-800 hover:bg-[#f5f4ee] dark:hover:bg-neutral-800 rounded-full transition-all"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
