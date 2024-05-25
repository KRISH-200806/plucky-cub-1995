import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="carousel"></div>
          </div>
        </div>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="logo.avif" alt="Logo" className="img-fluid logo" />
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
              <div className="search-bar m-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  name="q"
                />
              </div>
            </div>
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  <i className="bi bi-person"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  <i className="bi bi-heart"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="bi bi-cart3"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
          </section>
     </div>     
    );
}        
export default Navbar;      