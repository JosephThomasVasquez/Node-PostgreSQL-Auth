import React, { useState } from "react";
import NavBar from "../components/NavBar";
import ErrorMessage from "../components/ErrorMessage";
import SuccessMessage from "../components/SuccessMessage";
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

const Login = () => {
  // Set State for register data
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    errors: "",
    success: "",
  });

  const handleLoginInput = (e) => {
    // Destructure input by name and value
    const { name, value } = e.target;

    // Set state of registerData from input names and values
    setLoginData({ ...loginData, [name]: value });
    console.log("loginData", loginData);
  };

  // Submit register data
  const handleLogin = (e) => {
    e.preventDefault();

    const setupData = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    };

    fetch("http://localhost:5000/users/login", setupData)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setLoginData(data);
        if (data.success) {
          setLoginData({ ...data, success: data.success });
        }
        console.log("Data", loginData);
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
          <h1>Login</h1>

          <form
            action="/users/register"
            method="POST"
            className="form-bg"
            onSubmit={handleLogin}
          >
            {loginData.errors &&
              loginData.errors.map((err) => (
                <ErrorMessage key={err.message} message={err.message} />
              ))}
            {loginData.success && (
              <SuccessMessage message={loginData.success} />
            )}
            <FormControl className="form-control">
              <InputLabel className="input-labels">Email</InputLabel>
              <Input
                id="input-email"
                aria-describedby="Enter your email address"
              />
            </FormControl>

            <FormControl className="form-control">
              <InputLabel className="input-labels">Password</InputLabel>
              <Input
                id="input-password"
                aria-describedby="Please enter a strong password"
              />
            </FormControl>

            <div className="form-control button-register">
              <Button variant="contained" color="primary" type="submmit">
                Login
              </Button>
            </div>
            <div className="dark-text text-center">
              Need an account?
              <Button color="primary" type="submmit">
                <Typography variant="body1" className="">
                  <Link
                    href="/users/register"
                    color="inherit"
                    className="nav-link"
                  >
                    Register here
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

export default Login;
