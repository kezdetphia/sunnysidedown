import mongoose from "mongoose";
// import * as mongoose from "mongoose";

let connection;
export const connectToDb = async () => {
  try {
    if (connection) {
      console.log("Using existing connection");
      return connection;
    }

    const db = await mongoose.connect(process.env.MONGO_URI);

    connection = db.connection;
    console.log("Database connected successfully");
    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
