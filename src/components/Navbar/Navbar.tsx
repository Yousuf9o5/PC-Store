// import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="app-navbar">
      <div className="container nav-container">
        <div className="logo-container">
          <h1>Logo</h1>
        </div>

        <div className="navigations gap-5">
          <NavLink to={"/"} className={"nav-link"}>
            Store
          </NavLink>
          <NavLink to={"/"} className={"nav-link"}>
            Contact
          </NavLink>
          <NavLink to={"/"} className={"nav-link"}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
