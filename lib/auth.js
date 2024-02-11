import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDb } from "./connectToDb";
import { User } from "@/models/userModel";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [Google],

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        connectToDb();
        try {
          const existingUser = await User.findOne({ email: user.email });

          if (!existingUser) {
            const newUser = new User({
              username: user.name,
              email: user.email,
              image: user.image,
            });

            await newUser.save();
            console.log({ NewUser: newUser });
          }
        } catch (err) {
          console.log(err);
          // return false;
        }
      }
      return true;
    },
  },
});
