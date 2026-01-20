import { NextResponse } from "next/server";

export default function middleware(req) {
  const { cookies, url } = req;

  // Get the mock user cookie
  const gmUser = cookies.get("gm_user")?.value;

  // Protected routes
  const protectedRoutes = [ "/shop/", "/shop/:id", "/add-product"];
  const path = new URL(url).pathname;

  const isProtected = protectedRoutes.some((route) =>
    new RegExp("^" + route.replace(":id", "[^/]+") + "$").test(path)
  );

  if (isProtected && !gmUser) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }

  return NextResponse.next();
}

// Apply middleware only to these paths
export const config = {
  matcher: ["/shop/:path*", "/add-product"],
};
