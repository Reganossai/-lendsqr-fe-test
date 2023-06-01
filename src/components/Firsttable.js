import React, { useState, useCallback, useEffect, useMemo } from "react";
import {Link} from 'react-router-dom';
import ReactPaginate from "react-paginate";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical,faUserXmark} from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

const Firsttable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [users, setUsers] = useState([]);
  const [initialUsers, setInitialUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [statusText, setStatusText] = useState("");

  /*Logic for pagination*/
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = useMemo(()=>users.slice(indexOfFirstItem, indexOfLastItem),[users, indexOfFirstItem, indexOfLastItem]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const handleActivateUser = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isActive: true, isBlacklisted:false } : user
      )
    );
  };

  const handleBlacklistUser = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isBlacklisted: true , isActive:false} : user
      )
    );

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
      setUsers(res.data);
      setInitialUsers(res.data);
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((user) => (
            <tr key={user.id} user={user} updateUserStatus={updateUserStatus}>
              <td>{user.orgName}</td>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.createdAt}</td> 
              <td>{user.isActive?'Active': user.isBlacklisted?"Blacklisted":'Pending'} </td>
              <td>
                <button
                  class="btn btn-light"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  updateUserStatus={updateUserStatus}
                >
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <ul>
                    <li className="btt">
                      <FontAwesomeIcon icon={faEye} />
                      <button >
                      <button onClick={() => handleBlacklistUser(user.id)}>
                      <Link to={`/userdetails/${user.id}`}>
                      View Details
                      
                      </Link>
                      </button> 
                       
                      </button>
                    </li>
                    <li className="btts">
                      <FontAwesomeIcon icon={faUserXmark} />
                      <button onClick={() => handleBlacklistUser(user.id)}>
                        Blacklist User
                      </button>
                    </li>
                    <li className="bt">
                      <FontAwesomeIcon icon={faUserCheck} />
                      <button onClick={() => handleActivateUser(user.id)}>
                        Activate User
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        pageCount={Math.ceil(users.length / itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName={"item active "}
        breakClassName={"item break-me "}
        breakLabel={"..."}
        disabledClassName={"disabled-page"}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        nextLabel={
          <FontAwesomeIcon
            icon={faCaretRight}
            style={{ fontSize: 18, width: 150 }}
          />
        }
        pageClassName={"item pagination-page "}
        previousClassName={"item previous"}
        previousLabel={
          <FontAwesomeIcon
            icon={faCaretLeft}
            style={{ fontSize: 18, width: 150 }}
          />

        }
      />
    </div>
  );
};

export default Firsttable;
