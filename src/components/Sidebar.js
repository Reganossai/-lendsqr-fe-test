import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faScroll, faBriefcase, faCloud, faSliders, faHouse, faUserGroup, faXmark, faFan, faUsers, faSackDollar, faHandshake, faPiggyBank, faHandHoldingDollar, faUserXmark, faUserCheck, faLandmark, faCoins, faMobileScreen, faUserGear, faChartColumn, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sidebar">
      <nav>
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
              <li className="nav-link">
                <FontAwesomeIcon icon={faUserGroup}/>
                <NavLink activeClassName="active" to="/users">
                  Users
                </NavLink>
              </li>
            </div>
            <li className="nav-link">
              
            <FontAwesomeIcon icon={faUsers}/>
              <Link>Guarantors</Link>
            </li>
            <li className="nav-link">
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
