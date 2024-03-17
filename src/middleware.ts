import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/login") &&
    request.cookies.has("next-auth.session-token")
  ) {
    // Redirect to the root route ("/") if authenticated
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (
    !request.nextUrl.pathname.startsWith("/login") &&
    !request.cookies.has("next-auth.session-token")
  ) {
    console.log(request.nextUrl.pathname);
    // Redirect to the login route ("/login") if not authenticated
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
