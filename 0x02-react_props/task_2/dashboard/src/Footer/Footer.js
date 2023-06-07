import React from "react";
import { getFooterCopy, getFullYear } from "../utils/utils.js";
import "./Footer.css";

const Footer = () => {
  return (
    <p>
      Copyright {getFullYear()} - {getFooterCopy()}
    </p>
  );
};

export default Footer;
