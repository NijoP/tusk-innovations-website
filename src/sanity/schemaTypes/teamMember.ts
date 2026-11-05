import { defineType, defineField } from 'sanity';

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role / Designation',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Professional Bio',
      type: 'text',
    }),
    defineField({
      name: 'github',
      title: 'GitHub Profile',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn Profile',
      type: 'url',
    }),
  ],
});
