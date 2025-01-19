import { BBS } from "../models/bbs.model.js";

const create = async (req, res) => {
  console.log(req.headers);
  const { program, year } = req.body;

  const tobuffer = (buffer) => {
    return buffer.toString("base64");
  };

  const englishData = await tobuffer(req.file.buffer);

  const paper = await BBS.create({
    program,
    year,
    english: englishData,
  });

  res.json({
    msg: "paper uploaded sucessfully",
    paper,
  });
};

const get = async (req, res) => {
  const { program, year } = req.query;
  // console.log(req.query);

  const paper = await BBS.findOne({
    program,
    year,
  });

  res.send(paper);
};

export { create, get };
