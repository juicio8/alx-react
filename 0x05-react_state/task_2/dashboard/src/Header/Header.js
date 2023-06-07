/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AppContext } from "../App/AppContext";
import logo from "../../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

class Header extends React.Component {
  render() {
    const { user, logOut } = this.context;
    console.log(user);

    return (
      <>
        {user?.isLoggedIn && (
          <section id="logoutSection">
            Welcome {user.email} (
            <a href="#" className="logout" onClick={logOut}>
              logout
            </a>
            )
          </section>
        )}
        <div className={css(styles.AppHeader)}>
          <img
            src={logo}
            alt="holberton logo"
            className={css(styles.AppHeaderImg)}
          />
          <h1 className={css(styles.AppHeaderH1)}>School dashboard</h1>
        </div>
      </>
    );
  }
}
Header.contextType = AppContext;
const styles = StyleSheet.create({
  AppHeader: {
    display: "flex",
    alignItems: "center",
    /* margin: 0 1rem; */
    padding: "0.5rem",
    borderBottom: "3px solid var(--primary)",
  },
  AppHeaderImg: {
    maxHeight: "200px",
    maxWidth: "200px",
  },

  AppHeaderH1: {
    color: "var(--primary)",
  },
});

export default Header;
