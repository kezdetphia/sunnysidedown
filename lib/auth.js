import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDb } from "./connectToDb";
import { User } from "@/models/userModel";
import { authConfig } from "@/lib/auth.config";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn(user) {
      if (user.account?.provider === "google") {
        connectToDb();

        try {
          const userExist = await User.findOne({ email: user.profile.email });

          if (!userExist) {
            const newUser = new User({
              username: user.profile.given_name,
              email: user.profile.email,
              img: user.image,
              isAdmin: false,
            });

            await newUser.save();
          }
        } catch (err) {
          return { error: "something went wrong" };
        }
      }
      return user;
    },
    async jwt({ token }) {
      // console.log("user in jwt callback -start", user);
      console.log("token in jwt callback -start", token);

      try {
        const existingUser = await User.findOne({ email: token.email });
        console.log("existingUser", existingUser);

        if (existingUser) {
          token.id = existingUser._id;
          token.isAdmin = existingUser.isAdmin;
        } else {
          console.log("user not found");
          const newUser = new User({
            username: token.name,
            email: token.email,
            img: token.picture,
            isAdmin: false,
          });
          await newUser.save();
          token.id = newUser._id;
        }
      } catch (err) {
        console.log(err);
      }

      // console.log("user in jwt callback -end", user);
      console.log("token in jwt callback -end", token);
      return token;
    },
    async session({ session, token }) {
      console.log("token in callback sessuin -start :", token);
      console.log("session in callback sessuin -start  :", session);

      session.isAdmin = token.isAdmin;
      session.id = token.id;
      console.log("token in callback sessuin -end :", token);
      console.log("session in callback sessuin -end:", session);
      return session;
    },
  },
});
