import React from "react";
import { PropTypes } from "prop-types";

import { StyleSheet, css } from "aphrodite";

class NotificationItem extends React.PureComponent {
  render() {
    const isDefault = () => (this.props.type === "default" ? true : false);
    console.log(isDefault());
    const className = css(isDefault() ? styles.default : styles.urgent);
    const id = this.props.id;
    const li = this.props.html ? (
      <li
        className={className}
        data-notification-type={this.props.type}
        dangerouslySetInnerHTML={this.props.html}
        onClick={() => this.props.markAsRead(id)}
      ></li>
    ) : (
      <li
        className={css(isDefault() ? styles.default : styles.urgent)}
        data-notification-type={this.props.type}
        onClick={() => this.props.markAsRead(id)}
        dangerouslySetInnerHTML={this.props.html}
      >
        {this.props.value}
      </li>
    );
    return li;
  }
}

export default NotificationItem;

NotificationItem.propTypes = {
  id: PropTypes.number,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  // markAsRead: PropTypes.func,
};
NotificationItem.defaultProps = {
  type: "default",
  value: "",
  id: 2,
  markAsRead: () => {},
};
const styles = StyleSheet.create({
  default: {
    color: "blue",
    "@media (max-width: 900px)": {
      padding: "1rem",
      fontSize: "1rem",
      listStyleType: "none",
      borderBottom: "2px solid gray",
    },
  },
  urgent: {
    color: "red",
    "@media (max-width: 900px)": {
      padding: "1rem",
      listStyleType: "none",
      fontSize: "1rem",
      borderBottom: "2px solid gray",
    },
  },
});
