import React from "react";
import PropTypes from "prop-types";
import react, { useState } from "react";
export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode === 'dark'?'light':'dark'}`} href="">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link text-${props.mode === 'dark'?'light':'dark'}`} aria-current="page" href="">
                {props.t1}
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${props.mode === 'dark'?'light':'dark'}`}href="">
                {props.t2}
              </a>
            </li>

            <li className="nav-item">
              <a className={`nav-link text-${props.mode === 'dark'?'light':'dark'}`} aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
// NavBar.PropTypes = {
//     title : PropTypes.string,
//     t1 : PropTypes.string

// }
NavBar.defaultProps = {
  title: "MY Title",
  t1: "Home",
  t2: "About Text",
};
