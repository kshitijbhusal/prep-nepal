import express from "express";
const router = express.Router();
import { upload } from "../utils/multer.js";
import { create, get } from "../controllers/bbs.controller.js";

const fileUpload = upload.fields([
  { name: "english", maxCount: 1 },
  { name: "subject2", maxCount: 1 },
  { name: "subject3", maxCount: 3 },
  { name: "subject4", maxCount: 4 },
  { name: "subject5", maxCount: 5 },
]);

// router.route("/create").post(upload.single("english"), create);
router.route("/create").post(fileUpload, create);
router.route("/get").get(get);

export default router;
