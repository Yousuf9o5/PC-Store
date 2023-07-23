// import React from "react";
import { NavLink } from "react-router-dom";
import lightFace from "../../assets/icons/Facebook.svg";
import lightInsta from "../../assets/icons/Insta.svg";
import lightTele from "../../assets/icons/Telegram.svg";
import lightWhat from "../../assets/icons/Whats.svg";

function Footer() {
  return (
    <div className="app-footer py-5">
      <div className="container d-flex align-items-center justify-content-between w-100">
        <div className="logo-side">
          <h1 className="mb-5 logo">Logo</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            soluta, blanditiis magnam nobis fugit atque.
          </p>
        </div>
        <div className="navigations-side">
          <div className="links d-flex align-items-center justify-content-between mb-5 gap-5">
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
          <div className="social d-flex align-items-center justify-content-center gap-4">
            <a href="#">
              <img src={lightFace} alt="facebook" />
            </a>
            <a href="#">
              <img src={lightInsta} alt="instagram" />
            </a>
            <a href="#">
              <img src={lightTele} alt="telegram" />
            </a>
            <a href="#">
              <img src={lightWhat} alt="whats" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
