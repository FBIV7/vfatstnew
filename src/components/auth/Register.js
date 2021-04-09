import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import { Link } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import Membership from "../../pages/Membership";
import Footer from "../../pages/Footer";

const Register = ({ register, isAuthenticated, setAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const { name, email, password, confirmpassword } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setAlert("password not match");
    } else {
      register({ name, email, password, confirmpassword });
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="h-screen w-screen styleBack">
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div
          className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
          style={{ height: "500px" }}
        >
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <img
                className="mx-auto"
                src="/assets/VFast.png"
                alt="vfastLogo"
                width="110px"
              ></img>

              <h1 className="text-4xl text-center  font-semibold">
                WELCOME BACK!..
              </h1>
              <div className="w-full mt-4">
                <form
                  className="form-horizontal w-3/4 mx-auto"
                  method="POST"
                  action="#"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div className="flex flex-col mt-4">
                    <input
                      id="name"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="name"
                      placeholder="Name"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="email"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="email"
                      placeholder="Email"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="password"
                      type="password"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="password"
                      required
                      minLength="6"
                      placeholder="Password"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="confirmpassword"
                      type="password"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="confirmpassword"
                      required
                      minLength="6"
                      placeholder="Confirm Password"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="mr-2"
                    />{" "}
                    <label for="remember" className="text-sm text-grey-dark">
                      Remember Me
                    </label>
                  </div>

                  <div className="flex flex-col mt-8">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                    >
                      Signup
                    </button>
                  </div>
                </form>

                <div className="text-center mt-4">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="/login"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2 rounded-r-lg ">
            <img
              src="/assets/signup.png"
              style={{ width: "360px", marginTop: "auto" }}
            ></img>
          </div>
        </div>
      </div>
      <Membership />
      <Footer />
    </div>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, setAlert })(Register);
