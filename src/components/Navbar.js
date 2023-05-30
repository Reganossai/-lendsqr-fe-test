import React, { useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import user from "../assets/user.png";
import image from "../assets/image.png";
import Search from "./Search";

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
      <nav className="navbar navbar-expand-lg">
        <div className="logo-div">
          <Link to="/">
            <img src={image} className="logoo" alt="logoo" />
          </Link>
        </div>
        <Search />
        <div id="navbarSupportedContent">
          <ul>
            <li className="nav-link">
              <Link>Docs</Link>
            </li>
            <li className="nav-link">
              <Link>
                <FontAwesomeIcon icon={faBell} />
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
                    <FontAwesomeIcon icon={faUser} className="p-pp"/>
                    {profileName}
                  </span>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <ul>
                    <li className="dropdown-item ">
                      <button id="bt" className="btn btn-primary" onClick={Logout}>
                        logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {nav ? (
          <div id="navbarSupportedContentMobile">
            <ul>
              <li className="nav-link">
                <Link exact ClassName="activee" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-link">
                <Link ClassName="activee" to="/arrivals">
                  Arrivals
                </Link>
              </li>

              <li className="nav-link">
                <Link ClassName="activee" to="/departures">
                  Departures
                </Link>
              </li>

              <li className="nav-link">
                <button className="btn btn-info" onClick={Logout}>
                  logout
                </button>
              </li>
            </ul>
          </div>
        ) : null}

        <div onClick={handleNav} className="zaracho">
          {nav ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
