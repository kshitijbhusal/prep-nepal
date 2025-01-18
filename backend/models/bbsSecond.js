const mongoose = require("mongoose");

// ---------------------------------BBS Second Year-------------------------------//

const bbsSecondSchema = new mongoose.Schema({
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

const bbsSecondModel = mongoose.model("bbsSecond", bbsSecondSchema);

module.exports = bbsSecondModel;
