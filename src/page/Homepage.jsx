import React from "react";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

function Homepage() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row desck-home">
            <div className="col-12 col-lg-7 mb-3 mb-lg-0 desk-image">
              <img src="desck-1.avif" alt="" className="img-fluid" />
            </div>
            <div className="col-12 col-lg-5">
              <img src="desck-2.avif" alt="" className="img-fluid mb-3" />
              <div className="row">
                <div className="col-6 mb-3 mb-md-0">
                  <img src="desck-3.avif" alt="" className="img-fluid" />
                </div>
                <div className="col-6">
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
          <div className="row mt-4 fratured">
            {[
              { src: "home-cate-1.avif", label: "Audio" },
              { src: "home-cate-2.avif", label: "Massage Chairs" },
              { src: "home-cate-3.avif", label: "Foot & Leg Massage" },
              { src: "home-cate-4.avif", label: "Neck & Back Massage" },
              { src: "home-cate-5.avif", label: "Wine & Bar" },
              { src: "home-cate-6.avif", label: "Lighting" },
              { src: "home-cate-7.avif", label: "Pillows" },
              { src: "home-cate-8.avif", label: "Skincare" },
              { src: "home-cate-9.avif", label: "LED Light Therapy" },
              { src: "home-cate-10.avif", label: "Technology" },
              { src: "home-cate-11.avif", label: "Kitchen" },
              { src: "home-cate-12.avif", label: "Outdoor" },
            ].map((category, index) => (
              <div
                key={index}
                className="col-6 col-md-4 col-lg-3 col-xl-2 text-center mt-3"
              >
                <Link to={"/card"}>
                  <img src={category.src} alt="" className="img-fluid" />
                </Link>
                <p className="pt-3">{category.label}</p>
              </div>
            ))}
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
            <div className="col-12 col-md-6 col-lg-4 mt-3 ps-2 p-0">
              <Link to={"/card"}>
                <img
                  src="home-brand-1.avif"
                  alt=""
                  className="img-fluid"
                  style={{ borderRadius: "48px 48px 48px 0px" }}
                />
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-3 ps-2 p-0">
              <Link to={"/card"}>
                <img
                  src="home-brand-2.avif"
                  alt=""
                  className="img-fluid"
                  style={{ borderRadius: "48px 48px 48px 0px" }}
                />
              </Link>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mt-3 ps-2 p-0">
              <Link to={"/card"}>
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
      <section></section>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <Link>
                <img src="home-img.avif" alt="" className="img-fluid" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <Accordion>
                <Accordion.Item
                  eventKey="0"
                  style={{
                    borderLeft: "none",
                    borderRight: "none",
                    borderTop: "none",
                    outline: "none",
                  }}
                >
                  <Accordion.Header>
                    <p className="">
                      Brookstone.com Your Trusted Source for Premium Quality
                      Products
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Step into a realm of curated excellence at Brookstone.com,
                      your premier destination for premium lifestyle products.
                      Unlike competitors who cast a wide net, we take pride in
                      offering a meticulously curated selection of handpicked,
                      best-in-class items across various categories. Our
                      commitment is to deliver a shopping experience that
                      transcends the ordinary, ensuring that each product you
                      encounter embodies the pinnacle of quality and innovation.
                    </p>
                    <p>
                      <strong>Unwind with Unrivaled Massagers:</strong>
                      <br />
                      Immerse yourself in a world of relaxation with our
                      extensive range of massagers. From the sophistication of
                      Massage Chairs to the rejuvenating touch of Foot
                      Massagers, targeted relief of Hand Massagers, and the
                      power of Massage Guns, our collection sets the standard
                      for wellness.
                    </p>
                    <p>
                      <strong>
                        Indulge in Intimacy with Personal Massagers:
                      </strong>
                      <br />
                      Discover a discreet world of pleasure with our collection
                      of personal massagers. At Brookstone, we understand the
                      importance of embracing intimacy with products designed
                      for comfort and satisfaction. Explore our range of
                      Vibrators, Women's Sex Toys, Intimate Massagers, including
                      the iconic Magic Wand and offerings from esteemed brands
                      like Lelo. Our commitment to quality extends to every
                      aspect of your well-being, ensuring that your intimate
                      moments are enhanced with products that prioritize both
                      pleasure and personal care.
                    </p>
                    <p>
                      <strong>Health & Wellness Haven:</strong>
                      <br />
                      Prioritize your well-being with our Health & Wellness
                      essentials. Explore our carefully selected range,
                      including Bathroom Accessories, Skincare Products, Cupping
                      Therapy, Eye Care, and Grooming essentials, all designed
                      to elevate your self-care routine.
                    </p>
                    <p>
                      <strong>Sleep Serenely with Our Sleep Aids:</strong>
                      <br />
                      Transform your bedroom into a sanctuary of comfort with
                      our Sleep Aids. Dive into the tranquility of Air Cleaners,
                      awaken gently with Alarm Clocks, and cocoon yourself in
                      the luxury of our Bedding, Mattress Toppers, and Pillows
                      for a rejuvenating night's sleep.
                    </p>
                    <p>
                      <strong>Elevate Your Living Space:</strong>
                      <br />
                      Enhance your home with our elegant Home Decor options.
                      From Accent Decor and Furniture to seasonal delights like
                      Christmas Decorations and the tools for Home Improvement,
                      each piece is a statement of sophistication.
                    </p>
                    <p>
                      <strong>Entertain with Style:</strong>
                      <br />
                      Celebrate life's moments with our curated selection of
                      Decanters, Gift Sets, and Glassware Sets. Elevate your
                      home entertainment experience with our Cocktail Smoker and
                      Wine Accessories, showcasing your distinctive taste.
                    </p>
                    <p>
                      <strong>Fuel Your Active Lifestyle:</strong>
                      <br />
                      Achieve your fitness goals with our top-of-the-line
                      Exercise Equipment, Fitness Trackers, and Sports
                      Massagers. Embrace the outdoors with our collection of
                      Bikes, Camping Gear, and Outdoor Decor, designed for those
                      who live life on the move.
                    </p>
                    <p>
                      <strong>Stay Tech-Savvy with Cool Gadgets:</strong>
                      <br />
                      Explore the latest in technology with our Cool Gadgets.
                      From Cell Phone Accessories and Sound Equipment to Gaming
                      Accessories and Wearable Tech, we bring innovation to your
                      fingertips.
                    </p>
                    <p>
                      <strong>Travel Smart with Our Essentials:</strong>
                      <br />
                      Navigate the world with ease using our Travel Essentials.
                      Stay organized with Travel Bags, Backpacks, and Travel
                      Pillows, ensuring every journey is a seamless and stylish
                      adventure.
                    </p>
                    <p>
                      <strong>Pet-Friendly Solutions:</strong>
                      <br />
                      Pamper your furry friends with our Pet Products. From Pet
                      Grooming to Travel Accessories and Pet Care essentials, we
                      ensure your pets enjoy the same level of comfort and care
                      as you do.
                    </p>
                    <p>
                      <strong>Outdoor Oasis:</strong>
                      <br />
                      Create an Outdoor Oasis with our range of Outdoor
                      Furniture, Decor, and Lighting. Whether you're hosting a
                      gathering or simply relaxing, our products transform your
                      outdoor space into a haven of tranquility.
                    </p>
                    <p>
                      <strong>Seamless Shopping Experience:</strong>
                      <br />
                      At Brookstone.com, we prioritize your shopping experience.
                      Our user-friendly website and exceptional customer service
                      ensure a seamless journey from browsing to purchase. Each
                      product is backed by our dedication to quality, ensuring
                      your satisfaction.
                    </p>
                    <p>
                      <strong>Discover Excellence:</strong>
                      <br />
                      Join us at Brookstone.com and discover a world where
                      quality, innovation, and elegance converge. Elevate your
                      lifestyle with products that are meticulously selected to
                      enhance your well-being, home, and adventures. Experience
                      the essence of premium living at Brookstone.com, where
                      every detail is designed with you in mind.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
