import { getArticleBySlug } from '@/lib/sanityQueries';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: `${article.title} | TUSK Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.tuskinnovations.in/insights/${slug}`,
    },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-[#faf9f5] min-h-screen text-[#141413]">
      <article className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5a5a55] hover:text-[#da552f] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Technical Insights</span>
        </Link>

        {/* Article Meta */}
        <div className="space-y-4 border-b border-[#e6e4dc] pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#888780]">
            <span className="text-[#da552f] font-semibold bg-white px-2.5 py-1 rounded border border-[#e6e4dc]">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#141413] leading-[1.12]">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#5a5a55]">
            <User className="w-3.5 h-3.5 text-[#da552f]" />
            <span>Authored by Nijo Ponnachan, Systems Architect</span>
          </div>
        </div>

        {/* Lead Excerpt */}
        <div className="py-8 text-lg sm:text-xl font-serif text-[#141413] leading-relaxed border-b border-[#f2f0e8]">
          {article.excerpt}
        </div>

        {/* Body Paragraphs with Editorial Typography */}
        <div className="py-8 space-y-6 text-base text-[#3d3d3a] leading-relaxed font-sans">
          {article.content.map((paragraph, index) => (
            <p key={index} className="leading-[1.8]">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer Back */}
        <div className="pt-12 mt-12 border-t border-[#e6e4dc] flex items-center justify-between">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#141413] hover:text-[#da552f] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Insights Archive</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-[#faf9f5] bg-[#141413] rounded-full hover:bg-[#282725] transition-all"
          >
            <span>Discuss Engineering Challenge</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
