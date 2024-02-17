// import NextAuth from "next-auth";
// import { authConfig } from "./lib/auth.config";

// export default NextAuth(authConfig).auth;

// export const config = {
//   matcher: ["/((?!api|static|.*\\..*|_next).*)"],
// };

import { auth } from "./lib/auth";

export default auth((req) => {
  console.log("middelware");
});

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
  // matcher: ["/testing"],
};
