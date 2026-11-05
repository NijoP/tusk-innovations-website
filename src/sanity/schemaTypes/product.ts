import { defineType, defineField } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Product (EAK)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      initialValue: 'Electronics Agent Kit (EAK)',
    }),
    defineField({
      name: 'status',
      title: 'Lifecycle Status',
      type: 'string',
      initialValue: 'Prototype in Active Development',
    }),
    defineField({
      name: 'summary',
      title: 'Executive Summary',
      type: 'text',
      initialValue: 'An open-source, AI-native electronics engineering system and engineering runtime designed to maintain canonical engineering truth and generate verified hardware artifacts.',
    }),
    defineField({
      name: 'architecturePrinciples',
      title: 'Architecture Non-Negotiables',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});
