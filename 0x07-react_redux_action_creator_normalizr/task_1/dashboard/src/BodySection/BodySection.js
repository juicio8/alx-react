import React from "react";

const BodySection = (props) => {
  return (
    <div className="bodySection">
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
};

export default BodySection;
