import { defineType, defineField } from 'sanity';

export const contactInfo = defineType({
  name: 'contactInfo',
  title: 'Contact Information',
  type: 'document',
  fields: [
    defineField({
      name: 'primaryEmail',
      title: 'Primary Inquiries Email',
      type: 'string',
      initialValue: 'tuskinnovationsglobal@gmail.com',
    }),
    defineField({
      name: 'phone',
      title: 'Direct Phone',
      type: 'string',
      initialValue: '+91 62823 53042',
    }),
    defineField({
      name: 'address',
      title: 'Physical Address',
      type: 'text',
      initialValue: '26/378(1), Thekkumoodu, Vanchiyoor P.O., Thiruvananthapuram, Kerala 695035, India.',
    }),
    defineField({
      name: 'mapsUrl',
      title: 'Google Maps Directions URL',
      type: 'url',
      initialValue: 'https://maps.google.com/?q=26/378(1),+Thekkumoodu,+Vanchiyoor+P.O.,+Thiruvananthapuram,+Kerala+695035',
    }),
  ],
});
