import React from "react";
import NavBar from "../components/NavBar";
import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <>
      <NavBar />
      <h1>Home</h1>
      <Button variant="contained" color="primary">
        Login
      </Button>
    </>
  );
};

export default Home;
