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
      console.log({ signInCallback: user });

      console.log({ Emailaddress: user.profile.email });

      if (user.account?.provider === "google") {
        connectToDb();

        try {
          const userExist = await User.findOne({ email: user.profile.email });

          if (!userExist) {
            const newUser = new User({
              username: user.profile.given_name,
              email: user.profile.email,
              img: user.image,
            });

            await newUser.save();
          }
        } catch (err) {
          console.log(err);
        }
      }
      return user;
    },
  },
});
