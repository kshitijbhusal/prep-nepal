import mongoose from "mongoose";

export const connection = mongoose
  .connect("mongodb://0.0.0.0/prepnepal")
  .then(() => {
    console.log("Connected to Data Base");
  });
