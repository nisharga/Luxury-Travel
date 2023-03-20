import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../../../Assets/profile.jpg";
const NavRight = () => {
  const profileimg = {
    width: "60px",
    height: "60px",
    borderRadius: "50px",
    cursor: "pointer",
  };
  return (
    <>
      <>
        <Link to="/login">Login</Link>
        <Link to="/signup" className="signup_btn">
          Sign Up
        </Link>
      </>
      {/* <div>
        <img src={ProfileImg} alt="profile" style={profileimg} />
      </div> */}
    </>
  );
};

export default NavRight;
