const mongoose = require("mongoose");

// ---------------------------------BBS Thirf Year-------------------------------//

const bbsThirdSchema = new mongoose.Schema({
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

const bbsThirdModel = mongoose.model("bbsThird", bbsThirdSchema);

module.exports = bbsThirdModel;
