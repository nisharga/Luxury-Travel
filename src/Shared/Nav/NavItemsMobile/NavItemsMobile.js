import React from "react";
import NavDropIcon from "../../../Assets/Homepage/NavDropIcon/NavDropIcon";
import Navlink from "../../../Route/Navlink/Navlink";

const NavItemsMobile = () => {
  return (
    <ul
      tabIndex={0}
      className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <Navlink to="/nk">Find Reservation</Navlink>
      </li>
      <li tabIndex={0}>
        <Navlink to="/package">
          Packages
          <NavDropIcon />
        </Navlink>
        <ul className="p-2">
          <li>
            <Navlink to="/package/1">Packages 1</Navlink>
          </li>
          <li>
            <Navlink to="/package/2">Packages 2</Navlink>
          </li>
        </ul>
      </li>
      <li tabIndex={0}>
        <Navlink to="/about">
          About Lakshadweep
          <NavDropIcon />
        </Navlink>
        <ul className="p-2">
          <li>
            <Navlink to="/about/1">About 1</Navlink>
          </li>
          <li>
            <Navlink to="/about/2">About 2</Navlink>
          </li>
        </ul>
      </li>
      <li>
        <Navlink to="/gol">Gol</Navlink>
      </li>
      <li>
        <Navlink to="/support">Support</Navlink>
      </li>
    </ul>
  );
};

export default NavItemsMobile;
