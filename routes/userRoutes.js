import express from "express";
import bcrypt from "bcrypt";
import pool from "../config/dbConfig.js";

express().use(express.json()); // Body parser

const registerUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  console.log({
    name,
    email,
    password,
    confirmPassword,
  });

  const errors = [];

  // INPUT VALIDATION ----------------------------------------------------------

  // ERROR: Fill out all fields
  if (!name || !email || !password || !confirmPassword) {
    errors.push({ message: "Please fill out all input fields!" });
  }

  // Password minimum length 8 characters
  if (password.length < 8) {
    errors.push({ message: "Password must be at least 8 characters long." });
  }

  // Passwords do not match
  if (password !== confirmPassword) {
    errors.push({ message: "Passwords do not match!" });
  }

  if (errors.length > 0) {
    // console.log(errors);
    res.json({ errors });
  } else if (errors.length <= 0) {
    // Encrypt password
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Check if user exists via email
    pool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email],
      (error, results) => {
        if (error) {
          console.log("postgres error: ", error);
          throw error;
        }
        console.log("postgres results: ", results.rows);

        if (results.rows.length > 0) {
          errors.push({ message: "Email already has been registered." });
          res.json({ errors });
        } else {
          pool.query(
            `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, password`,
            [name, email, hashedPassword],
            (error, results) => {
              if (error) {
                console.log("postgres error: ", error);
                throw error;
              }
              console.log("postgres results: ", results.rows);
              res
                .json({ success: "Registration successfully created." })
                .redirect("/users/login");
            }
          );
        }
      }
    );
  }
};

export { registerUser };
