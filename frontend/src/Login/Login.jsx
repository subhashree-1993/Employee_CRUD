import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseurl } from "../service/baseurl";
import { endpoint } from "../service/endpoint";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    const f_userName = document.getElementById("username").value;
    const f_pwd = document.getElementById("Password").value;

    const response = await fetch(`${baseurl}${endpoint.login}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ f_userName, f_pwd }),
    });

    if (!response.ok) {
      const errorData = await response.json();

      throw new Error(errorData.error || "Failed to login");  
    }
    navigate("/dashboard");
    toast.success("Login successful!");
  };

  return (
    <div>
      <div className="container">
        <fieldset>
          <h4 className="header">Login page</h4>
          <div id="welcome">
            <p>Welcome to admin panel</p>
          </div>
          <div id="login">
            <label className="text" htmlFor="username">
              UserName:
            </label>
            <input type="text" id="username" name="username" required />
          </div>
          <br />
          <br />
          <div id="password">
            <label className="text" htmlFor="Password">
              Password:
            </label>
            <input type="password" id="Password" name="Password" required />
          </div>
          <br />
          <br />
          <div id="btn">
            <button onClick={login}>Login</button>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
