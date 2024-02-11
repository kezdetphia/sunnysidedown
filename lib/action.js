"use server";
import { User } from "@/models/userModel";
import { signIn, signOut } from "./auth";
import { connectToDb } from "./connectToDb";
import bcrypt from "bcryptjs";

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const handleGoogleLogin = async () => {
  console.log("called handleGoogleLogin");
  await signIn("google");
};

export const addUserWithCredentials = async (formData) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    throw new Error("Passwords do not match");
  }

  try {
    connectToDb();
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (!existingUser) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
      });
      await newUser.save();
      console.log("User added :", newUser);
    } else {
      return { error: "User already exists" };
    }
  } catch (err) {
    throw new Error("User already exists");
  }
};

export const loginWithCredentials = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log({ ErrorInLoginWithCredsInActions: err });
    throw err;
  }
};
