import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Button from "@material-ui/core/Button";

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
      <h1>Home {data && data.data}</h1>
      <Button variant="contained" color="primary">
        Login
      </Button>
      {JSON.stringify(data)}
    </>
  );
};

export default Home;
