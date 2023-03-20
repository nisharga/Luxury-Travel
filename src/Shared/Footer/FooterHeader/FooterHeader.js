import React from "react";
import { Link } from "react-router-dom";
import playstore from "../../../Assets/Footer/play_store.png";
import lineimage from "../../../Assets/Footer/Line.png";

import phoneimg from "../../../Assets/Footer/phone.png";
import "./FooterHeader.css";
const FooterHeader = () => {
  return (
    <div className="footer_header bg-black rounded-md">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-12 gap-4 align-center">
          <div className="app sm:col-span-5">
            <h3>Download Our App</h3>
            <p className="py-3">The best travel in the world</p>
            <Link to="https://play.google.com/store/apps/?hl=en&gl=US">
              <img src={playstore} alt="playstore" />
            </Link>
          </div>
          <div className="line sm:col-span-4">
            <img src={lineimage} alt="lineimage" />
          </div>
          <div className="phone -mt-16 sm:col-span-3">
            <img src={phoneimg} alt="phoneimg" className="w[60%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHeader;
