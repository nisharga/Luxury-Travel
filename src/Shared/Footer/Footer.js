import React from "react";
import FooterHeader from "./FooterHeader/FooterHeader";
import FooterAddress from "./FooterParts/FooterAddress";
import FooterCompany from "./FooterParts/FooterCompany";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="max-w-[90%] mx-auto py-3">
        <FooterHeader />
      </div>
      <div className="">
        <FooterAddress />
        <FooterCompany />
      </div>
    </div>
  );
};

export default Footer;
