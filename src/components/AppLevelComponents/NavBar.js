import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav class="menu">
        <ul>         
          <li class="icon-dashboard">
            <NavLink
            exact
            to="/graph"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
            >
              <span>Graph</span>
            </NavLink>
          </li>

          <li class="icon-users">
           
            <NavLink
            exact
            to="/home"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
            >
              <span>Home</span>
            </NavLink>
          </li>
          
          
          <li className="icon-settings">
            <NavLink
            exact
            to="/"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
            >
              <span>Projects</span>
            </NavLink>
          </li>
        </ul>
    </nav>
    </>
  );
}

export default NavBar;
