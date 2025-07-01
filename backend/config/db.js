import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("MONGODB CONNECTED");

    mongoose.connection.on("connected", () => console.log("conntected"));
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
