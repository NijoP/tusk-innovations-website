import { defineType, defineField } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Engineering Intelligence for the Next Generation of Electronics.',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
      initialValue: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED is developing intelligent engineering software to simplify complex electronics development workflows.',
    }),
    defineField({
      name: 'eakTagline',
      title: 'EAK Tagline',
      type: 'string',
      initialValue: 'Intent In. Manufactured Board Out.',
    }),
    defineField({
      name: 'eakDescription',
      title: 'EAK Section Description',
      type: 'text',
      initialValue: 'Electronics Agent Kit is an AI-assisted electronics engineering platform being developed to connect component research, datasheet analysis, schematic workflows, engineering validation and PCB design processes in a unified environment.',
    }),
    defineField({
      name: 'visionHeadline',
      title: 'Vision Headline',
      type: 'string',
      initialValue: "Building the engineering tools behind tomorrow's electronics.",
    }),
    defineField({
      name: 'visionBody',
      title: 'Vision Body',
      type: 'text',
    }),
  ],
});
