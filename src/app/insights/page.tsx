import type { Metadata } from 'next';
import { getArticles } from '@/lib/sanityQueries';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen, Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technical Insights & Engineering Notes | TUSK Innovations',
  description:
    'Deep-dive articles and technical essays from the engineering team at TUSK Innovations on hardware compiler design, Clean Architecture in EDA, physical invariant checking, and AI agents.',
  alternates: {
    canonical: 'https://www.tuskinnovations.in/insights',
  },
};

export default async function InsightsPage() {
  const articles = await getArticles();
  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <div className="bg-[#faf9f5] min-h-screen text-[#141413]">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-[#e6e4dc] bg-white text-[#da552f] mb-6">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Journal &amp; Publications</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#141413] leading-[1.1] max-w-4xl">
          Insights &amp; Engineering Essays.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-[#5a5a55] font-sans leading-relaxed max-w-3xl">
          Technical perspectives on deterministic hardware compilers, AI agent orchestration, multi-layer PCB design, and compile-time Clean Architecture.
        </p>
      </section>

      {/* Featured Article Section */}
      {featuredArticle && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[#e6e4dc]">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#e6e4dc] shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#888780]">
              <span className="text-[#da552f] font-semibold bg-[#faf9f5] px-2.5 py-1 rounded border border-[#e6e4dc]">
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

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#141413] leading-snug">
              <Link href={`/insights/${featuredArticle.slug}`} className="hover:text-[#da552f] transition-colors">
                {featuredArticle.title}
              </Link>
            </h2>

            <p className="text-base text-[#5a5a55] leading-relaxed max-w-3xl">
              {featuredArticle.excerpt}
            </p>

            <div className="pt-2 flex items-center justify-between border-t border-[#f2f0e8]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#5a5a55]">
                <User className="w-3.5 h-3.5 text-[#da552f]" />
                <span>Nijo Ponnachan, Systems Architect</span>
              </div>
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#141413] hover:text-[#da552f] transition-colors"
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
          <span className="text-xs font-mono uppercase tracking-widest text-[#da552f]">
            Archive
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-[#141413]">
            Recent Technical Notes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularArticles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between p-8 bg-white border border-[#e6e4dc] rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#d4d1c6] transition-all space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#888780]">
                  <span className="text-[#da552f] font-semibold">{article.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#141413] leading-snug">
                  <Link href={`/insights/${article.slug}`} className="hover:text-[#da552f] transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-xs text-[#5a5a55] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f2f0e8] flex items-center justify-between text-xs font-mono text-[#888780]">
                <span>
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-[#141413] hover:text-[#da552f] transition-colors"
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
