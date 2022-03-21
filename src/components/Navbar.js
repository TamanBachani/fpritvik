import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/navbar.css";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container-fluid">
        <div
          className="navbar-collapse order-lg-1 order-3 toToggle collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to="/services">
              services
            </Link>
            <Link className="nav-link" to="/support">
              support
            </Link>
          </div>
        </div>
        <a className="navbar-brand order-1 me-lg-0" href="/">
          FPRitvik
        </a>
        <button
          className="navbar-toggler order-2 collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse order-lg-3 order-4 toToggle collapse nav-right"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav ms-auto">
            <NavHashLink className="nav-link" to="/#about">
              about
            </NavHashLink>
            <NavHashLink to="/#contact" className="nav-link">
              contact
            </NavHashLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
