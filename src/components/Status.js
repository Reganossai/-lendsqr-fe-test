import React, { useState, useCallback,useEffect } from 'react';
import axios from 'axios';

const Status = () => {
    
  const [person, setPerson] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");


  const handleActivateUser = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isActive: true } : user
      )
    );
  };

  const handleBlacklistUser = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isBlacklisted: true } : user
      )
    );
  };

  const handleViewDetails = (userId) => {
    // Fetch user details logic here
    const userDetails = fetchUserDetails(userId); // Function to fetch user details
    console.log('User Details:', userDetails);
  };

  const fetchUserDetails = (userId) => {
    // Simulating an API call to fetch user details
    const user = users.find((user) => user.id === userId);
    return user;
  };

  

  const callBck = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      const res = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      setPerson(res.data);
       const newData = [...res.data];
    setUsers(newData);
      
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
      <table>
        <thead>
          <tr>
            <th>ORGANIZATION</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>DATE JOINED</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.orgName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.createdAt}</td>
              <td>
                <button onClick={() => handleActivateUser(user.id)}>
                  Activate
                </button>
                <button onClick={() => handleBlacklistUser(user.id)}>
                  Blacklist
                </button>
                <button onClick={() => handleViewDetails(user.id)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Status;