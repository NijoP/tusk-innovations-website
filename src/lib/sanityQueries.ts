import { client, isSanityConfigured } from '@/sanity/client';
import {
  COMPANY_DETAILS,
  EAK_CAPABILITIES,
  ROADMAP_STAGES,
  TECHNICAL_ARTICLES,
  CapabilityItem,
  RoadmapStage,
  ArticleItem,
} from './data';

interface SanityRoadmapItem {
  stageIndex: number;
  title: string;
  gateName: string;
  status: 'Completed' | 'Active Development' | 'Planned';
  description: string;
  deliverables?: string[];
}

interface SanityArticleBlock {
  children?: Array<{ text?: string }>;
}

interface SanityArticleItem {
  _id: string;
  slug?: { current?: string };
  title: string;
  publishedAt: string;
  readTime?: string;
  category?: string;
  excerpt?: string;
  content?: SanityArticleBlock[];
}

export async function getCompanyDetails() {
  if (!isSanityConfigured || !client) {
    return COMPANY_DETAILS;
  }
  try {
    const data = await client.fetch(`*[_type == "siteSettings"][0]`);
    if (!data) return COMPANY_DETAILS;
    return {
      legalName: data.siteName || COMPANY_DETAILS.legalName,
      shortName: 'TUSK INNOVATIONS',
      cin: data.cin || COMPANY_DETAILS.cin,
      email: data.email || COMPANY_DETAILS.email,
      phone: data.phone || COMPANY_DETAILS.phone,
      address: data.address || COMPANY_DETAILS.address,
      mapsUrl: COMPANY_DETAILS.mapsUrl,
      githubOrg: data.githubOrg || COMPANY_DETAILS.githubOrg,
      eakRepo: data.eakRepo || COMPANY_DETAILS.eakRepo,
      tagline: data.tagline || COMPANY_DETAILS.tagline,
    };
  } catch {
    return COMPANY_DETAILS;
  }
}

export async function getCapabilities(): Promise<CapabilityItem[]> {
  if (!isSanityConfigured || !client) {
    return EAK_CAPABILITIES;
  }
  try {
    const data = await client.fetch(`*[_type == "productCapability"] | order(order asc)`);
    if (!data || data.length === 0) return EAK_CAPABILITIES;
    return data;
  } catch {
    return EAK_CAPABILITIES;
  }
}

export async function getRoadmap(): Promise<RoadmapStage[]> {
  if (!isSanityConfigured || !client) {
    return ROADMAP_STAGES;
  }
  try {
    const data: SanityRoadmapItem[] = await client.fetch(`*[_type == "roadmapUpdate"] | order(stageIndex asc)`);
    if (!data || data.length === 0) return ROADMAP_STAGES;
    return data.map((d) => ({
      stage: d.stageIndex,
      title: d.title,
      gate: d.gateName,
      status: d.status,
      description: d.description,
      deliverables: d.deliverables || [],
    }));
  } catch {
    return ROADMAP_STAGES;
  }
}

export async function getArticles(): Promise<ArticleItem[]> {
  if (!isSanityConfigured || !client) {
    return TECHNICAL_ARTICLES;
  }
  try {
    const data: SanityArticleItem[] = await client.fetch(`*[_type == "article"] | order(publishedAt desc)`);
    if (!data || data.length === 0) return TECHNICAL_ARTICLES;
    return data.map((d) => ({
      slug: d.slug?.current || d._id,
      title: d.title,
      publishedAt: d.publishedAt,
      readTime: d.readTime || '5 min read',
      category: d.category || 'Engineering',
      excerpt: d.excerpt || '',
      content: Array.isArray(d.content) ? d.content.map((c) => c.children?.[0]?.text || '') : [],
    }));
  } catch {
    return TECHNICAL_ARTICLES;
  }
}

export async function getArticleBySlug(slug: string): Promise<ArticleItem | undefined> {
  const articles = await getArticles();
  return articles.find((a) => a.slug === slug);
}
