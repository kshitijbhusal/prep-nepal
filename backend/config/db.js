import mongoose from "mongoose";

export const connection = mongoose
  .connect("mongodb://localhost:27017/prepnepal")
  .then(() => {
    console.log("Connected to Data Base");
  });
