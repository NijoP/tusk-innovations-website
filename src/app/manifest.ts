import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TUSK Innovations Global Private Limited',
    short_name: 'TUSK Innovations',
    description:
      'TUSK Innovations Global Private Limited is an AI and electronics engineering company building intelligent software, AI solutions, and physical electronic hardware.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f5',
    theme_color: '#da552f',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
