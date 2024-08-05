import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <a className="navbar-brand" href="#">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home<span className="sr-only"></span>
            </a>
          </li>
          <li className="na~v-item">
            {/* <Link className="nav-link" to="/about.js">
              {props.AboutText}
            </Link> */}
          </li>
        </ul>
      </div>

      {/* buttom 1 */}
      <div
        className={`form-check form-switch mx-3 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.toggleMode}
        />
        <label className="form-check-labelt" htmlFor="flexSwitchCheckDefault">
          enable DarkMode
        </label>
      </div>

      {/* buttom 2 */}
      <div
        className={`form-check form-switch text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <input
          className="form-check-input bg-green"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={props.greenbccolor}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          enable Pinkmode
        </label>
      </div>
    </nav>
  );
}

Navbar.prototype = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "title",
  AboutText: "About Us",
};
