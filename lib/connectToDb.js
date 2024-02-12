// import mongoose from "mongoose";

// const connection = {};

// export const connectToDb = async () => {
//   try {
//     if (connection.isConnected) {
//       console.log("Using existing connection");
//       return;
//     }
//     const db = await mongoose.connect(process.env.MONGO_URI);
//     connection.isConnected = db.connections[0].readyState;
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// };

import mongoose from "mongoose";

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
    throw new Error("Failed to connect to the database");
  }
};
