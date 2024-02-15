import { User } from "@/models/userModel";
import { connectToDb } from "../connectToDb";


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
  try{
    const users = await User.find({});
    return users
  }catch(err){
    console.log(err)
  }
}