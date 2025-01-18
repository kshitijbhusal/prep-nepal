const mongoose = require("mongoose");

// ---------------------------------BBS Fourth Year-------------------------------//

const bbsFourthSchema = new mongoose.Schema({
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

const bbsFourthModel = mongoose.model("bbsFourth", bbsFourthSchema);

module.exports = bbsFourthModel;
