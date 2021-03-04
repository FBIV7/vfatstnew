import React, { useState } from "react";
import Popper from "popper.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Navbar = ({ fixed }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <div>
      <nav className="fixed flex items-center justify-between flex-wrap p-6 font-sans shadow-md z-50 w-full px-5 py-4">
        <div className="flex items-center flex-shrink-0 text-white mr-6 sm:mx-10 text-white-900">
          <Link to="/">
            <img
              width="100"
              height="100"
              src="/assets/VFast-white.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="block lg:hidden text-white-900">
          <button
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}
            className="flex items-center px-3 py-2 border rounded text-white-600 border-white-400  hover:text-white"
          >
            <svg
              className="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full ${isMenuOpen ? "block" : "hidden"
            } lg:block flex-grow justify-baseline lg:flex lg:items-baseline lg:w-auto pt-1 text-white-900`}
        >
          <div className=" lg:flex-grow text-white-900 fontNav		">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-600 rounded hover:text-3xl	 hover:text-white mr-4"
            >
              <span className="px-2"> HOME </span>
            </Link>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-600 rounded  hover:text-white mr-4"
            >
              <span className="px-2"> ABOUT US</span>
            </Link>
            <Link
              to=""
              className="block mt-4 lg:inline-block lg:mt-0 text-white-600 rounded  hover:text-white mr-4"
            >
              <div className="flex ">
                <div className=" sm:w-6/20 md:w-4/12">
                  <div className="relative inline-flex  w-full">
                    <button
                      className="text-white uppercase text-sm px-1.5  rounded outline-none focus:outline-none  "
                      style={{
                        transition: "all .15s ease",
                        backgroundColor: "#2c3b4c",
                      }}
                      type="button"
                      ref={btnDropdownRef}
                      onClick={() => {
                        dropdownPopoverShow
                          ? closeDropdownPopover()
                          : openDropdownPopover();
                      }}
                    >
                      Services
                    </button>
                    <div
                      ref={popoverDropdownRef}
                      className={
                        (dropdownPopoverShow ? "block " : "hidden ") +
                        "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 "
                      }
                      style={{ minWidth: "12rem", backgroundColor: "#2c3b4c" }}
                    >
                      <a
                        href=""
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent "
                        onClick={(e) => e.preventDefault()}
                      >
                        <Link to="/services/employee">
                          Employee Verification
                        </Link>
                      </a>
                      <a
                        href=""
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent "
                        onClick={(e) => e.preventDefault()}
                      >
                        <Link to="/services/company">Company Verification</Link>
                      </a>

                      {/* <a
                        href=""
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent "
                        onClick={(e) => e.preventDefault()}
                      >
                        <Link to="/services/tenant">Tenant Verification</Link>
                      </a>
                      <a
                        href=""
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent "
                        onClick={(e) => e.preventDefault()}
                      >
                        <Link to="/services/vehicle">Vehicle Verification</Link>
                      </a>
                      <a
                        href=""
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent "
                        onClick={(e) => e.preventDefault()}
                      >
                        <Link to="/services/property">
                          Property Verification
                        </Link>
                      </a>
                      <a
                        href=""
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent "
                        onClick={(e) => e.preventDefault()}
                      >
                        <Link to="/services/bridegroom">
                          Bride/Groom Verification
                        </Link>
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <a
              href="https://vfastverification.blogspot.com/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-600 rounded  hover:text-white mr-4 "
            >
              <span className="px-2"> BLOG</span>
            </a>
            <Link
              to="/contact"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-600 rounded  hover:text-white mr-4 "
            >
              <span className="px-2"> CONTACT US</span>
            </Link>

            <Link
              to="/login"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-600 rounded hover:font-extrabold	 mr-4 "
            >
              <span className="px-2"> SIGIN</span>
            </Link>
          </div>
          <div className="sm:mx-10">
            <a
              href="tel:18005727797"
              className="inline-block text-sm px-4 py-2 leading-none  text-white-600 hover:scale-150 mt-4 lg:mt-0 	"
            >
              TOLL FREE : 18005727797
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};
// Navbar.prototype = {
//   auth: React.ProtoTypes.object.isRequired
// }
// function mapStateToProps(state) {
//   return {
//     auth: state.auth,
//   };
// }
export default Navbar;
