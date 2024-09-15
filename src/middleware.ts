import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value || "";
  const isAuth = !!token; // Boolean flag to check if user is authenticated

  const { pathname } = request.nextUrl;

  // Protect the /dashboard route
  if (pathname.startsWith("/dashboard")) {
    // If the user is not authenticated, redirect to the login page
    if (!isAuth) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // If the user is authenticated and tries to access /login, redirect to /dashboard
  if (pathname.startsWith("/login") && isAuth) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"], // Apply the middleware only to /dashboard and /login
};
