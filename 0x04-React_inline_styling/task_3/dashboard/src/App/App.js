import React from "react";
import PropTypes from "prop-types";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { getLatestNotification } from "../utils/utils";
import { StyleSheet, css } from "aphrodite";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";

const html = getLatestNotification();
const notification = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  {
    id: 3,
    type: "urgent",
    value: "New resume available",
    html: { __html: html },
  },
];
const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  {
    id: 3,
    name: "React",
    credit: 40,
  },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown(event) {
    // const { logout } = this.props;
    if (event.key === "h" && event.ctrlKey) {
      alert("Logging you out");
      this.props.logout();
    }
  }
  render() {
    return (
      <>
        <Notifications listNotifications={notification} />
        <div className={css(styles.App)}>
          <Header />
          <div className={css(styles.AppBody)}>
            <BodySection title="News from the School">School</BodySection>
            {!this.props.isLoggedIn && (
              <BodySectionWithMarginBottom>
                <Login />
              </BodySectionWithMarginBottom>
            )}
            {this.props.isLoggedIn && (
              <BodySectionWithMarginBottom>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logout: () => {},
};
const styles = StyleSheet.create({
  App: {
    padding: "0 1rem",
  },

  AppBody: {
    marginTop: "4rem",
    paddingLeft: "4rem",
    height: "50vh",
  },
});

export default App;
