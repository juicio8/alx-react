import React from "react";
import { PropTypes } from "prop-types";

class NotificationItem extends React.PureComponent {
  render() {
    const id = this.props.id;
    const li = this.props.html ? (
      <li
        data-notification-type={this.props.type}
        dangerouslySetInnerHTML={this.props.html}
        onClick={() => this.props.markAsRead(id)}
      ></li>
    ) : (
      <li
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
  markAsRead: PropTypes.func,
};
NotificationItem.defaultProps = {
  type: "default",
  value: "",
  id: 2,
  markAsRead: () => {},
};
