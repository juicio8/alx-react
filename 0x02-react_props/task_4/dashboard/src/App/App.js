import React from "react";
import PropTypes from "prop-types";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./App.css";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          {!isLoggedIn && <Login />}
          {isLoggedIn && <CourseList />}
        </div>
        <Footer />
      </div>
    </>
  );
}
App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
