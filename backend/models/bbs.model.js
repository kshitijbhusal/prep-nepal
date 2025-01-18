import mongoose from "mongoose";

// ---------------------------------BBS Model-------------------------------//

const bbsSchema = new mongoose.Schema({
  program: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  english: {
    type: String,
    required: true,
  },
});

export const BBS = mongoose.model("BBS", bbsSchema);
