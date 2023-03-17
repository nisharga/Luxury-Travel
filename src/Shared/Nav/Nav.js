import React from "react";
import { Link } from "react-router-dom";
import NavResponsiveIcon from "../../Assets/Homepage/NavDropIcon/NavResponsiveIcon";
import Logo from "../Logo/Logo";
import NavItemsMobile from "./NavItemsMobile/NavItemsMobile";
import NavItemsPC from "./NavItemsPC/NavItemsPC";

const Nav = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="navbar bg-base-600">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <NavResponsiveIcon />
            </label>
            <NavItemsMobile />
          </div>
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavItemsPC />
        </div>
        <div className="navbar-end">
          <Link to="/login">Login</Link>
          <Link to="/signup" className="signup_btn">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
