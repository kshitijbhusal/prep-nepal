import express from "express";
import dotenv from "dotenv";

dotenv.config();

import { connection } from "./config/db.js";

import cors from "cors";
import bbsRouter from "./routes/bbs.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello this is a home page");
});

//------------------POST ROUTES---------------------------------

app.use("/paper", bbsRouter);

app.listen(3000, () => {
  console.log("Server Started");
});
