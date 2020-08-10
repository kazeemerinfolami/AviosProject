import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Submit from "./Submit";
//import Contact from "./Contact";
import { NavLink } from "react-router-dom";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <Router>
    <div className="container">
      <nav className="navbar navbar-default">
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
              <span className="sr-only toggle-navigation"></span>
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
              <li className="active">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/submit">Submit Product</NavLink>
              </li>
              {/* <li>
                <NavLink to="/contact">Contact</NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/submit" component={Submit} history={history} />
      {/* <Route path="/contact" component={Contact} /> */}
    </div>
  </Router>,

  document.getElementById("root")
);

// <React.StrictMode>
//   <App />
// </React.StrictMode>,
