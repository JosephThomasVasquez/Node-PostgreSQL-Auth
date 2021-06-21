import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
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

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Fetch Error", error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <h1>Home {data && data.data}</h1>
          <div className="text-center">
            <Button variant="contained" color="primary" type="submmit">
              <Typography variant="body1" className="">
                <Link href="/users/login" color="inherit" className="nav-link">
                  Login
                </Link>
              </Typography>
            </Button>
          </div>
          <div className="text-center">
            New users
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

          {JSON.stringify(data)}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Home;
