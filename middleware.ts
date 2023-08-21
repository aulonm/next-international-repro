import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";

const I18nMiddleware = createI18nMiddleware(["en"] as const, "en", {});

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/clien")) {
    return I18nMiddleware(request);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)",
    "/client",
    "/subpage",
  ],
};
