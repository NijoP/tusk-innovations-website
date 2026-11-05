import { defineType, defineField } from 'sanity';

export const productCapability = defineType({
  name: 'productCapability',
  title: 'Product Capability',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Capability Name',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Domain / Subsystem',
      type: 'string',
      options: {
        list: [
          'Kernel & Runtime',
          'Component Intelligence',
          'Schematic Synthesis',
          'PCB Layout & Placement',
          'Verification & Physics',
          'Manufacturing & BOM',
          'EDA Integration',
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Implementation Status',
      type: 'string',
      options: {
        list: ['Implemented', 'Partially Implemented', 'Experimental', 'Planned'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Technical Scope / Evidence',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
});
