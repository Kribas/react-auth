import axios from "axios";
import React, { useEffect, useState } from "react";

const FreeComponent = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "http://localhost:3000/free-endpoint",
    };
    axios(configuration)
      .then((result) => {
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);
  return (
    <>
      <h1 className="text-center">Free Component</h1>
      <h3 className="text-danger text-center">{message}</h3>
    </>
  );
};

export default FreeComponent;
