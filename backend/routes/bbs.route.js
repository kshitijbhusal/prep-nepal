import express from "express";
const router = express.Router();
import { upload } from "../utils/multer.js";
import { create, get } from "../controllers/bbs.controller.js";

router.route("/create").post(upload.single("english"), create);
router.route("/get").get(get);
// router.route("/create").post(upload.single("english"), (req, res) => {
//   console.log(req.file);
//   res.send("hello there");
// });

export default router;
