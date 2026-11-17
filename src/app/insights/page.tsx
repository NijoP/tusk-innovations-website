import type { Metadata } from 'next';
import { getArticles } from '@/lib/sanityQueries';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, Calendar, User } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: 'Technical Insights & Engineering Notes | TUSK Innovations',
  description:
    'Deep-dive articles and technical essays from the engineering team at TUSK Innovations Global Private Limited on hardware compiler design, Clean Architecture in EDA, physical invariant checking, and AI agents.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/insights',
  },
  openGraph: {
    title: 'Technical Insights & Engineering Notes | TUSK Innovations',
    description:
      'Engineering essays and architecture notes on hardware compilers, AI agents, and PCB design.',
    url: 'https://www.tuskinnovations.in/insights',
    siteName: 'TUSK Innovations',
  },
};

export default async function InsightsPage() {
  const articles = await getArticles();
  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <div className="bg-[#faf9f5] dark:bg-[#0a0c0f] min-h-screen text-[#141413] dark:text-[#f5f5f7] transition-colors duration-200">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://www.tuskinnovations.in/' },
          { name: 'Technical Insights', url: 'https://www.tuskinnovations.in/insights' },
        ]}
      />
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-[#e6e4dc] dark:border-neutral-800 bg-white dark:bg-neutral-900 text-[#da552f] dark:text-[#ff5500] mb-6">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Journal &amp; Publications</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#141413] dark:text-white leading-[1.1] max-w-4xl">
          Insights &amp; Engineering Essays.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#5a5a55] dark:text-neutral-400 font-sans leading-relaxed max-w-3xl">
          Technical perspectives on deterministic hardware compilers, AI agent orchestration, multi-layer PCB design, and compile-time Clean Architecture.
        </p>
      </section>

      {/* Featured Article Section */}
      {featuredArticle && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc] dark:border-neutral-800">
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#888780] dark:text-neutral-400">
              <span className="text-[#da552f] dark:text-[#ff5500] font-semibold bg-[#faf9f5] dark:bg-neutral-800 px-2.5 py-1 rounded border border-[#e6e4dc] dark:border-neutral-700">
                Featured Article / {featuredArticle.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(featuredArticle.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {featuredArticle.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#141413] dark:text-white leading-snug">
              <Link href={`/insights/${featuredArticle.slug}`} className="hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors">
                {featuredArticle.title}
              </Link>
            </h2>

            <p className="text-base text-[#5a5a55] dark:text-neutral-300 leading-relaxed max-w-3xl">
              {featuredArticle.excerpt}
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-[#f2f0e8] dark:border-neutral-800">
              <div className="flex items-center gap-2 text-xs font-mono text-[#5a5a55] dark:text-neutral-400">
                <User className="w-3.5 h-3.5 text-[#da552f] dark:text-[#ff5500]" />
                <span>Nijo Ponnachan, Systems Architect</span>
              </div>
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141413] dark:text-white hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-4 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f] dark:text-[#ff5500]">
            Archive
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-[#141413] dark:text-white">
            Recent Technical Notes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularArticles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between p-8 bg-white dark:bg-[#121418] border border-[#e6e4dc] dark:border-neutral-800 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#d4d1c6] dark:hover:border-neutral-700 transition-all space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#888780] dark:text-neutral-400">
                  <span className="text-[#da552f] dark:text-[#ff5500] font-semibold">{article.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#141413] dark:text-white leading-snug">
                  <Link href={`/insights/${article.slug}`} className="hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-xs text-[#5a5a55] dark:text-neutral-400 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f2f0e8] dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-[#888780] dark:text-neutral-400">
                <span>
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#141413] dark:text-white hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors"
                >
                  <span>Read Note</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
