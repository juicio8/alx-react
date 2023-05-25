import React from "react";
import PropTypes from "prop-types";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { getLatestNotification } from "../utils/utils";
import "./App.css";
import CourseList from "../CourseList/CourseList";

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
  render() {
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
          <div className="App-body">
            {!this.props.isLoggedIn && <Login />}
            {this.props.isLoggedIn && (
              <CourseList
                listCourses={listCourses}
                listNotifications={notification}
              />
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
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
