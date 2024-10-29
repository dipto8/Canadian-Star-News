import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form.get('email'))
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className=" lg:my-10 ">
        <p className="text-3xl text-center font-semibold">Please Login</p>
        <form onSubmit={handleLogin} className="card-body mx-auto lg: w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center">
          Don't have an Account?{" "}
          <Link className="text-blue-700 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
