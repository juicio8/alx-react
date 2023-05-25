import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import close from "../../assets/close-icon.svg";
import "./Notifications.css";

export default function Notifications({ displayDrawer, listNotifications }) {
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
            {listNotifications ? (
              listNotifications.map((list) => (
                <NotificationItem
                  key={list.id}
                  type={list.type}
                  html={list.html ? list.html : null}
                  value={list.value}
                />
              ))
            ) : (
              <li>No new Notification for now</li>
            )}
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
const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string.value,
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
  displayDrawer: true,
};
