import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  if (host === 'tuskinnovations.in') {
    return NextResponse.redirect(`https://www.tuskinnovations.in${pathname}${search}`, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|brand|assets|favicon.ico).*)'],
};
