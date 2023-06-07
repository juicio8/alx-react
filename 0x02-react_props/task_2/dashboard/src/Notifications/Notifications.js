import React from "react";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import "@testing-library/jest-dom";
import "./Notifications.css";
import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });

const notification = [
  { type: "default", value: "New course available" },
  { type: "urgent", value: "New resume available" },
  {
    type: "urgent",
    value: "New resume available",
    html: getLatestNotification(),
  },
];
export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        {notification.map((list, index) => (
          <NotificationItem
            key={index}
            type={list.type}
            html={list.html ? list.html : false}
            value={list.value}
          />
        ))}

        {/* <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li> */}
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
