import { auth } from "@/auth";

export default auth((req) => {
  console.log(req);
  console.log(req.auth);
  if (!req.auth && req.nextUrl.pathname !== "/signin") {
    const newUrl = new URL("/signin", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|signin|error).*)"],
};
