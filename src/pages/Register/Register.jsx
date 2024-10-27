import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Register = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className="my-10">
        <h2 className="text-3xl font-semibold text-center ">Register</h2>

        <form className="card-body mx-auto lg: w-1/2">
        <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="input input-bordered"
              required
            />
          </div>       
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
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
          Already have an Account?{" "}
          <Link className="text-blue-700 font-bold" to="/login">
           Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
