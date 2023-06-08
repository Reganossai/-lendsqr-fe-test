import React, { useEffect, useCallback, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Firsttable from "../components/Firsttable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons";
import {faFileLines} from "@fortawesome/free-solid-svg-icons";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import big from "../assets/big.jpeg";

const Dashboard = ({ handleLogout }, { itemsPerPage }) => {
  const [person, setPerson] = useState([]);
  const [total, setTotal] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const callBck = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      const res = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      setPerson(res.data);
      setTotal(res.data.length);
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    callBck();
  }, [callBck]);

  if (loading) {
    return <img src={big} alt="logo" className="loading"/>;
 
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }
  return (
    <div>
      <Navbar handleLogout={handleLogout} />

      <div className="blu">
        <Sidebar />
      </div>
      <div className="ovrl">
        <div className="user-header">
          <h1>Users</h1>
        </div>
        <div className="users">
          <FontAwesomeIcon icon={faUserGroup} className="fontawesome-users"/>
          <h2>USERS</h2>
          <p>{total}</p>
        </div>

        <div className="active-users">
        <FontAwesomeIcon icon={faUsers} className="fontawesome-active"/>
          <h2> ACTIVE USERS</h2>
          <p>{total}</p>
        </div>

        <div className="users-with-loans">
        <FontAwesomeIcon icon={faFileLines} className="fontawesome-loans"/>
          <h2>USERS WITH LOANS</h2>
          <p>{total}</p>
        </div>

        <div className="users-with-savings"> 
        <FontAwesomeIcon icon={faCoins} className="fontawesome-savings"/>
          <h2>USERS WITH SAVINGS</h2>
          <p>{total}</p>
        </div>

      
        </div>
 <Firsttable/>
      </div>
  );
};

export default Dashboard;
