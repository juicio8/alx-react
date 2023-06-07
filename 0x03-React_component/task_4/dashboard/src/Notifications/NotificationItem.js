import React from "react";
import { PropTypes } from "prop-types";

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const id = this.props.id;
    const li = html ? (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => this.props.markAsRead(id)}
      ></li>
    ) : (
      <li
        data-notification-type={type}
        onClick={() => this.props.markAsRead(id)}
        dangerouslySetInnerHTML={html}
      >
        {value}
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
  markAsRead: PropTypes.func,
};
NotificationItem.defaultProps = {
  type: "default",
  value: "",
  id: 2,
  markAsRead: () => {},
};
