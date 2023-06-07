import React from "react";

const BodySection = (props) => {
  return (
    <div className="bodySection">
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  );
};

export default BodySection;
