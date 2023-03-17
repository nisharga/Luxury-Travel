import React from "react";
import NavDropIcon from "../../../Assets/Homepage/NavDropIcon/NavDropIcon";
import Navlink from "../../../Route/Navlink/Navlink";

const NavItemsPC = () => {
  return (
    <ul className="menu menu-horizontal px-1">
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

export default NavItemsPC;
