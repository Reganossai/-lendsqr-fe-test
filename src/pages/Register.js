import React, { useCallback, useState } from "react";
import { saveUserOnRegister } from "../database";
import { Link } from "react-router-dom";

import Big from '../assets/big.jpeg';
import Small from '../assets/image.png';



const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = useCallback(() => {
    const res = saveUserOnRegister({
      username,
      password,
     });

    if (res === true) {
      setSuccess(true);
    } else {
      alert(res);
    }
  }, [username, password]);

  return (
    <div className="login-div">
      <div class="bg"></div>
      <div className="bgg">
      <div className="bgg-1">
      <img src={Small} alt="lag" className="zino"/>
          
          <img src={Big} alt="lag" className="bella"/>

      </div>
      <div className="bgg-2">
        <h1>Sign Up</h1>
       
        {success ? (
          <>
            <h1 className="kug">Successful</h1>
            <div className="kuga">
              <Link to="/login">click here to login</Link>
            </div>
          </>
        ) : (
          <form>
            <div class="form-group">
              <div class="form-group col-md-6">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  class="form-control"
                  id="inputUsername"
                  placeholder="Username"
                />
              </div> <br/>
              <div class="form-group col-md-6">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
              
            </div>
            <button
              onClick={handleRegister}
              type="submit"
              id="sub-btn-2"
              class="btn btn-primary"
            >
              Register
            </button>
            <br />
            <div className="kupa-2">
              <Link to="/login">Already have an account? sign in</Link>
            </div>
          </form>
        )}
         </div>
        </div>
    
    </div>
  );
};
export default Register;
