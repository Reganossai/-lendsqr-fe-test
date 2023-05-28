import React, { useCallback} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom";
import { useState } from "react";
import image from "../assets/image.png";
import Search from "./Search";

const Navbar = ({handleLogout}) => {
  const [nav, setNav] = useState(false);
 

  const handleNav = () => {
    setNav(!nav);
  };

  const Logout = useCallback(() => {
    handleLogout()
  },[handleLogout])



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
            <Link >
              Docs
            </Link>
          </li>
          <li className="nav-link">
            <Link>
              <FontAwesomeIcon icon={faBell}/>
            </Link>
          </li>

          <li className="nav-link">
            <Link>
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
