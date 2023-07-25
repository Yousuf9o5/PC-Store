// import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";

interface activeClass {
  isActive: Boolean;
}

function Navbar() {
  const activeLink = ({ isActive }: activeClass): string => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="app-navbar">
      <div className="container nav-container">
        <div className="logo-container">
          <NavLink to={"/"} className={"bg-transparent"}>
            <img src={logo} alt="logo" className="logo" />
          </NavLink>
        </div>

        <div className="navigations gap-5">
          <NavLink to={"/"} className={activeLink}>
            Store
          </NavLink>
          <NavLink to={"/a"} className={activeLink}>
            Contact
          </NavLink>
          <NavLink to={"/b"} className={activeLink}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
