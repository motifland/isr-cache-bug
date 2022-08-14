import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname === '/1') {
    const url = req.nextUrl.clone()
    url.pathname = '/posts/1'
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
