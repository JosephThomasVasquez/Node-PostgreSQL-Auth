import React from "react";
import Container from "@material-ui/core/Container";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

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
  return (
    <ThemeProvider theme={theme}>
      <Container variant="dark" maxWidth="sm">
        <h1>Register</h1>

        <form action="/users/register" method="POST" className="form-bg">
          <FormControl className="form-control">
            <InputLabel className="input-labels">Name</InputLabel>
            <Input id="input-name" aria-describedby="Enter your name" />
            <FormHelperText id="Enter your name">
              Please tell us your name.
            </FormHelperText>
          </FormControl>

          <FormControl className="form-control">
            <InputLabel className="input-labels">Email</InputLabel>
            <Input
              id="input-email"
              aria-describedby="Enter your email address"
            />
            <FormHelperText id="Enter your email address">
              Where we can reach you!
            </FormHelperText>
          </FormControl>

          <FormControl className="form-control">
            <InputLabel className="input-labels">Password</InputLabel>
            <Input
              id="input-password"
              aria-describedby="Please enter a strong password"
            />
            <FormHelperText id="Please enter a strong password">
              A strong password contains special characters, uppercase,
              lowercase, and numbers.
            </FormHelperText>
          </FormControl>

          <FormControl className="form-control">
            <InputLabel className="input-labels">Confirm Password</InputLabel>
            <Input
              id="input-password"
              aria-describedby="Please confirm password"
            />
            <FormHelperText id="Please confirm password">
              Enter the password again to confirm it.
            </FormHelperText>
          </FormControl>

          <div className="form-control">
            <Button variant="contained" color="primary" type="submmit">
              Register
            </Button>
          </div>

        </form>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
