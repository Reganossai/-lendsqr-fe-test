import React, { useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import image from "../assets/image.png";
import Search from "./Search";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowsSpin,
  faAngleDown,
  faScroll,
  faBriefcase,
  faCloud,
  faSliders,
  faHouse,
  faUserGroup,
  faFan,
  faUsers,
  faSackDollar,
  faHandshake,
  faPiggyBank,
  faHandHoldingDollar,
  faUserXmark,
  faUserCheck,
  faLandmark,
  faCoins,
  faMobileScreen,
  faUserGear,
  faChartColumn,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

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
            <li>
              <p className="doc">
                <Link>Docs</Link>
              </p>
            </li>
            <li>
              <Link>
                <p className="doc">
                  <FontAwesomeIcon icon={faBell} />
                </p>
              </Link>
            </li>

            <li>
              <div id="dropdown1" class="dropdown">
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
                <div
                  id="dropdown1-menu"
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <ul>
                    <li className="btt">
                      <button className="btn btn-primary" onClick={Logout}>
                        logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <div onClick={handleNav} className="zaracho">
              {nav ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </ul>

          {nav ? (
            <div id="navbarSupportedContentMobile">
              <div id="sidebarContent">
                <ul className="contt">
                  <div className="soso">
                    <li>
                      <Link>Switch Organization</Link>
                    </li>

                    <li>
                      <NavLink activeClassName="disabled" to="/">
                        Dashboard
                      </NavLink>
                    </li>

                    <li>
                      <p>
                        <NavLink activeClassName="disabled" to="/">
                          CUSTOMERS
                        </NavLink>
                      </p>
                    </li>

                    <li className="">
                      <FontAwesomeIcon icon={faUserGroup} />
                      <NavLink activeClassName="active" to="/users">
                        Users
                      </NavLink>
                    </li>

                    <li className="">
                      <FontAwesomeIcon icon={faUsers} />
                      <Link>Guarantors</Link>
                    </li>
                    <li className="">
                      <FontAwesomeIcon icon={faSackDollar} />
                      <Link>Loans</Link>
                    </li>
                    <li className="">
                      <FontAwesomeIcon
                        icon={faHandshake}
                        className="fontawesome-list"
                      />
                      <Link>Decision Models</Link>
                    </li>
                    <li className="">
                      <FontAwesomeIcon
                        icon={faPiggyBank}
                        className="fontawesome-list"
                      />
                      <Link>Savings</Link>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faHandHoldingDollar}
                        className="fontawesome-list"
                      />
                      <Link>Loan Requests</Link>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faUserCheck}
                        className="fontawesome-list"
                      />

                      <Link>Whitelist</Link>
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faUserXmark}
                        className="fontawesome-list"
                      />

                      <Link>Karma</Link>
                    </li>
                    <p>
                      <NavLink activeClassName="disabled" to="/">
                        BUSINESSES
                      </NavLink>
                    </p>
                    <li>
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className="fontawesome-list"
                      />

                      <Link>Organization</Link>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faHandHoldingDollar} />
                      <Link>Loan Products</Link>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLandmark} />
                      <Link>Savings Products</Link>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCoins} />
                      <Link>Fees and Charges</Link>
                    </li>

                    <li>
                      <FontAwesomeIcon icon={faMobileScreen} />
                      <Link>Transactions</Link>
                    </li>

                    <li>
                      <FontAwesomeIcon icon={faFan} />
                      <Link>Services</Link>
                    </li>

                    <li>
                      <FontAwesomeIcon icon={faUserGear} />
                      <Link>Service Account</Link>
                    </li>

                    <li>
                      <FontAwesomeIcon icon={faScroll} />
                      <Link>Settlement</Link>
                    </li>

                    <li>
                      <FontAwesomeIcon icon={faChartColumn} />
                      <Link>Reports</Link>
                    </li>

                    <p>
                      <NavLink activeClassName="disabled" to="/">
                        SETTINGS
                      </NavLink>
                    </p>

                    <li>
                      <FontAwesomeIcon icon={faSliders} />
                      <Link>Preferences</Link>
                    </li>

                    <li>
                      <FontAwesomeIcon icon={faCloud} />
                      <Link>Fees and Pricing</Link>
                    </li>

                    <li>
                      <FontAwesomeIcon icon={faClipboard} />
                      <Link>Audit Logs</Link>
                    </li>

                    <li>
                      <FontAwesomeIcon icon={faArrowsSpin} />
                      <Link>System Messages</Link>
                    </li>

                    <br />
                    <br />

                    <li>
                      <FontAwesomeIcon icon={faArrowsSpin} />
                      <button
                        id="btt"
                        className="btn btn-Default"
                        onClick={Logout}
                      >
                        Logout
                      </button>
                    </li>

                    <li>
                      <p>v1.2.0</p>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
