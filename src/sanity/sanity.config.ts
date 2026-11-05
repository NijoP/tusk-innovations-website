import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy_project_id';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01';

export default defineConfig({
  basePath: '/studio',
  name: 'tusk_innovations_studio',
  title: 'Tusk Innovations Global — Studio',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
