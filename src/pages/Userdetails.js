import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebaruserdetails from "../components/Sidebaruserdetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Userdetails = ({ handleLogout }) => {
  const [person, setPerson] = useState([]);
  const [total, setTotal] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [statusText, setStatusText] = useState("");

  const [users, setUsers] = useState([]);

  const handleActivateUser = (userId, user) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isActive: true } : user
      )
    );
    setStatusText("Active");
  };

  const handleBlacklistUser = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isBlacklisted: true } : user
      )
    );

    setStatusText("Blacklisted");
  };

  const handleViewDetails = (userId) => {
    // Fetch user details logic here
    const userDetails = fetchUserDetails(userId); // Function to fetch user details
    console.log("User Details:", userDetails);
  };

  const fetchUserDetails = (userId) => {
    // Simulating an API call to fetch user details
    const user = users.find((user) => user.id === userId);
    return user;
  };

  const updateUserStatus = (userId, status) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, status };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

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
    return <h1>Loading...</h1>;
  }

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }
  return (
    <div>
      <Navbar handleLogout={handleLogout} />

      <div className="blu">
        <Sidebaruserdetails handleLogout={handleLogout} />
      </div>
      <div className="ovrll">
        <div className="obt">
          <p>
            <span>
              <FontAwesomeIcon icon={faArrowLeftLong} className="obt"/>
            </span>
            Back to Users
          </p>
        </div>

        <div className="user-headerr">
          <h1>User Details</h1>
          <button id="red" className="btn btn-default">BLACKLIST USER</button>
          <button id="green" className="btn btn-default">ACTIVE USER</button>
        </div>
      </div>
    </div>
  );
};

export default Userdetails;
