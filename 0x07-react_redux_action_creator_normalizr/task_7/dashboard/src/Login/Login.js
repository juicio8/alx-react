import React, { useState, useRef } from "react";
import { StyleSheet, css } from "aphrodite";

const Login = (props) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const email = useRef(null);
  const password = useRef(null);
  function handleLabelClick(e) {
    if (e) {
      [e.target.htmlFor]?.current?.focus();
    }
  }

  function handleFormChange(e) {
    if (e) {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
    }
  }
  function handleEnableSubmit() {
    if (form.email.length && form.password.length) {
      return setEnableSubmit(true);
    }
    return setEnableSubmit(false);
  }
  function handleChangeEmail(e) {
    if (e) {
      setForm({ ...form, email: e.target.value });
    }
    handleEnableSubmit();
  }
  function handleChangePassword(e) {
    if (e) {
      setForm({ ...form, password: e.target.value });
    }
    handleEnableSubmit();
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    // setIsLoggedIn(true);
    props.logIn(form.email, form.password);
  }
  const enabled = enableSubmit ? false : true;
  return (
    <>
      <p>Login to access the full dashboard</p>

      <form className={css(styles.form)}>
        <span className={css(styles.input_container)}>
          <label htmlFor="email" onClick={(e) => handleLabelClick(e)}>
            Email:
          </label>
          <input
            className={css(styles.input)}
            ref={email}
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={(e) => handleChangeEmail(e)}
            required
          />
        </span>
        <span className={css(styles.input_container)}>
          <label htmlFor="password" onClick={(e) => handleLabelClick(e)}>
            Password:
          </label>
          <input
            className={css(styles.input)}
            ref={password}
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={(e) => handleChangePassword(e)}
            required
          />
        </span>
        <input
          type="submit"
          className={css(styles.button)}
          onClick={(e) => handleLoginSubmit(e)}
          disabled={enabled}
          value="OK"
        />
      </form>
    </>
  );
};
const styles = StyleSheet.create({
  form: {
    marginTop: "1rem",
  },
  formButton: {
    padding: "0.15rem 0.3rem",
    borderRadius: "3px",
    border: "1px solid",
    background: "#fefefe",
    /* box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1); */
  },
  input: {
    margin: "0 1rem",
    /* padding: 0.1rem; */
    "@media (max-width: 900px)": {
      border: "none",
    },
  },
  input_container: {
    "@media (max-width: 900px)": {
      display: "block",
    },
  },
});
export default Login;
