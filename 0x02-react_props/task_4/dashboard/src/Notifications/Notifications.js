import React from "react";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import close from "../../assets/close-icon.svg";
import "./Notifications.css";

const html = getLatestNotification();
const notification = [
  { type: "default", value: "New course available" },
  { type: "urgent", value: "New resume available" },
  {
    type: "urgent",
    value: "New resume available",
    html: { __html: html },
  },
];
export default function Notifications({ displayDrawer }) {
  return (
    <>
      <div
        className="menuItem"
        style={{
          textAlign: "right",
          margin: "1rem ",
          marginRight: "20px",
        }}
      >
        Your notifications
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <ul>
            {notification.map((list, index) => (
              <NotificationItem
                key={index}
                type={list.type}
                html={list.html ? list.html : null}
                value={list.value}
              />
            ))}
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
            <img src={close} alt="close-icon" width="15px" />
          </button>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};
Notifications.defaultProps = {
  displayDrawer: true,
};
