import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({ path: "./config/config.env" }); // to access .env file

app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["POST"], // methods used
  credentials: true, // always true
})); // CORS setup

app.use(express.json()); // for parsing JSON
app.use(express.urlencoded({ extended: true })); // for parsing URL-encoded data

app.use("/api/v1/message", messageRouter);// router file access

dbConnection(); // DB connection call

export default app;
