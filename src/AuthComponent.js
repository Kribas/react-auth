import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";

const cookies = new Cookies();

// get token generated on login
const token = cookies.get("TOKEN");

const AuthComponent = () => {
  // set an initial state for the message we will receive after the API call
  const [message, setMessage] = useState("");

  // useEffect automatically executes once the page is fully loaded
  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "http://localhost:3000/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  const logOut = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect to the landing page
    window.location.href = "/";
  };
  return (
    <div className="text-center">
      <h1 className="text-center">Auth Component</h1>
      <h3 className="text-danger text-center">{message}</h3>
      <Button onClick={() => logOut()} variant="danger">
        LogOut
      </Button>
    </div>
  );
};

export default AuthComponent;
