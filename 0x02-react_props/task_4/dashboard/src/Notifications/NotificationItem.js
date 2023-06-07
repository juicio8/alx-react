import React from "react";
import { PropTypes } from "prop-types";

const NotificationItem = ({ type, html, value }) => {
  const li = html ? (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  ) : (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  );
  return li;
};

export default NotificationItem;

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
};
NotificationItem.defaultProps = {
  type: "default",
  value: "",
};
