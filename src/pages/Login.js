import React, { useState } from "react";
import { fetchUserByUsernameAndPassword } from "../database";
import { Link } from "react-router-dom";
import Big from '../assets/big.jpeg';
import Small from '../assets/image.png';

const Login = ({ handleToken }) => {
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const [showPassword, setShowPassword] = useState(false);


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

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
        <div className="bgg-1">
          <img src={Small} alt="lag" className="zino"/>
          
          <img src={Big} alt="lag" className="bella"/>
        </div>
        <div className="bgg-2">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      <form>
        <div className="form-group">
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
          <input
            
            type={showPassword ? 'text' : 'password'}
            className="form-control"
            name="passwordLogin"
            value={passwordLogin}
            onChange={(e) => {
              setPasswordLogin(e.target.value);
            }}
            id="inputPassword"
            placeholder="Password"
            
          />
            <span
        className={`password-toggle ${showPassword ? 'show' : ''}`}
        onClick={togglePasswordVisibility}
      ></span>
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
    </div>
  );
};

export default Login;
