"use server";
import { redirect } from "next/navigation";
import { User } from "../models/userModel";
import { signIn, signOut } from "./auth";
import { connectToDb } from "./connectToDb";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const handleGoogleLogin = async () => {
  console.log("called handleGoogleLogin");
  await signIn("google");
};

export const addUserWithCredentials = async (prevState, formData) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  if (password.length < 6) {
    return { error: "Password should be at least 6 characters" };
  }
  try {
    connectToDb();
    //CHANGES
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    // const existingUser = await User.findOne(email);
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
      revalidatePath("/");
    } else {
      return { error: "User already exists try logging in" };
    }
  } catch (err) {
    console.error(err);
    return { error: "An unexpected error occurred. Please try again later." };
  }
  return true;
};

export const loginWithCredentials = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (!user) {
      return { error: "Invalid username or password" };
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { error: "Invalid username or password" };
    }
    await signIn("credentials", { username, password });
  } catch (err) {
    // console.error(err); // Log the error for debugging
    // return { error: "An unexpected error occurred. Please try again later." };
    throw err;
  }
  return true;
};
