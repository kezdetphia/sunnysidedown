"use server";
import { User } from "@/models/userModel";
import { connectToDb } from "../connectToDb";
import { revalidatePath } from "next/cache";

export const getUser = async (id) => {
  connectToDb();
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = async () => {
  connectToDb();
  try {
    const users = await User.find({});
    return users;
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await User.findByIdAndDelete(id);
    revalidatePath("/admin");
    console.log({ Sucess: "User deleted" }, id);
  } catch (err) {
    console.log(err);
  }
};
