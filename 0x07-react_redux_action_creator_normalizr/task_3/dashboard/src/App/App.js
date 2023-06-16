import React from "react";
import PropTypes from "prop-types";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { AppContext, values } from "./AppContext";
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
    this.state = {
      displayDrawer: false,
      user: values.defaultUser,
      logOut: () => {
        this.setState({ user: values.defaultUser });
      },
      listNotifications: notification,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  }
  markNotificationAsRead(id) {
    const notifications = this.state.listNotifications.filter(
      (x) => x.id != id
    );
    this.setState({
      listNotifications: notification,
    });
  }

  handleKeyDown(event) {
    // const { logout } = this.props;
    if (event.key === "h" && event.ctrlKey) {
      alert("Logging you out");
      this.props.logout();
    }
  }
  handleDisplayDrawer() {
    this.setState({ ...this.state, displayDrawer: true });
  }
  handleHideDrawer() {
    this.setState({ ...this.state, displayDrawer: false });
  }
  render() {
    return (
      <AppContext.Provider
        value={{ user: this.state.user, logOut: this.state.logOut }}
      >
        <Notifications
          listNotifications={this.state.listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.App)}>
          <Header />
          <div className={css(styles.AppBody)}>
            <BodySection title="News from the School">School</BodySection>
            {!this.state.user.isLoggedIn && (
              <BodySectionWithMarginBottom>
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            {this.state.user.isLoggedIn && (
              <BodySectionWithMarginBottom>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

App.contextType = AppContext;

App.propTypes = {};

App.defaultProps = {};
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
