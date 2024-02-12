import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDb } from "./connectToDb";
import { User } from "@/models/userModel";
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

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
    async jwt({ token }) {
      // console.log("token in jwt callback -start", token);

      try {
        // When logging in with Google, token.sub represents the MongoDB user ID.
        // Otherwise, token.sub is a different string that contains a hyphen.
        let existingUser;
        // Verify whether the presence of a hyphen in token.sub indicates
        // whether the user is logging in with Google or using credentials.
        if (token.sub.includes("-")) {
          //If the login method is Google, locate the user in the database by their email address.
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
          console.log("user not found");
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
        console.log(err);
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
    // Authorize the user
    async authorized({ auth, request }) {
      // console.log("Auth from authorized callback:", auth);

      return true;
    },
  },
});
