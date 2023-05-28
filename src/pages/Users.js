import React, { useEffect, useCallback, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const Users = ({ handleLogout }) => {
  const [person, setPerson] = useState([]);
  const [total, setTotal] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = total;

  // Logic for calculating the start and end indexes of the current page
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = person.slice(firstIndex, lastIndex);

  // Render the table rows using the currentItems
  const renderTableRows = () => {
    return person.map((item, index) => (
      <tr key={index}>
        <td>{item.orgName}</td>
        <td>{item.userName}</td>
        <td>{item.email}</td>
        <td>{item.phoneNumber}</td>
        <td>{item.createdAt}</td>
        <td>null</td>
      </tr>
    ));
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
        <Sidebar />
      </div>
      <div className="ovrl">
        <div className="user-header">
          <h1>Users</h1>
        </div>
        <div className="users">
          <h2>USERS</h2>
          <p>{total}</p>
        </div>

        <div className="active-users">
          <h2> ACTIVE USERS</h2>
          <p>{total}</p>
        </div>

        <div className="users-with-loans">
          <h2>USERS WITH LOANS</h2>
          <p>{total}</p>
        </div>

        <div className="users-with-savings">
          <h2>USERS WITH SAVINGS</h2>
          <p>{total}</p>
        </div>

        <div className="dashboard-table">
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
            <tbody>{renderTableRows()}</tbody>
          </table>

          {/* Pagination controls */}
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
          <span>{currentPage}</span>
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
        {/* {person.map((data) => (
            <div key={person.id}>
              <table>
                <tr>
                  <td>{person.icao24}</td>
                  <td>{person.lastSeen}</td>
                  <td>{person.callsign}</td>
                  <td>{person.lastSeen}</td>
                  <td>{person.callsign}</td>
                  <td>{person.estDepartureAirport}</td>
                </tr>
              </table>
              ))}
 */}
      </div>
    </div>
  );
};

export default Users;
