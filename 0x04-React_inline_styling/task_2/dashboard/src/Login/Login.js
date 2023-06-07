import React, { useState, useRef } from "react";
import { StyleSheet, css } from "aphrodite";

const Login = () => {
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
  return (
    <>
      <p>Login to access the full dashboard</p>

      <form className={css(styles.form)}>
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
          onChange={(e) => handleFormChange(e)}
          required
        />
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
          onChange={(e) => handleFormChange(e)}
          required
        />
        <button className={css(styles.button)}>OK</button>
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
  },
});
export default Login;
