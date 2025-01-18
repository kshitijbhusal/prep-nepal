import express from "express";
const router = express.Router();
import { upload } from "../utils/multer.js";
import { create } from "../controllers/bbs.js";

router.route("/create").post(upload.single("english"), create);

export default router;
