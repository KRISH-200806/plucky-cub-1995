import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "bootstrap-icons/font/bootstrap-icons.css";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <div className="" id="navbarNav">
              <div className="m-auto navbarSeach">
                <input
                  type="text"
                  className="ps-3 pt-2 pb-2 pe-5 w-100"
                  placeholder="Search"
                  name="q"
                />
              </div>
            </div>
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/auth">
                  <i className="bi bi-person nav-menu-icon"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  <i className="bi bi-heart nav-menu-icon"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                 
                    <i
                      className="bi bi-cart3 nav-icon"
                      onClick={handleShow}
                    ></i>
                

                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      Some text as placeholder. In real life you can have the
                      elements you have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                  </Offcanvas>
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
