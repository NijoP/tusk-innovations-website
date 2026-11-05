import { defineType, defineField } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Company / Site Name',
      type: 'string',
      initialValue: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Engineering Intelligence for the Next Generation of Electronics',
    }),
    defineField({
      name: 'cin',
      title: 'Corporate Identification Number (CIN)',
      type: 'string',
      initialValue: 'U62011KL2026PTC106386',
    }),
    defineField({
      name: 'email',
      title: 'Official Email',
      type: 'string',
      initialValue: 'tuskinnovationsglobal@gmail.com',
    }),
    defineField({
      name: 'phone',
      title: 'Official Phone',
      type: 'string',
      initialValue: '+91 62823 53042',
    }),
    defineField({
      name: 'address',
      title: 'Registered Office Address',
      type: 'text',
      initialValue: '26/378(1), Thekkumoodu, Vanchiyoor P.O., Thiruvananthapuram, Kerala 695035, India.',
    }),
    defineField({
      name: 'githubOrg',
      title: 'GitHub Organization/Profile URL',
      type: 'url',
      initialValue: 'https://github.com/NijoP',
    }),
    defineField({
      name: 'eakRepo',
      title: 'EAK Repository URL',
      type: 'url',
      initialValue: 'https://github.com/NijoP/electronics-agent-kit-proto',
    }),
  ],
});
