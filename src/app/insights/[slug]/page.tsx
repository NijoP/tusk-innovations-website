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
    <div className="bg-[#faf9f5] dark:bg-[#0a0c0f] min-h-screen text-[#141413] dark:text-[#f5f5f7] transition-colors duration-200">
      <article className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#5a5a55] dark:text-neutral-400 hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Technical Insights</span>
        </Link>

        {/* Article Meta */}
        <div className="space-y-4 border-b border-[#e6e4dc] dark:border-neutral-800 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#888780] dark:text-neutral-400">
            <span className="text-[#da552f] dark:text-[#ff5500] font-semibold bg-white dark:bg-neutral-900 px-2.5 py-1 rounded border border-[#e6e4dc] dark:border-neutral-800">
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

          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-[#141413] dark:text-white leading-[1.12]">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#5a5a55] dark:text-neutral-400">
            <User className="w-3.5 h-3.5 text-[#da552f] dark:text-[#ff5500]" />
            <span>Authored by Nijo Ponnachan, Systems Architect</span>
          </div>
        </div>

        {/* Lead Excerpt */}
        <div className="py-8 text-lg sm:text-xl font-serif text-[#141413] dark:text-neutral-200 leading-relaxed border-b border-[#f2f0e8] dark:border-neutral-800">
          {article.excerpt}
        </div>

        {/* Body Paragraphs with Editorial Typography */}
        <div className="py-8 space-y-6 text-base text-[#3d3d3a] dark:text-neutral-300 leading-relaxed font-sans">
          {article.content.map((paragraph, index) => (
            <p key={index} className="leading-[1.8]">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer Back */}
        <div className="pt-12 mt-12 border-t border-[#e6e4dc] dark:border-neutral-800 flex items-center justify-between">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#141413] dark:text-white hover:text-[#da552f] dark:hover:text-[#ff5500] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Insights Archive</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold text-[#faf9f5] dark:text-[#141413] bg-[#141413] dark:bg-white rounded-full hover:bg-[#282725] dark:hover:bg-neutral-200 transition-all"
          >
            <span>Discuss Engineering Challenge</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
