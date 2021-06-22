import React from "react";
import NavBar from "../components/NavBar";
import Container from "@material-ui/core/Container";
import { FormControl, Input, InputLabel, Button } from "@material-ui/core";
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

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <Container variant="dark" maxWidth="sm">
          <h1>Dashboard</h1>

          <form action="/users/register" method="POST" className="form-bg">
            <FormControl className="form-control">
              <InputLabel className="input-labels">Name</InputLabel>
              <Input id="input-name" aria-describedby="Enter your name" />
            </FormControl>

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
                Logout
              </Button>
            </div>
          </form>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Dashboard;
