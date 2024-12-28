import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Descriptionpage() {
  const { id } = useParams();

  const [data, setdata] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/product/${id}`)
      .then((response) => {
        console.log(response.data);
        setdata(response.data);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  const addToCardFunction = () => {
    axios
      .post(`${process.env.REACT_APP_BASEURL}/cartdata`, data)
      .then((res) => {
        console.log(res);
        alert("data added successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="row">
                <div className="col-2 d-flex flex-column">
                  {data.image &&
                    data.image
                      .slice(0, 5)
                      .map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt=""
                          className="img-fluid mt-4"
                        />
                      ))}
                </div>
                <div className="col-10 col-lg-9 ps-0">
                  {data.image && data.image[0] && (
                    <img
                      src={data.image[0]}
                      alt=""
                      className="img-fluid mt-4"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 mt-5 mt-lg-0">
              <div className="desc-heading">
                <p>
                  <span>{data.heading}</span>
                </p>
              </div>
              <div className="desc-title">
                <h1 className="h5">{data.title}</h1>
              </div>
              <div className="desc-price mt-3">
                <h5>
                  <span>${data.price}</span>
                </h5>
              </div>
              <div className="desc-button">
                <Link to={"/cart"}>
                  <button className="button" onClick={addToCardFunction}>
                    Add To Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5">
          <div className="row">
            <h4>Description</h4>
            <div>
              <hr />
            </div>
            <div>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
    </div>
  );
}

export default Descriptionpage;
