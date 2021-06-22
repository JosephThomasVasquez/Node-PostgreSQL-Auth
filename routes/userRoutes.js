import express from "express";

const router = express.router();

const registerUser = router.route("/register").post((req, res) => {
  let { name, email, password, confirmPassword } = req.body;
  console.log({
    name,
    email,
    password,
    confirmPassword,
  });
});

export { registerUser };
