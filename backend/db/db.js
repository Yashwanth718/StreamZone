import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDB = async() => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
    console.log(`DB Connnected! \nDB_NAME:${connectionInstance.connection.name}`)
  } catch (error) {
    throw error
  }
}
export {connectToDB}