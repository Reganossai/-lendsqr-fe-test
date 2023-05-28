import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sidebar">
      <nav className="navbar navbar-expand-lg">
        <div id="sidebarContent">
          <ul>
            <li className="nav-link">
              <NavLink activeClassName="disabled" to="/">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink activeClassName="active" to="/users">
                Users
              </NavLink>
            </li>
            <li className="nav-link">
              <Link>Guarantors</Link>
            </li>
            <li className="nav-link">
              <Link>Loans</Link>
            </li>
            <li className="nav-link">
              <Link>Decision Models</Link>
            </li>
            <li className="nav-link">
              <Link>Savings</Link>
            </li>
            <li className="nav-link">
              <Link>Loan Requests</Link>
            </li>
            <li className="nav-link">
              <Link>Whitelist</Link>
            </li>
            <li className="nav-link">
              <Link>Karma</Link>
            </li>
            <li className="nav-link">
              <Link>Organization</Link>
            </li>
            <li className="nav-link">
              <Link>Loan Products</Link>
            </li>
            <li className="nav-link">
              <Link>Savings Products</Link>
            </li>
            <li className="nav-link">
              <Link>Fees and Charges</Link>
            </li>

            <li className="nav-link">
              <Link>Transactions</Link>
            </li>

            <li className="nav-link">
              <Link>Services</Link>
            </li>
          </ul>
        </div>
        {nav ? (
          <div id="navbarSupportedContentMobile">
            <ul>
              <li className="nav-link">
                <NavLink activeClassName="disabled" to="/">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Users
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Guarantors
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Loans
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Decision Models
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Savings
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Loan Requests
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Whitelist
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Karma
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Organization
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Loan Products
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Savings Products
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Fees and Charges
                </NavLink>
              </li>

              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Transactions
                </NavLink>
              </li>

              <li className="nav-link">
                <NavLink activeClassName="active" to="/users">
                  Services
                </NavLink>
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

export default Sidebar;
