import { defineType, defineField } from 'sanity';

export const companyInfo = defineType({
  name: 'companyInfo',
  title: 'Company Information',
  type: 'document',
  fields: [
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      initialValue: 'To build deterministic, intelligent engineering software systems that simplify high-complexity hardware design workflows from initial specification to verified fabrication.',
    }),
    defineField({
      name: 'overview',
      title: 'Company Overview',
      type: 'text',
      initialValue: 'TUSK INNOVATIONS GLOBAL PRIVATE LIMITED is an engineering technology company working at the convergence of artificial intelligence, verified software design, and electronics design automation (EDA).',
    }),
    defineField({
      name: 'engineeringPrinciples',
      title: 'Core Engineering Principles',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
});
