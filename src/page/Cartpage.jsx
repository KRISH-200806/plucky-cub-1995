import axios from "axios";
import React, { useEffect, useState } from "react";
import Paymentpage from "./Paymentpage";
import PrivateRoute from "./PrivateRoute";

function Cartpage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASEURL}/cartdata`);
        setCart(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchCartItems();
  }, []);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const decrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const incrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <section>
        <div className="container">
          <div className="row text-center">
            <h3>Cart Page</h3>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-xl-9">
              <div className="d-sm-none d-md-flex row">
                <div className="col-3">
                  <p>Items</p>
                </div>
                <div className="col-3">
                  <p>Details</p>
                </div>
                <div className="col-3">
                  <p>Quantity</p>
                </div>
                <div className="col-3">
                  <p>Total</p>
                </div>
              </div>
              <div className="row">
                <hr />
              </div>
              {cart.map((item) => (
                <section key={item.id}>
                  <div className="container mb-3">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-3">
                        <img src={item.image} alt="" className="img-fluid" />
                      </div>
                      <div className="col-12 col-md-3">
                        <div>{item.title}</div>
                        <div>${item.price}</div>
                      </div>
                      <div className="col-12 col-md-3">
                        <div className="cart-value mt-2 mt-md-0">
                          <button
                            className="btn btn-outline-secondary me-2"
                            onClick={() => decrementQuantity(item.id)}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn btn-outline-secondary ms-2"
                            onClick={() => incrementQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                        <div className="mt-3 d-flex align-items-center">
                          <i className="bi bi-trash3"></i>
                          <button
                            className="btn btn-link text-danger ms-2"
                            onClick={() => removeItem(item.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <div className="col-12 col-md-3">
                        ${item.price * item.quantity}
                      </div>
                    </div>
                  </div>
                  <div>
                    <hr />
                  </div>
                </section>
              ))}
            </div>
            <div className="col-lg-5 col-xl-3">
              <div className="card p-3">
                <h5>Total: ${calculateTotal()}</h5>
                <button
                  onClick={() => setCheck(!check)}
                  className="btn btn-primary"
                >
                  {check ? (
                    <PrivateRoute>
                      <Paymentpage totalpaymentprice={calculateTotal()} />
                    </PrivateRoute>
                  ) : (
                    "Proceed to Checkout"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cartpage;
