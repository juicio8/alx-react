import React from "react";
import BodySection from "./BodySection";
// import "./BodySectionWithMarginBottom.css";
import { StyleSheet, css } from "aphrodite";

const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection {...props} />
    </div>
  );
};
const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "40px",
  },
});

export default BodySectionWithMarginBottom;
