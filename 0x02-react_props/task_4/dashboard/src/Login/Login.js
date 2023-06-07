import React, { useState, useRef } from "react";

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

      <form>
        <label htmlFor="email" onClick={(e) => handleLabelClick(e)}>
          Email:
        </label>
        <input
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
          ref={password}
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={(e) => handleFormChange(e)}
          required
        />
        <button>OK</button>
      </form>
    </>
  );
};

export default Login;
