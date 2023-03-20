import React from "react";
import { Link } from "react-router-dom";

const FooterCompany = () => {
  return (
    <div>
      <h2>Company</h2>
      <Link to="/">Event</Link>
      <Link to="/">Blog</Link>
      <Link to="/">FAQ</Link>
      <Link to="/">Join Us</Link>
    </div>
  );
};

export default FooterCompany;
