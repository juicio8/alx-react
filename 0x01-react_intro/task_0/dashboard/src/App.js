import "./App.css";
import logo from "./logo.jpg";
// a header div with a class named App-header containing the Holberton logo and a h1 with the text School dashboard
// a body div with a class named App-body containing at least one paragraph with the text Login to access the full dashboard
// a footer div with a class named App-footer containing at least one paragraph with the text Copyright 2020 - holberton School

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
