import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://localhost:3000/register",
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };
  return (
    <>
      <h2>Register</h2>
      {/* Email */}
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            placeholder="Enter Email"
          />
        </Form.Group>
        {/* Password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
            placeholder="Enter Password"
          />
        </Form.Group>

        {/* submit button */}
        <Button
          onClick={(e) => handleSubmit(e)}
          className="my-3"
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
        {register ? (
          <p className="text-success">You are Registered Successfully</p>
        ) : (
          <p className="text-danger">You are not registered</p>
        )}
      </Form>
    </>
  );
};

export default Register;
