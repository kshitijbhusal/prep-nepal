import { BBS } from "../models/bbs.model.js";

const create = async (req, res) => {
  const { english, subject2, subject3, subject4, subject5 } = req.files;
  console.log(subject3);

  const { program, year } = req.body;

  const tobase64 = (buffer) => {
    return buffer.toString("base64");
  };
  const englishBase64 = await tobase64(english[0].buffer);
  const subject2Base64 = await tobase64(subject2[0].buffer);
  const subject3Base64 = await tobase64(subject3[0].buffer);
  const subject4Base64 = await tobase64(subject4[0].buffer);
  const subject5Base64 = await tobase64(subject5[0].buffer);

  // const englishData = await tobase64(req.file.buffer);

  const paper = await BBS.create({
    program,
    year,
    english: englishBase64,
    subject2: subject2Base64,
    subject3: subject3Base64,
    subject4: subject4Base64,
    subject5: subject5Base64,
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
