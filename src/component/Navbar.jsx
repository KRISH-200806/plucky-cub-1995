import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "bootstrap-icons/font/bootstrap-icons.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dark from "../page/Dark";
import { searchContex } from "../Contex/Searchcontext";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { searchfun } = useContext(searchContex);

  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="carousel">
              <marquee behavior="" direction="left" className="text-center pt-1 text-light">
                The 2024 Holiday Gift Guide Is Here - SHOP NOW
              </marquee>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src="logo.avif" alt="Logo" className="img-fluid logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              onClick={handleShow}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="m-auto navbarSeach d-none d-lg-block">
                <input
                  onChange={(e) => searchfun(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  name="q"
                />
              </div>
              <ul className="navbar-nav ms-auto align-items-center d-none d-lg-flex">
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
                    <i className="bi bi-cart3 nav-icon"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Dark />
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Navbar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="navbarSeach mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                name="q"
              />
            </div>
            <ul className="navbar-nav">
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
                  <i className="bi bi-cart3 nav-icon"></i>
                </Link>
              </li>
            </ul>
            <section>
              <div className="container">
                <div className="row">.</div>
              </div>
            </section>
          </Offcanvas.Body>
        </Offcanvas>
      </section>
      <section className="nav">
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 d-none d-lg-block">
              <ul className="d-flex justify-content-center align-items-center list-unstyled">
                <li className="links-main col-1">
                  <Link to=" " className="nav-link link-dark">
                    NEW
                  </Link>
                </li>
                <li className="links-main col-1">
                  <Link to=" " className="nav-link link-dark ">
                    MESSAGE
                  </Link>
                  <div className="vice-link-main list_hov">
                    <div className="row">
                      <div className="col-6 d-flex text-dark">
                        <div className="nav-menu1">
                          <ul>
                            <li>
                              <Link to="/card" className="h5">
                                All MESSAGE
                              </Link>
                            </li>
                            <li>
                              <Link to=" ">Face/Eye Massagers</Link>
                            </li>
                            <li>
                              <Link to=" ">Hand Massagers</Link>
                            </li>
                            <li>
                              <Link to=" ">Intimate Massagers</Link>
                            </li>
                            <li>
                              <Link to=" ">Massage Chairs</Link>
                            </li>
                            <li>
                              <Link to=" ">Massage Guns</Link>
                            </li>
                            <li>
                              <Link to=" ">Neck and Back Massagers</Link>
                            </li>
                            <li>
                              <Link to=" ">Foot Massagers</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="nav-menu2">
                          <ul>
                            <li>
                              <Link to=" " className="h5">
                                FEATURED
                              </Link>
                            </li>
                            <li>
                              <Link to=" ">Osaki Massage Chairs</Link>
                            </li>
                            <li>
                              <Link to=" ">Quzy Shoulder Massager</Link>
                            </li>
                            <li>
                              <Link to=" ">REI Foot Massager</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="col-5">
                          <img
                            src="https://www.brookstone.com/cdn/shop/products/reflex5s_in_room_-_1200_x_1200_750x.jpg?v=1667253238"
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="links-main col-1">
                  <Link to=" " className="nav-link link-dark ">
                    SLEEP
                  </Link>
                  <div className="vice-link-main3">
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6">
                            <ul className="pt-3">
                              <li>
                                <Link to=" " className="h4">
                                  ALL SLEEP
                                </Link>
                              </li>
                              <li>Alarm Clocks & Sound Machines</li>
                              <li>Bedding</li>
                              <li>Intimate Pillows</li>
                              <li>Pillows</li>
                              <li>Air Quality</li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul>
                              <li>
                                <Link to=" " className="h4">
                                  FEATURED
                                </Link>
                              </li>
                              <li>Loftie Digital Clock</li>
                              <li>Yana Sleep Pillow</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <img
                          src="https://www.brookstone.com/cdn/shop/products/Pillar_-_with_box_750x.jpg?v=1684413672"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="links-main col-1">
                  <Link to=" " className="nav-link link-dark">
                    WELLNESS
                  </Link>
                  <div className="vice-link-main4">
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6">
                            <ul>
                              <li>
                                <Link to=" " className="h4">
                                  All WELLNESS
                                </Link>
                              </li>
                              <li>Cosmetic Care</li>
                              <li>Heating Pads</li>
                              <li>Intimate Massagers</li>
                              <li>Lighting</li>
                              <li>Pain Relief</li>
                              <li>Skin Care</li>
                              <li>Face Mask</li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul>
                              <li>
                                <Link to=" " className="h4">
                                  FEATURED
                                </Link>
                              </li>
                              <li>Serene House Diffusers</li>
                              <li>Theraface Pro Facial</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <img
                          src="https://www.brookstone.com/cdn/shop/products/Novo_xt_UC-7900_thumbs_for_Collection__hover_option_UC-7900_Novo_XT_3_Crimson.jpg?v=1677880802"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="links-main col-1">
                  <Link to=" " className="nav-link link-dark ">
                    HOME
                  </Link>
                  <div className="vice-link-main5">
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6">
                            <ul>
                              <li>
                                <Link to=" " className="h4">
                                  All HOME
                                </Link>
                              </li>
                              <li>Air Quality</li>
                              <li>Entertainment</li>
                              <li>Lighting</li>
                              <li>Pet Care</li>
                              <li>Security</li>
                              <li>Smart Home</li>
                              <li>Vacuum Cleaners</li>
                              <li>Weighted Blankets</li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul>
                              <li>
                                <Link to=" " className="h4">
                                  FEATURED
                                </Link>
                              </li>
                              <li>Canary Security Cameras</li>
                              <li>Orbit Weighted Blanket</li>
                              <li>Pet Life Smart Pet Door</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <img
                          src="https://www.brookstone.com/cdn/shop/products/CanaryPro4_750x.jpg?v=1684413661"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="links-main col-1">
                  <Link to=" " className="nav-link link-dark">
                    TECH
                  </Link>
                  <div className="vice-link-main6">
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6">
                            <ul>
                              <li>
                                <Link to=" " className="h4">
                                  All TECH
                                </Link>
                              </li>
                              <li>Headphones</li>
                              <li>Phone Chargers</li>
                              <li>Smart Home</li>
                              <li>Speakers</li>
                              <li>Tech Toys</li>
                              <li>Gadgets</li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul>
                              <li>
                                <Link to=" " className="h4">
                                  FEATURED
                                </Link>
                              </li>
                              <li>Gadget Discovery Club</li>
                              <li>Pet Life Smart Pet Door</li>
                              <li>Urbanista Headphones</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <img
                          src="https://www.brookstone.com/cdn/shop/products/61evPR6vXDL._AC_SL1500__750x.jpg?v=1684413672"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="links-main">
                  <Link to=" " className="nav-link link-dark">
                    OUTDOOR
                  </Link>
                  <div className="vice-link-main7">
                    <div className="row">
                      <div className="col-6">
                        <div className="row">
                          <div className="col-6">
                            <ul>
                              <li>
                                <Link to=" " className="h4">
                                  All OUTDOOR
                                </Link>
                              </li>
                              <li>Backyard Fun</li>
                              <li>BBQ</li>
                              <li>Fire Pits</li>
                              <li>Garden Gadgets</li>
                              <li>Grilling</li>
                              <li>Outdoor Games</li>
                              <li>Outdoor Speakers</li>
                            </ul>
                          </div>
                          <div className="col-6">
                            <ul>
                              <li>
                                <Link to=" " className="h4">
                                  FEATURED
                                </Link>
                              </li>
                              <li>GeoToy's Giant Inflatable Dome</li>
                              <li>Ooni Pizza Ovens</li>
                              <li>Solo Stove</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <img
                          src="https://www.brookstone.com/cdn/shop/products/362d259b_a703_4c8a_8b9a_b83d97a8f30b_1296x.jpg?v=1679412525"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </li>
                <li className="links-main col-1">
                  <Link to=" " className="nav-link link-dark">
                    GIFTS
                  </Link>
                </li>
                <li className="links-main col-1">
                  <Link to=" " className="nav-link link-dark">
                    SALE
                  </Link>
                </li>
              </ul>
            </div>
            <div className="d-lg-none">
              <ul className="list-unstyled">
                <li className="links-main">
                  <Link to=" " className="nav-link link-dark">
                    NEW
                  </Link>
                </li>
                <li className="links-main">
                  <Link to=" " className="nav-link link-dark">
                    MESSAGE
                  </Link>
                </li>
                <li className="links-main">
                  <Link to=" " className="nav-link link-dark">
                    SLEEP
                  </Link>
                </li>
                <li className="links-main">
                  <Link to=" " className="nav-link link-dark">
                    WELLNESS
                  </Link>
                </li>
                <li className="links-main">
                  <Link to=" " className="nav-link link-dark">
                    HOME
                  </Link>
                </li>
                <li className="links-main">
                  <Link to=" " className="nav-link link-dark">
                    TECH
                  </Link>
                </li>
                <li className="links-main">
                  <Link to=" " className="nav-link link-dark">
                    OUTDOOR
                  </Link>
                </li>
                <li className="links-main">
                  <Link to=" " className="nav-link link-dark">
                    GIFTS
                  </Link>
                </li>
                <li className="links-main">
                  <Link to=" " className="nav-link link-dark">
                    SALE
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
