import React from "react";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-7 desk-image">
              <img src="desck-1.avif" alt="" className="img-fluid" />
            </div>
            <div className="col-5">
              <img src="desck-2.avif" alt="" className="img-fluid" />
              <div className="row">
                <div className="col-6 pt-4">
                  <img src="desck-3.avif" alt="" className="img-fluid" />
                </div>
                <div className="col-6 pt-4">
                  <img src="desck-4.avif" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5">
            <hr
              style={{ backgroundColor: "black", border: "1px solid black" }}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <p
                style={{ letterSpacing: "5px", color: "#50514f" }}
                className="text-center fs-5"
              >
                FEATURED CATEGORIES
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2 home-cate text-center">
              <Link to="">
                <img src="home-cate-1.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Audio</p>
            </div>
            <div className="col-2 home-cate text-center">
              <Link to="">
                <img src="home-cate-2.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Massage Chairs</p>
            </div>
            <div className="col-2 home-cate text-center">
              <Link to="">
                <img src="home-cate-3.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Foot & Leg Massage</p>
            </div>
            <div className="col-2 home-cate text-center">
              <Link to="">
                <img src="home-cate-4.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Neck & Back Massage</p>
            </div>
            <div className="col-2 home-cate text-center">
              <Link to="">
                <img src="home-cate-5.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Wine & Bar</p>
            </div>
            <div className="col-2 home-cate text-center">
              <Link to="">
                <img src="home-cate-6.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Lighting</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-2 home-cate text-center mt-4">
              <Link to="">
                <img src="home-cate-7.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Pillows</p>
            </div>
            <div className="col-2 home-cate text-center mt-4">
              <Link to="">
                <img src="home-cate-8.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Skincare</p>
            </div>
            <div className="col-2 home-cate text-center mt-4">
              <Link to="">
                <img src="home-cate-9.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">LED Light Therapy</p>
            </div>
            <div className="col-2 home-cate text-center mt-4">
              <Link to="">
                <img src="home-cate-10.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Technology</p>
            </div>
            <div className="col-2 home-cate text-center mt-4">
              <Link to="">
                <img src="home-cate-11.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Kitchen</p>
            </div>
            <div className="col-2 home-cate text-center mt-4">
              <Link to="">
                <img src="home-cate-12.avif" alt="" className="img-fluid" />
              </Link>
              <p className="pt-3">Outdoor</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <p
                style={{ letterSpacing: "5px", color: "#50514f" }}
                className="fs-5 text-center pt-5"
              >
                FEATURED BRANDS
              </p>
            </div>
          </div>
          <div className="row mt-2 p-0">
            <div className="col-4 p-0">
              <Link>
                <img
                  src="home-brand-1.avif"
                  alt=""
                  className="img-fluid pe-0"
                  style={{ borderRadius: "48px 48px 48px 0px" }}
                />
              </Link>
            </div>
            <div className="col-4 p-0">
              <Link>
                <img
                  src="home-brand-2.avif"
                  alt=""
                  className="img-fluid"
                  style={{ borderRadius: "48px 48px 48px 0px" }}
                />
              </Link>
            </div>
            <div className="col-4">
              <Link>
                <img
                  src="home-brand-3.avif"
                  alt=""
                  className="img-fluid"
                  style={{ borderRadius: "48px 48px 48px 0px" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
