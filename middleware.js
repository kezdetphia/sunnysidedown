import { NextResponse } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

// export function middleware(req) {
//   console.log("about");
//   return NextResponse.redirect(new URL("/login", req.url));
// }

// export const config = {
//   // matcher: ["/((?!api|static|.*\\..*|_next).*)"],
//   matcher: "/(blog/[a-zA-Z0-9-/]+)?",
// };


export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
