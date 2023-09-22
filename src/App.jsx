import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import DogsGrid from "./Components/DogsGrid";
import AltApp from "./Components/Youtube/AltApp";

function App() {
  const HOME = "Home",
    DOGSGRID = "DogsGrid";

  const [view, setView] = useState(0);

  let currentView = null;

  switch (view) {
    case HOME:
      currentView = <Home />;
      break;

    case DOGSGRID:
      currentView = <DogsGrid />;
      break;

    default:
      currentView = <Home />;
  }

  return (
    <div className="main">
      <div className="content">{currentView}</div>

      <div className="radio-menu">
        <input
          type="radio"
          id="radio1"
          name="radios"
          className="btn-check"
          onClick={() => setView(HOME)}
        />
        <label for="radio1">Home</label>
        <input
          type="radio"
          id="radio2"
          name="radios"
          className="btn-check"
          onClick={() => setView(DOGSGRID)}
        />
        <label for="radio2">Dogs</label>
      </div>
    </div>
  );
}

export default App;
