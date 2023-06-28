import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="form-container">
          <h1>Login</h1>
          <a href="">or use your account</a>

          <form action="" method="post">
            <input
              type="email"
              name="email"
              id="email-input"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />

            <a href="" className="forgot-password">
              Forgot your password?
            </a>

            <button className="button"> Log In</button>
          </form>
        </div>

        <div className="about-container">
          <h1>html css login form</h1>

          <p>
            A login form generally consists of a username or email field, a
            password field and a bottom for logging in
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
