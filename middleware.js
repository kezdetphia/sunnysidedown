import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

// export default auth((req) => {
//   console.log("middelware");
//   const isLoggedIn = !!req.auth;
//   console.log("IS LOGGED IN", isLoggedIn);
// });

export default NextAuth(authConfig).auth;

export const config = {
  runtime: "experimental-edge",
  unstable_allowDynamic: [
    "/lib/connecToDb.js", // allows a single file
    "/lib/auth.js", // allows a single file
    "/node_modules/function-bind/**", // use a glob to allow anything in the function-bind 3rd party module
  ],
  // matcher: ["/((?!api|static|.*\\..*|_next).*)"],
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],

  // matcher: ["/((?!api|static|.*\\..*|_next)[^?#]*)"],
};
