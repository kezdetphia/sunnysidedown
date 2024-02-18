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
  runtime: "experimental-edge",
  unstable_allowDynamic: [
    "/lib/utilities.js", // allows a single file
    "/node_modules/function-bind/**", // use a glob to allow anything in the function-bind 3rd party module
  ],
  // matcher: ["/((?!api|static|.*\\..*|_next).*)"],
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],

  // matcher: ["/((?!api|static|.*\\..*|_next)[^?#]*)"],
};
