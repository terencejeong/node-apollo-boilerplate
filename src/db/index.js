import mongoose from "mongoose";

mongoose.Promise = global.Promise;
export const connect = () =>
  mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/money-spender",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
