import React from "react";
import PropTypes from "prop-types";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { getLatestNotification } from "../utils/utils";
import "./App.css";
import CourseList from "../CourseList/CourseList";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";

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
        <Notifications />
        <div className="App">
          <Header />
          <div className="App-body">
            <BodySection title="News from the School">School</BodySection>
            {!this.props.isLoggedIn && (
              <BodySectionWithMarginBottom>
                <Login />
              </BodySectionWithMarginBottom>
            )}
            {this.props.isLoggedIn && (
              <BodySectionWithMarginBottom>
                <CourseList
                  listCourses={listCourses}
                  listNotifications={notification}
                />
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

export default App;
