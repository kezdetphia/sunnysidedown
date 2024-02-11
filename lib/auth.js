import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDb } from "./connectToDb";
import { User } from "@/models/userModel";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

// Function to handle login with credentials
const credentialsLoginHelper = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Wrong Credentials");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong Password");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to log in");
  }
};

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Google,
    CredentialProvider({
      async authorize(credentials) {
        try {
          const user = await credentialsLoginHelper(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
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
    ...authConfig.callbacks,
  },
});
