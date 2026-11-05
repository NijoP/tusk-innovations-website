import { getArticleBySlug } from '@/lib/sanityQueries';
import { notFound } from 'next/navigation';
import { Section } from '@/components/Section';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
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
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <article className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#e6e5e0] tech-grid">
        <div className="mx-auto max-w-3xl space-y-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#585c65] hover:text-[#121316] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all insights</span>
          </Link>

          <div className="flex items-center gap-3 text-xs font-mono text-[#8b909a]">
            <span className="text-[#ff5500] font-semibold">{article.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span>•</span>
            <span>
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#121316] leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-[#585c65] italic border-l-2 border-[#ff5500] pl-4 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </article>

      <Section id="content">
        <div className="mx-auto max-w-3xl prose prose-neutral text-base leading-relaxed text-[#121316] space-y-6">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="text-[#585c65] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>
    </div>
  );
}
