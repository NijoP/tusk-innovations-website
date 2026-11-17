import Script from 'next/script';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item: BreadcrumbItem, index: number) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  const idSuffix = items.map((i: BreadcrumbItem) => i.name.toLowerCase().replace(/[^a-z0-9]/g, '')).join('-');

  return (
    <Script
      id={`breadcrumb-ld-${idSuffix}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
