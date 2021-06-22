import React from "react";
import NavBar from "../components/NavBar";
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
  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <Container variant="dark" maxWidth="sm">
          <h1>Login</h1>

          <form action="/users/register" method="POST" className="form-bg">
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
