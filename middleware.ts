import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware(["en"] as const, "en", {
  urlMappingStrategy: "rewrite",
});

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)", "/"],
};
