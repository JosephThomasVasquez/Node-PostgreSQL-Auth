import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ErrorMessage from "../components/ErrorMessage";
import Container from "@material-ui/core/Container";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      type: "light",
      main: lightBlue[400],
      contrastText: "white",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
      contrastText: "white",
    },
  },
});

const Register = () => {
  // Set State for register data
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors: "",
    success: "",
  });

  const handleRegisterInput = (e) => {
    // Destructure input by name and value
    const { name, value } = e.target;

    // Set state of registerData from input names and values
    setRegisterData({ ...registerData, [name]: value });
    console.log("registerData", registerData);
  };

  // Submit register data
  const handleRegister = (e) => {
    e.preventDefault();

    const setupData = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: JSON.stringify({
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
        confirmPassword: registerData.confirmPassword,
      }),
    };

    fetch("http://localhost:5000/users/register", setupData)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("Data", data);
        setRegisterData(data);
      })
      .catch((error) => {
        console.log("Fetch Error", error);
      });
  };

  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <Container variant="dark" maxWidth="sm">
          <h1>Register</h1>

          <form
            action="/users/register"
            method="POST"
            className="form-bg"
            onSubmit={handleRegister}
          >
            {registerData.errors &&
              registerData.errors.map((err) => (
                <ErrorMessage key={err.message} message={err.message} />
              ))}
            <FormControl className="form-control">
              <InputLabel className="input-labels">Name</InputLabel>
              <Input
                id="input-name"
                name="name"
                aria-describedby="Enter your name"
                onChange={handleRegisterInput}
              />
            </FormControl>

            <FormControl className="form-control">
              <InputLabel className="input-labels">Email</InputLabel>
              <Input
                id="input-email"
                name="email"
                aria-describedby="Enter your email address"
                onChange={handleRegisterInput}
              />
            </FormControl>

            <FormControl className="form-control">
              <InputLabel className="input-labels">Password</InputLabel>
              <Input
                id="input-password"
                name="password"
                aria-describedby="Please enter a strong password"
                onChange={handleRegisterInput}
              />
            </FormControl>

            <FormControl className="form-control">
              <InputLabel className="input-labels">Confirm Password</InputLabel>
              <Input
                id="input-password"
                name="confirmPassword"
                aria-describedby="Please confirm password"
                onChange={handleRegisterInput}
              />
            </FormControl>

            <div className="form-control button-register">
              <Button variant="contained" color="primary" type="submmit">
                Register
              </Button>
            </div>
            <div className="dark-text text-center">
              Already have an account?
              <Button color="primary" type="submmit">
                <Typography variant="body1" className="">
                  <Link
                    href="/users/login"
                    color="inherit"
                    className="nav-link"
                  >
                    Login here
                  </Link>
                </Typography>
              </Button>
            </div>
          </form>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Register;
