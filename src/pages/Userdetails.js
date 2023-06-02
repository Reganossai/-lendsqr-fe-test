import React, { useEffect, useCallback, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link} from "react-router-dom";
import Sidebaruserdetails from "../components/Sidebaruserdetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faUser,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const Userdetails = ({ handleLogout }) => {
  const [person, setPerson] = useState({});
  const [total, setTotal] = useState("");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [statusText, setStatusText] = useState("");
  const params = useParams();
  const [users, setUsers] = useState([]);

  //retrieving user details and storing on local storage
  const arrayString = JSON.stringify(person);
  localStorage.setItem("person", arrayString);

  const retrievedArrayString = localStorage.getItem("person");
  const retrievedArray = JSON.parse(retrievedArrayString);

  //activate user logic
  const handleActivateUser = (userId, user) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isActive: true } : user
      )
    );
    setStatusText("Active");
  };

  //blacklist user logic
  const handleBlacklistUser = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isBlacklisted: true } : user
      )
    );

    setStatusText("Blacklisted");
  };

  //fetching the user details
  // Simulating an API call to fetch user details
  const fetchUserDetails = useCallback(() => {
    const user = users.find((user) => user.id === params.id);
    return user;
  }, [users, params]);

  // Fetch user details logic here
  const handleViewDetails = useCallback(() => {
    const userDetails = fetchUserDetails();
    if (userDetails) {
      setPerson(userDetails);
    }
  }, [fetchUserDetails]);

  useEffect(() => {
    handleViewDetails();
  }, [handleViewDetails]);

  const updateUserStatus = (userId, status) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        return { ...user, status };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  //function to fetch the users from an api
  const callBck = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage("");
      const res = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      setUsers(res.data);
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
    <div className="ov">
      <Navbar handleLogout={handleLogout} />

      <div className="blu">
        <Sidebaruserdetails handleLogout={handleLogout} />
      </div>
      <div className="ovrll">
        <div className="obt">
          <p>
            <span>
              <FontAwesomeIcon icon={faArrowLeftLong} className="obt-fontawesome" />
            </span>
            <Link to={"/users"}>Back to Users</Link>
          </p>
        </div>

        <div className="user-headerr">
          <h1>User Details</h1>
          <button
            id="red"
            className="btn btn-default"
            onClick={() => handleBlacklistUser()}
          >
            BLACKLIST USER
          </button>
          <button
            id="green"
            className="btn btn-default"
            onClick={() => handleActivateUser()}
          >
            ACTIVE USER
          </button>
        </div>

        <div className="u-d">
          <div className="u-d-sub">
            <FontAwesomeIcon icon={faUser} className="hol" />
          </div>
          <div className="u-d-sub">
            <h3>
              <b>{person?.profile?.firstName}</b>
              <b>{person?.profile?.lastName}</b>
            </h3>
            <h5>{person?.profile?.bvn}</h5>
          </div>
          <div id="under" className="u-d-sub">
            <h4>User's Tier</h4>
            <h6>
              <FontAwesomeIcon icon={faStar} className="holy" />
            </h6>
          </div>
          <div id="under" className="u-d-sub">
            <h3>
              <b>
                {person?.profile?.currency}
                <span>{person?.accountBalance}</span>
              </b>
            </h3>
            <h5>{person?.accountNumber}/Providus Bank</h5>
          </div>
        </div>

        <div className="m-d">
          <nav className="m-d-navbar">
            <ul>
              <li className="m-d-one">General Details</li>

              <li>Documents</li>

              <li>Bank Details</li>

              <li>Loans</li>

              <li>Savings</li>

              <li>App and System</li>
            </ul>
          </nav>
        </div>


        <div className="m-p">
          <h1>Personal Information</h1>
          <div className="m-p-total">
            <div>
              <div className="m-p-total-sub">
                <h4>FULL NAME</h4>
                <h3>
                  {person?.profile?.firstName} {person?.profile?.lastName}
                </h3>
              </div>
            </div>

            <div>
              <div className="m-p-total-sub">
                <h4>PHONE NUMBER</h4>
                <h3>{person?.profile?.phoneNumber}</h3>
              </div>
            </div>

            <div>
              <div className="m-p-total-sub">
                <h4>EMAIL ADDRESS</h4>
                <h3>{person?.email}</h3>
              </div>
            </div>

            <div>
              <div className="m-p-total-sub">
                <h4>BVN</h4>
                <h3>{person?.profile?.bvn}</h3>
              </div>
            </div>

            <div>
              <div className="m-p-total-sub">
                <h4>GENDER</h4>
                <h3>{person?.profile?.gender}</h3>
              </div>
            </div>
          </div>
          <br />

          <div className="m-p-total">
            <div>
              <div className="m-p-total-sub">
                <h4>MARITAL STATUS</h4>
                <h3>null</h3>
              </div>
            </div>

            <div>
              <div className="m-p-total-sub">
                <h4>CHILDREN</h4>
                <h3>null</h3>
              </div>
            </div>

            <div>
              <div className="m-p-total-sub">
                <h4>TYPE OF RESIDENCE</h4>
                <h3>null</h3>
              </div>
            </div>
          </div>

          <hr />

          <div className="lilo">
            <h1>Education and Employment</h1>
            <div className="m-p-total">
              <div>
                <div className="m-p-total-for-education">
                  <h4>LEVEL OF EDUCATION</h4>
                  <h3>{person?.education?.level}</h3>
                </div>
              </div>

              <div>
                <div className="m-p-total-sub">
                  <h4>EMPLOYMENT STATUS</h4>
                  <h3>{person?.education?.employmentStatus}</h3>
                </div>
              </div>

              <div>
                <div className="m-p-total-sub">
                  <h4>SECTOR OF EMPLOYMENT</h4>
                  <h3>{person?.education?.sector}</h3>
                </div>
              </div>

              <div>
                <div className="m-p-total-sub">
                  <h4>DURATION OF EMPLOYMENT</h4>
                  <h3>{person?.education?.duration}</h3>
                </div>
              </div>
            </div>

            <br />

            <div className="m-p-total">
              <div>
                <div className="m-p-total-sub">
                  <h4>OFFICE EMAIL </h4>
                  <h3>{person?.education?.officeEmail}</h3>
                </div>
              </div>

              <div>
                <div className="m-p-total-sub">
                  <h4>MONTHLY INCOME</h4>
                  <h3>
                    <span>{person?.profile?.currency}</span>
                    {person?.education?.monthlyIncome[0]}-
                    <span>{person?.profile?.currency}</span>
                    {person?.education?.monthlyIncome[1]}
                  </h3>
                </div>
              </div>

              <div>
                <div className="m-p-total-sub">
                  <h4>LOAN REPAYMENT</h4>
                  <h3>{person?.education?.loanRepayment}</h3>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <h1>Socials</h1>
            <div className="m-p-total">
              <div>
                <div className="m-p-total-sub">
                  <h4>TWITTER</h4>
                  <h3>{person?.socials?.twitter}</h3>
                </div>
              </div>

              <div>
                <div className="m-p-total-sub">
                  <h4>FACEBOOK</h4>
                  <h3>{person?.socials?.facebook}</h3>
                </div>
              </div>

              <div>
                <div className="m-p-total-sub">
                  <h4>INSTAGRAM</h4>
                  <h3>{person?.socials?.instagram}</h3>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div>
            <h1>Guarantor</h1>
            <div className="m-p-total">
              <div>
                <div className="m-p-total-sub">
                  <h4>FULL NAME</h4>
                  <h3>
                    {person?.guarantor?.firstName} {person?.guarantor?.lastName}
                  </h3>
                </div>
              </div>

              <div>
                <div className="m-p-total-sub">
                  <h4>PHONE NUMBER</h4>
                  <h3>{person?.guarantor?.phoneNumber}</h3>
                </div>
              </div>

              <div>
                <div className="m-p-total-sub">
                  <h4>EMAIL ADDRESS</h4>
                  <h3>Null</h3>
                </div>
              </div>

              <div>
                <div className="m-p-total-sub">
                  <h4>RELATIONSHIP</h4>
                  <h3>Null</h3>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <h1>Education and Employment</h1>
            <div className="m-p-total">
              <div>
                <div className="m-p-total-sub">
                  <h4>FULL NAME</h4>
                  <h3>
                    {person?.guarantor?.firstName} {person?.guarantor?.lastName}
                  </h3>
                </div>
              </div>

              <div>
                <div className="m-p-total-sub">
                  <h4>PHONE NUMBER</h4>
                  <h3>{person?.guarantor?.phoneNumber}</h3>
                </div>
              </div>

              <div>
                <div className="m-p-total-sub">
                  <h4>EMAIL ADDRESS</h4>
                  <h3>Null</h3>
                </div>
              </div>

              <div>
                <div className="m-p-total-sub">
                  <h4>RELATIONSHIP</h4>
                  <h3>Null</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
    </div>  
  );
};

export default Userdetails;
