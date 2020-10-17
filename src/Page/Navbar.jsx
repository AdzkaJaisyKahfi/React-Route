import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/corona">
                  Data Corona
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <img
          className="mr-2"
          src="https://www.flaticon.com/premium-icon/icons/svg/373/373582.svg"
          width="40"
          alt=""
        />
      </nav>
      <div className="mt-3">{children}</div>
    </React.Fragment>
  );
};

export default Navbar;
