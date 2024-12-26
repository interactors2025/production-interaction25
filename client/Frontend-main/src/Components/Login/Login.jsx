import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="mainCont">
        <div className="login-container">
          <div className="login-left">
            <img
              src="https://rurutek.com/jio/assets/img/login-animate.gif"
              alt="Admin"
              className="login-image"
            />
          </div>
          <div className="login-right">
            <h1>Admin Login</h1>
            <form>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />

              <button type="submit" className="login-btn">
                Login
              </button>
              <a href="/">Home</a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
