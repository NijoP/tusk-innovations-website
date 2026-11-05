import { defineType, defineField } from 'sanity';

export const roadmapUpdate = defineType({
  name: 'roadmapUpdate',
  title: 'Roadmap Stage / Milestone',
  type: 'document',
  fields: [
    defineField({
      name: 'stageIndex',
      title: 'Stage Index (0-9)',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Stage Title',
      type: 'string',
    }),
    defineField({
      name: 'gateName',
      title: 'Exit Gate Name',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Current Stage Status',
      type: 'string',
      options: {
        list: ['Completed', 'Active Development', 'Planned'],
      },
    }),
    defineField({
      name: 'description',
      title: 'Goal & Scope',
      type: 'text',
    }),
    defineField({
      name: 'deliverables',
      title: 'Key Deliverables',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});
