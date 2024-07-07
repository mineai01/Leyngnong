import React from "react";

const Login = () => {
  return (
    <div className="container-login">
      <div className="login-input">
        <h1>Login</h1>

        <div>
          <label htmlFor="username">username</label>
          <input type="input" name="username" value="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input type="input" name="password" value="password" id="password" />
        </div>
        <button className="btn-search">Login</button>
      </div>
    </div>
  );
};

export default Login;
