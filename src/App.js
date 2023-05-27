import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getUserToken, saveUserToken } from "./database/token";
import './sass/App.scss';

function App() {
  const [token, setToken] = useState("");


  useEffect(() => {
    const previousLoggedInToken = getUserToken();
    setToken(previousLoggedInToken);
  }, []);

  const handleToken = useCallback((loggedInToken) => {
    setToken(loggedInToken)
    saveUserToken(loggedInToken)
  }, []);

  const handleLogout = useCallback((loggedInToken) => {
    setToken('')
    saveUserToken('')
  }, []);

  return (
    <div className="App">
      {token ? (
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Dashboard handleLogout={handleLogout} />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Login handleToken={handleToken} />
            </Route>
            <Route path="/register">
              <Register  />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
