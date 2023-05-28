import React, { useState } from "react";
import { fetchUserByUsernameAndPassword } from "../database";
import { Link } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedInUser = fetchUserByUsernameAndPassword(usernameLogin, passwordLogin);
    if (loggedInUser) {
      handleToken(loggedInUser.token);
    } else {
      setLoginStatus("Wrong username or password combination");
    }
  };
  return (
    <div className="login-div">
      <div class="bg"></div>
      <div className="bgg">
        <h1>Login</h1>
      <form>
        <div className="form-group">
          <label for="inputUsername">Username</label>
          <input
            type="text"
            name="usernameLogin"
            value={usernameLogin}
            onChange={(e) => {
              setUsernameLogin(e.target.value);
            }}
            className="form-control"
            id="inputUsername"
            placeholder="Enter Username"
          />
        </div>
        <div className="form-group">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            name="passwordLogin"
            value={passwordLogin}
            onChange={(e) => {
              setPasswordLogin(e.target.value);
            }}
            id="inputPassword"
            placeholder="Password"
          />
          <small id="passwordHelp" className="passwordHelp">
            We'll never share your password with anyone else.
          </small>
        </div>

        <h1 className="guk">{loginStatus}</h1>
        <button
          onClick={handleLogin}
          type="submit"
          id="sub-btn"
          className="btn btn-primary"
        >
          Login
        </button>
        <br />

        <div className="kupa">
          <Link to="/register">Don't have an account yet? Sign up here</Link>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
