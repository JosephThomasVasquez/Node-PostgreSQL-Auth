import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session, { Session } from "express-session";
import pool from "./config/dbConfig.js";
import { registerUser, loginUser } from "./routes/userRoutes.js";
import passport from "passport";
import { initialize } from "./config/passportConfig.js";

initialize(passport);

dotenv.config();

const app = express();

// Allow CORS origin
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Body parser

// ROUTES
app.post("/users/register", registerUser);

app.get("/users/login", userAuthenticated, loginUser);

app.post(
  "/users/login",
  passport.authenticate("local", {
    successRedirect: "/users/dashboard",
    failureRedirect: "/users/login",
  })
);

function userAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/dashboard");
  }
  next();
}

const PORT = process.env.PORT;

// Run server and listen on PORT
app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});

app.get("/", (req, res) => {
  res.json({ message: "Connected to /", data: "User" });
});
