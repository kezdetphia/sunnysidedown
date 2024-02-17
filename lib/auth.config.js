export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth, request }) {
      console.log("this is auth from auth.config: ", auth);
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }


      // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      // IF THERE'S A PATHNAME AFTER THE BLOG (slug), AND THERE'S NO USER
      // REDIRECT TO THE LOGIN PAGE

      if (
        isOnBlogPage &&
        !user &&
        request.nextUrl.pathname.split("/").length > 2
      ) {
        return Response.redirect(new URL("/login", request.nextUrl));
      }

      return true;
    },
  },
};
