import { NextResponse } from "next/server";

export async function middleware(req) {
    const url = req.nextUrl.clone();
    // Example: Redirecting from /old-route to /new-route
    if (url.pathname === '/signup') {
      url.pathname = '/Login';
     // return NextResponse.redirect(url);
    }
  
    return NextResponse.next();
  }
  
  // Specify the paths to apply the middleware
  export const config = {
    matcher: ['/dashboard/:path*', '/signup', '/login'],
  };