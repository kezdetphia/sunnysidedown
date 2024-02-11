import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDb } from "./connectToDb";
import { User } from "@/models/userModel";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

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
    async jwt({ token }) {
      // console.log("user in jwt callback -start", user);
      console.log("token in jwt callback -start", token);

      try {
        // const existingUser = await User.findById(token.sub);
        const existingUser = await User.findOne({
          $or: [{ email: token.email }, { _id: token.sub }],
        });

        console.log("existingUser", existingUser);

        if (existingUser) {
          token.id = existingUser._id;
          token.isAdmin = existingUser.isAdmin;
          token.email = existingUser.email;
          token.name = existingUser.username;
          token.picture = token.picture || existingUser.img;
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

      session.user.isAdmin = token.isAdmin;
      session.user.id = token.id;
      console.log("token in callback sessuin -end :", token);
      console.log("session in callback sessuin -end:", session);
      return session;
    },
    async authorized({ auth, request }) {
      console.log("Auth from authorized callback:", auth);

      return true;
    },
  },
});
