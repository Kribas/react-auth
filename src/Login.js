import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Cookies from "universal-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const cookies = new Cookies();

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://localhost:3000/login",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then(
        (result) =>
          cookies.set("TOKEN", result.data.token, {
            path: "/",
          }),
        (window.location.href = "/auth")
      )
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h2>Login</h2>
      {/* Email */}
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email"
          />
        </Form.Group>
        {/* Password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>

        {/* submit button */}
        <Button
          onSubmit={(e) => handleSubmit(e)}
          className="my-3"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
        {login ? (
          <p className="text-success">You are Logged In successfully</p>
        ) : (
          <p className="text-danger">You are not logged in</p>
        )}
      </Form>
    </>
  );
};

export default Login;
