import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

function App(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
            Avios
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <NavLink activeClassName="activeNav" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="activeNav" to="/submit">
                  Add a Product
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* {props.children} */}
    </div>
  );
}

export default App;
