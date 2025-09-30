import mongoose from "mongoose"

export const connectDB = async() => {
  try {
    await mongoose.connect(process.env.CONNECT_DB)
    console.log("MongoDB connected successfully!")
  } catch (error) {
    console.error("MongoDB connection error: " ,error)
    process.exit(1) // Exit if connect db error
  }
}