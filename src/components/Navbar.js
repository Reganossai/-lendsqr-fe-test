import React, { useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link,NavLink } from "react-router-dom";
import { useState } from "react";
import image from "../assets/image.png";
import Search from "./Search";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown, faScroll, faBriefcase, faCloud, faSliders, faHouse, faUserGroup, faFan, faUsers, faSackDollar, faHandshake, faPiggyBank, faHandHoldingDollar, faUserXmark, faUserCheck, faLandmark, faCoins, faMobileScreen, faUserGear, faChartColumn, faClipboard } from "@fortawesome/free-solid-svg-icons";


const Navbar = ({ handleLogout }, usernameLogin) => {
  const [profileName, setProfileName] = useState("");
  const [nav, setNav] = useState(false);

  useEffect(() => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("user-token");
    setProfileName(token);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const Logout = useCallback(() => {
    handleLogout();
  }, [handleLogout]);

  nav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className="nav-usa">
      <nav className="navbar">
        <div className="logo-div">
          <Link to="/">
            <img src={image} className="logoo" alt="logoo" />
          </Link>
        </div>
        <Search />
        <div id="navbarSupportedContent">
          <ul>
            <li className="nav-link">
              <p className="doc">
                <Link>Docs</Link>
              </p>
            </li>
            <li className="nav-link">
              <Link>
                <p  className="doc">
                  <FontAwesomeIcon icon={faBell} />
                </p>
              </Link>
            </li>

            <li>
              <div class="dropdown">
                <button
                  class="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>
                    <FontAwesomeIcon icon={faUser} className="p-pp" />
                    {profileName}
                  </span>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <ul>
                    <li className="dropdown-item">
                      <button
                        id="bt"
                        className="btn btn-primary"
                        onClick={Logout}
                      >
                        logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>

          {nav ? (
          <div id="navbarSupportedContentMobile">
          <div id="sidebarContent">
          <div className="sub">
            <li>
              <FontAwesomeIcon
                icon={faBriefcase}
                className="fontawesome-suitcase"
              />
              <Link>Switch Organization</Link>

              <FontAwesomeIcon
                icon={faAngleDown}
                className="fontawesome-angle-down"
              />
            </li>
          </div>

          <div className="co">
          <li >
            <NavLink activeClassName="disabled" to="/">
              Dashboard
            </NavLink>
            <FontAwesomeIcon
                icon={faHouse}
                className="fontawesome-house"
              />
          </li>
          </div>

          <p>
            <NavLink activeClassName="disabled" to="/">
              CUSTOMERS
            </NavLink>
          </p>
          <ul className="cont">
            <div className="soso">
              <li className="">
                <FontAwesomeIcon icon={faUserGroup}/>
                <NavLink activeClassName="active" to="/users">
                  Users
                </NavLink>
              </li>
            </div>
            <li className="">
              
            <FontAwesomeIcon icon={faUsers}/>
              <Link>Guarantors</Link>
            </li>
            <li className="">
            <FontAwesomeIcon icon={faSackDollar}/>
              <Link>Loans</Link>
            </li>
            <li className="nav-link">
              
            <FontAwesomeIcon icon={faHandshake} className="fontawesome-list"/>
              <Link>Decision Models</Link>
            </li>
            <li className="nav-link">
              
            <FontAwesomeIcon icon={faPiggyBank} className="fontawesome-list"/>
              <Link>Savings</Link>
            </li>
            <li className="nav-link">
              
            <FontAwesomeIcon icon={faHandHoldingDollar} className="fontawesome-list"/>
              <Link>Loan Requests</Link>
            </li>
            <li className="nav-link">
              
            <FontAwesomeIcon icon={faUserCheck} className="fontawesome-list"/>
            
              <Link>Whitelist</Link>
            </li>
            <li className="nav-link">
              
            <FontAwesomeIcon icon={faUserXmark} className="fontawesome-list"/>
            
              <Link>Karma</Link>
            </li>
            <p>
              <NavLink activeClassName="disabled" to="/">
                BUSINESSES
              </NavLink>
            </p>
            <li className="nav-link">
              
            <FontAwesomeIcon icon={faBriefcase} className="fontawesome-list"/>
            
              <Link>Organization</Link>
            </li>
            <li className="nav-link">
              
            <FontAwesomeIcon icon={faHandHoldingDollar}/>
              <Link>Loan Products</Link>
            </li>
            <li className="nav-link">
              
            <FontAwesomeIcon icon={faLandmark}/>
              <Link>Savings Products</Link>
            </li>
            <li className="nav-link">
              
            <FontAwesomeIcon icon={faCoins}/>
              <Link>Fees and Charges</Link>
            </li>

            <li className="nav-link">
              
            <FontAwesomeIcon icon={faMobileScreen}/>
              <Link>Transactions</Link>
            </li>

            <li className="nav-link">
              
            <FontAwesomeIcon icon={faFan}/>
              <Link>Services</Link>
            </li>

            <li className="nav-link">
              
            <FontAwesomeIcon icon={faUserGear}/>
              <Link>Service Account</Link>
            </li>

            <li className="nav-link">
              
            <FontAwesomeIcon icon={faScroll}/>
              <Link>Settlement</Link>
            </li>

            <li className="nav-link">
              
            <FontAwesomeIcon icon={faChartColumn}/>
              <Link>Reports</Link>
            </li>

            <p>
              <NavLink activeClassName="disabled" to="/">
                SETTINGS
              </NavLink>
            </p>

            <li className="nav-link">
              
            <FontAwesomeIcon icon={faSliders}/>
              <Link>Preferences</Link>
            </li>

            <li className="nav-link">
              
            <FontAwesomeIcon icon={faCloud}/>
              <Link>Fees and Pricing</Link>
            </li>

            <li className="nav-link">
              
            <FontAwesomeIcon icon={faClipboard}/>
              <Link>Audit Logs</Link>
            </li>
          </ul>
          </div>
          </div>
        ) : null}


          <div onClick={handleNav} className="zaracho">
          {nav ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
