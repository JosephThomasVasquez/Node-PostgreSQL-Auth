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
  
};

export { registerUser };
