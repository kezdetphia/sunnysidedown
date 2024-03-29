import { User } from "../models/userModel";
import { connectToDb } from "./connectToDb";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    ///----
    async jwt({ token }) {
      // console.log("token in jwt callback -start", token);
      try {
        connectToDb();
        // When logging in with Google, token.sub represents the MongoDB user ID.
        // Otherwise, token.sub is a different string that contains a hyphen.
        let existingUser;
        // Verify whether the presence of a hyphen in token.sub indicates
        // whether the user is logging in with Google or using credentials.
        if (token.sub.includes("-")) {
          //If the login method is Google, locate the user in the database by their email address
          //as they don't have a MongoDB ID yet.
          existingUser = await User.findOne({ email: token.email });
        } else {
          //If the user is logging in with credentials, then locate the user by their MongoDB ID,
          // as it's the only available information at this stage.
          existingUser = await User.findOne({ _id: token.sub });
        }
        // console.log("existingUser", existingUser);
        if (existingUser) {
          // If the existing user is found, update the token information with the user's data
          // If the token property is not present, assign the corresponding value from the existing user
          token.id = token.id || existingUser.id;
          token.isAdmin = token.isAdmin || existingUser.isAdmin;
          token.email = token.email || existingUser.email;
          token.name = token.name || existingUser.username;
          token.picture = token.picture || existingUser.img;
        } else {
          // If the user is not found, create a new user based on the token information
          // console.log("user not found");

          const newUser = new User({
            username: token.name,
            email: token.email,
            img: token.picture,
            isAdmin: false,
          });
          await newUser.save();
          token.id = newUser.id;
        }
      } catch (err) {
        // console.log({ CatchErrroFromJWTSignIn: err });
        // throw err;
      }
      // console.log("token in jwt callback -end", token);
      return token;
    },

    // Update session data with token information
    async session({ session, token }) {
      // console.log("token in callback sessuin -start :", token);
      // console.log("session in callback sessuin -start  :", session);

      // Update session user properties with token data
      session.user.isAdmin = token.isAdmin;
      session.user.id = token.id;

      // console.log("token in callback sessuin -end :", token);
      // console.log("session in callback sessuin -end:", session);

      return session;
    },

    //---

    // authorized({ auth, request }) {
    //   // console.log("this is auth from auth.config: ", auth);

    //   const user = auth?.user;
    //   const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
    //   const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
    //   const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

    //   // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
    //   if (isOnAdminPanel && !user?.isAdmin) {
    //     return Response.redirect(new URL("/blog", request.nextUrl));
    //   }

    //   //CHANGES
    //   // if (isOnAdminPanel && !user?.isAdmin) {
    //   //   return false;
    //   // }

    //   // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
    //   if (isOnLoginPage && user) {
    //     return Response.redirect(new URL("/", request.nextUrl));
    //     // return false;
    //   }

    //   // IF THERE'S A PATHNAME AFTER THE BLOG (slug), AND THERE'S NO USER
    //   // REDIRECT TO THE LOGIN PAGE
    //   if (
    //     isOnBlogPage &&
    //     !user &&
    //     request.nextUrl.pathname.split("/").length > 2
    //   ) {
    //     return Response.redirect(new URL("/", request.nextUrl));
    //   }

    //   return true;
    // },
  },
};
