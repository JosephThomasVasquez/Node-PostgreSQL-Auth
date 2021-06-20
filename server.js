import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT;


// Run server and listen on PORT
app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
