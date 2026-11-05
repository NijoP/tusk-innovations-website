import { defineType, defineField } from 'sanity';

export const seoMetadata = defineType({
  name: 'seoMetadata',
  title: 'SEO & Social Metadata',
  type: 'document',
  fields: [
    defineField({
      name: 'pageSlug',
      title: 'Target Page Identifier',
      type: 'string',
      description: 'e.g. "home", "about", "eak", "technology", "open-source", "insights", "contact"',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});
