import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MongoDB_URI}\abcd`
    );
    
    console.log(
      `\nMongoDb connected|| DB host:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("error", error);
  }
};
export default dbConnect;
