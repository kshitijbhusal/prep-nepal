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
  subject2: {
    type: String,
    required: true,
  },
  subject3: {
    type: String,
    required: true,
  },
  subject4: {
    type: String,
    required: true,
  },
  subject5: {
    type: String,
    required: true,
  },
});

export const BBS = mongoose.model("BBS", bbsSchema);
