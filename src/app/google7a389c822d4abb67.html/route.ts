import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('google-site-verification: google7a389c822d4abb67.html', {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
