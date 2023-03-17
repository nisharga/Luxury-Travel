import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../Assets/IconLogo/Logo.png";
const Logo = () => {
  const mystyle = {
    width: "100px",
    height: "56px",
  };
  return (
    <Link to="/">
      <img src={LogoImage} alt="Logo" style={mystyle} />
    </Link>
  );
};

export default Logo;
