import React from "react";
import Container from "@material-ui/core/Container";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      type: "dark",
      main: lightBlue[400],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

const Register = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container variant="dark">
        <h1>Register</h1>

        <form action="/users/register" method="POST" className="form-bg">
          <FormControl>
            <InputLabel className="input-labels">Email</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
          </FormControl>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
