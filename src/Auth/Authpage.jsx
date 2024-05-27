import React from "react";

function Authpage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Login</h2>
          <p>If you have an account, please sign in with your email address.</p>
          <form>
            <div className="form-group">
              <label htmlFor="loginEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="loginPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Sign In
            </button>
            <div className="mt-3">
              <a href=" ">Forgot your password?</a>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Create Customer</h2>
          <p>
            Creating an account has many benefits: check out faster, keep more
            than one address, track orders and more.
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter first name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter last name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="registerEmail">Email</label>
              <input
                type="email"
                className="form-control"
                id="registerEmail"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="registerPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="registerPassword"
                placeholder="Password"
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="newsletter"
              />
              <label className="form-check-label" htmlFor="newsletter">
                Subscribe to our newsletter
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Authpage;

