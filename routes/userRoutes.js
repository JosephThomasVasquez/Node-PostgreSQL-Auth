import express from "express";

express().use(express.json()); // Body parser

const registerUser = (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  console.log({
    name,
    email,
    password,
    confirmPassword,
  });

  const errors = [];
  const errorz = [
    { message: "Please fill out all input fields!" },
    { message: "Password must be at least 8 characters long." },
    { message: "Passwords do not match!" },
  ];

  // INPUT VALIDATION ----------------------------------------------------------

  // ERROR: Fill out all fields
  if (!name || !email || !password || confirmPassword) {
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
  }
};

export { registerUser };
