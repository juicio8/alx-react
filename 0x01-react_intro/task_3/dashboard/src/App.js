import { useRef, useState } from "react";
import "./App.css";
import logo from "./logo.jpg";
import { getFooterCopy, getFullYear } from "./utils.js";
function App() {
  const [form, setForm] = useState({ email: "", password: "" });

  const email = useRef(null);
  const password = useRef(null);
  function handleLabelClick(e) {
    [e.target.htmlFor].current.focus();
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
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
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;
