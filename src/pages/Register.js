import React, { useCallback, useState } from "react";
import { saveUserOnRegister } from "../database";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = useCallback(() => {
    const res = saveUserOnRegister({
      email,
      password,
     });

    if (res === true) {
      setSuccess(true);
    } else {
      alert(res);
    }
  }, [email, password]);

  return (
    <div className="register-div">
      <div class="bg"></div>
      <div className="bgg">
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
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control"
                  id="inputEmail"
                  placeholder="Email"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword">Password</label>
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
              id="sub-btn"
              class="btn btn-primary"
            >
              Register
            </button>
            <br />
            <div className="kupa">
              <Link to="/login">Already have an account? sign in</Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default Register;
