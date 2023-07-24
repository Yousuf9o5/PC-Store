// import React from "react";
import { NavLink } from "react-router-dom";
import lightFace from "../../assets/icons/Facebook.svg";
import lightInsta from "../../assets/icons/Insta.svg";
import lightTele from "../../assets/icons/Telegram.svg";
import lightWhat from "../../assets/icons/Whats.svg";
import logo from "../../assets/imgs/logo.png";

interface activeClass {
  isActive: boolean;
  isPending: boolean;
}

function Footer() {
  const isActiveLink = ({ isActive }: activeClass): string => {
    return isActive ? "nav-link active" : "nav-link";
  };

  return (
    <footer className="app-footer py-5">
      <div className="container w-100">
        <div className="row">
          <div className="col-12 center-between my-2 w-100">
            <div className="logo-container">
              <NavLink to="/" className={"bg-transparent"}>
                <img src={logo} alt="page-logo" className="page-logo" />
              </NavLink>
            </div>
            <div className="links">
              <NavLink to={"/"} className={isActiveLink}>
                Store
              </NavLink>
              <NavLink to={"/a"} className={isActiveLink}>
                Contact
              </NavLink>
              <NavLink to={"/b"} className={isActiveLink}>
                About
              </NavLink>
            </div>
          </div>
          <hr />
          <div className="col-12 center-between my-2 w-100">
            <p>
              Lorem ipsum dolor sit <span>amet consectetur</span> adipisicing
              elit Veniam
            </p>
            <div className="social center-around gap-3">
              <a href="#" className="social-link">
                <img src={lightFace} alt="facebook" />
              </a>
              <a href="#" className="social-link">
                <img src={lightInsta} alt="instagram" />
              </a>
              <a href="#" className="social-link">
                <img src={lightTele} alt="telegram" />
              </a>
              <a href="#" className="social-link">
                <img src={lightWhat} alt="whats" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
