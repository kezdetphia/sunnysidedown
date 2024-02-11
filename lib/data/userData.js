import { User } from "@/models/userModel";
import { connectToDb } from "../connectToDb";

export const getUser = async (email) => {
  try {
    connectToDb();
    const user = await User.findOne(email);
    return user;
  } catch (err) {
    console.log(err);
  }
};
