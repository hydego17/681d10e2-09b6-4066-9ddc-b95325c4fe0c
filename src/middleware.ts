import { NextResponse, type NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Example: Redirect when user is not authenticated
  // const { pathname, searchParams } = req.nextUrl;
  //   const token = req.cookies.get("token");
  //   const isProtectedRoute = pathname.startsWith("/admin");
  //   if (isProtectedRoute && !token) {
  //     const loginUrl = new URL("/auth/login", req.url);
  //     loginUrl.searchParams.set("redirect", req.nextUrl.pathname + req.nextUrl.search);
  //     return NextResponse.redirect(loginUrl);
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /**
     * Match all req paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
