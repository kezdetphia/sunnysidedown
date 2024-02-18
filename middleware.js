import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";
import { auth } from "./lib/auth";

// export default auth((req) => {
//   console.log("middelware");
//   const isLoggedIn = !!req.auth;
//   console.log("IS LOGGED IN", isLoggedIn);
// });

export default NextAuth(authConfig).auth;

export const config = {
  // matcher: ["/((?!api|static|.*\\..*|_next).*)"],
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],

  // matcher: ["/((?!api|static|.*\\..*|_next)[^?#]*)"],
};
