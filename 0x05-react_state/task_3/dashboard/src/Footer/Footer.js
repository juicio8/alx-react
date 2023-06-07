import React, { useContext } from "react";
import { AppContext } from "../App/AppContext";
import { getFooterCopy, getFullYear } from "../utils/utils.js";
import "./Footer.css";

const Footer = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
      {user?.isLoggedIn && (
        <p className="contact">
          <a href="#">Contact Us</a>
        </p>
      )}
    </div>
  );
};

export default Footer;
