import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import { StyleSheet, css } from "aphrodite";

import close from "../../assets/close-icon.svg";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications !== this.props.listNotifications;
  }

  render() {
    // const checkHover = () => {
    //   return this.props.listNotifications ? true : false;
    // };
    // const noticationsHover = css(
    //   checkHover() ? styles.yourNotifications : styles.hoverNotifications
    // );
    return (
      <>
        <div
          // className={noticationsHover}
          style={{
            textAlign: "right",
            margin: "1rem ",
            marginRight: "20px",
          }}
        >
          Your notifications
        </div>
        {this.props.displayDrawer && (
          <div className={css(styles.notifications)}>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.notificationsUl)}>
              {this.props.listNotifications ? (
                this.props.listNotifications.map((list) => (
                  <NotificationItem
                    key={list.id}
                    id={list.id}
                    markAsRead={this.markAsRead}
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
}
const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
  displayDrawer: false,
};
const opacityKeyframes = {
  "0%": {
    opacity: "0.5",
  },

  "100%": {
    opacity: "1",
  },
};
const moveKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(50px)",
  },
  "100%": {
    transform: "translateY(-50px)",
  },
};
const styles = StyleSheet.create({
  notifications: {
    position: "absolute",
    backgroundColor: "white",
    right: "20px",
    padding: "1rem 1rem",
    minWidth: "400px",
    border: "1.5px dashed var(--primary)",
    "@media (max-width: 900px)": {
      position: "fixed",
      top: "0",
      padding: "1rem 0",
      width: "90vw",
      margin: "0 auto",
      height: "100vh",
      border: "1px solid grey",
    },
  },
  yourNotifications: {
    animationName: [opacityKeyframes, moveKeyframes],
    animationDuration: "3s",
    animationIterationCount: "infinite",
  },
  hoverNotifications: {
    hover: {
      animationName: [opacityKeyframes, moveKeyframes],
      animationDuration: "3s",
      animationIterationCount: "infinite",
    },
  },
  notificationsUl: {
    marginTop: "1rem",
    marginLeft: "2.5rem",
    "@media (max-width: 900px)": {
      marginLeft: "0",
    },
  },
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});
