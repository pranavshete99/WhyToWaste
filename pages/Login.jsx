import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col">
      Login
      <Link to="/register">Register Page</Link>
    </div>
  );
};

export default Login;
