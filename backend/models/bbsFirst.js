const mongoose = require("mongoose");

// ---------------------------------BBS First Year-------------------------------//

const bbsFirstSchema = new mongoose.Schema({
  program: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  paper: {
    type: String,
    required: true,
  },
});

const bbsFirstModel = mongoose.model("bbsFirst", bbsFirstSchema);

module.exports = bbsFirstModel;
