import React from "react";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";

export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
      <button
        aria-label="Close"
        style={{
          position: "absolute",
          right: 10,
          top: 10,
          background: "transparent",
          border: "none",
        }}
        onClick={() => console.log("Close button has been Clicked")}
      >
        {/* <img src={close_icon} alt="close-icon" width="20px" /> */}
      </button>
    </div>
  );
}
// add a button element with inline styling (without using the CSS file):
// show button on right side of notifications box
// aria-label is Close
// when user clicks on the button it logs to the console Close button has been clicked
