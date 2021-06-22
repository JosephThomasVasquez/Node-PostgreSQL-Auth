import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./config/dbConfig.js";

dotenv.config();

const app = express();

// Allow CORS origin
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Body parser

const PORT = process.env.PORT;

// Run server and listen on PORT
app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});

app.get("/", (req, res) => {
  res.json({ message: "Connected to /", data: "User" });
});
