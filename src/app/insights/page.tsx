import type { Metadata } from 'next';
import { Section } from '@/components/Section';
import { getArticles } from '@/lib/sanityQueries';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights & Technical Updates',
  description:
    'Deep-dive articles and technical essays from the engineering team at TUSK INNOVATIONS GLOBAL PRIVATE LIMITED.',
};

export default async function InsightsPage() {
  const articles = await getArticles();

  return (
    <div>
      {/* Header */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] tech-grid">
        <div className="mx-auto max-w-4xl text-center space-y-4">
          <span className="text-xs font-mono font-medium text-[#ff5500] uppercase tracking-wider">
            Engineering Thought Leadership
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#121316]">
            Insights & Engineering Notes
          </h1>
          <p className="text-lg text-[#585c65] max-w-2xl mx-auto leading-relaxed">
            Technical writing on hardware compiler design, Clean Architecture in EDA, physical invariant checking, and hardware-software co-design.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <Section id="articles">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between p-6 bg-white border border-[#e6e5e0] rounded-lg shadow-2xs hover:border-[#d0ceca] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#8b909a]">
                  <span className="text-[#ff5500] font-semibold">{article.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-[#121316] leading-snug">
                  <Link href={`/insights/${article.slug}`} className="hover:text-[#ff5500] transition-colors">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-sm text-[#585c65] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#e6e5e0] flex items-center justify-between text-xs font-mono">
                <span className="text-[#8b909a]">
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1 text-[#121316] hover:text-[#ff5500] font-medium"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
