import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import {
  getemployeeunderverification,
  getemployeeassignvendor,
  getemployeeaudit,
} from "../../actions/operation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../../utils/routing/PrivateRoute";
import AssignVendor from "../OperationRoute/AssignVendor";
import AddressCheckInProcess from "../OperationRoute/AddressCheckInProcess";
import { Audiotrack } from "@material-ui/icons";
import AddressAudit from "../OperationRoute/AddressAudit";

const SideBarOperation = ({
  logout,
  getemployeeunderverification,
  underVerification,
  getemployeeassignvendor,
  assignVendor,
  getemployeeaudit,
  Audit,
}) => {
  const [assign, setAssign] = useState(false);
  const [inProcess, setInProcess] = useState(false);
  const [audit, setAudit] = useState(false);

  useEffect(() => {
    getemployeeunderverification();
    getemployeeassignvendor();
    getemployeeaudit();
  }, []);

  if (underVerification) {
    var addressCheck = underVerification.filter((e) => {
      return e.address_check === true;
    });
    var employee = underVerification.filter((e) => {
      return e.education_check === true;
    });
  }
  if (assignVendor) {
    var addressCheckInProcess = assignVendor.filter((e) => {
      return e.address_check === true;
    });
    var employeeInProcess = assignVendor.filter((e) => {
      return e.education_check === true;
    });
  }
  if (Audit) {
    var addressCheckAudit = Audit.filter((e) => {
      return e.address_check === true;
    });
    var employeeAudit = Audit.filter((e) => {
      return e.education_check === true;
    });
  }
  // console.log(underVerification);

  return (
    <Router>
      <div className="flex flex-wrap bg-gray-100 w-full h-screen">
        <div className="w-3/12 bg-white rounded p-3 shadow-lg">
          <div className="flex items-center space-x-4 p-2 mb-5">
            <img
              className="h-12 rounded-full"
              src="http://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
              alt="James Bhatta"
            />
            <div>
              <h4 className="font-semibold text-lg text-gray-700 capitalize font-poppins tracking-wide">
                Operation
              </h4>
              <span className="text-sm tracking-wide flex items-center space-x-1">
                <svg
                  className="h-4 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-gray-600">Verified</span>
              </span>
            </div>
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span>My Profile</span>
              </Link>
            </li>
            <li>
              <div
                onClick={(e) => setAssign(!assign)}
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <span>Assign Vendor</span>
              </div>
            </li>
            {assign && (
              <div>
                {addressCheck && (
                  <li>
                    <Link
                      to="/assignvendor"
                      className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span>
                        Address Check{" "}
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                          {" "}
                          {addressCheck.length}
                        </span>{" "}
                      </span>
                    </Link>
                  </li>
                )}
                {employee && (
                  <li>
                    <Link
                      to="/assignvendor"
                      className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span>
                        Employement Check{" "}
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                          {employee.length}
                        </span>{" "}
                      </span>
                    </Link>
                  </li>
                )}
              </div>
            )}

            <li>
              <div
                onClick={(e) => setInProcess(!inProcess)}
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <span>In Process</span>
              </div>
            </li>
            {inProcess && (
              <div>
                {addressCheckInProcess && (
                  <li>
                    <Link
                      to="/addresscheckinprocess"
                      className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span>
                        Address Check{" "}
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                          {" "}
                          {addressCheckInProcess.length}
                        </span>{" "}
                      </span>
                    </Link>
                  </li>
                )}
                {employeeInProcess && (
                  <li>
                    <Link
                      to="/"
                      className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span>
                        Employement Check{" "}
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                          {employeeInProcess.length}
                        </span>{" "}
                      </span>
                    </Link>
                  </li>
                )}
              </div>
            )}

            <li>
              <div
                onClick={(e) => setAudit(!audit)}
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
                <span>Audit</span>
              </div>
            </li>
            {audit && (
              <div>
                {addressCheckAudit && (
                  <li>
                    <Link
                      to="/addresscheckaudit"
                      className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span>
                        Address Check{" "}
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                          {" "}
                          {addressCheckAudit.length}
                        </span>{" "}
                      </span>
                    </Link>
                  </li>
                )}
                {employeeAudit && (
                  <li>
                    <Link
                      to="/"
                      className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
                    >
                      <span>
                        Employement Check{" "}
                        <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                          {employeeAudit.length}
                        </span>{" "}
                      </span>
                    </Link>
                  </li>
                )}
              </div>
            )}
            <li>
              <Link
                to="/verify"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>Verify</span>
              </Link>
            </li>
            <li>
              <Link
                to="/status"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>Status</span>
              </Link>
            </li>
            {/* <li>
                  <a href="" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                      <span className=" text-gray-600">
                          <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                      </span>
                      <span>My wishlist</span>
                  </a>
              </li> */}
            {/* <li>
                          <Link to="/" className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline">
                              <span className="text-gray-600">
                                  <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                  </svg>
                              </span>
                              <span>Settings</span>
                          </Link>
                      </li> */}
            <li>
              <Link
                to="/changepassword"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <span>Change password</span>
              </Link>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
              >
                <span className="text-gray-600">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </span>
                <span onClick={logout}>Logout</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-9/12">
          <div className="p-4 text-gray-500">
            <Switch>
              <PrivateRoute exact path="/assignvendor">
                <AssignVendor data={addressCheck} />
              </PrivateRoute>
              <PrivateRoute exact path="/addresscheckinprocess">
                <AddressCheckInProcess data={addressCheckInProcess} />
              </PrivateRoute>
              <PrivateRoute exact path="/addresscheckaudit">
                <AddressAudit data={addressCheckAudit} />
              </PrivateRoute>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

SideBarOperation.propTypes = {
  logout: PropTypes.func.isRequired,
  getemployeeunderverification: PropTypes.func.isRequired,
  getemployeeassignvendor: PropTypes.func.isRequired,
  getemployeeaudit: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  underVerification: state.operation.employeeUnderVerification,
  assignVendor: state.operation.employeeAssignVendor,
  Audit: state.operation.employeeAudit,
});

export default connect(mapStateToProps, {
  logout,
  getemployeeunderverification,
  getemployeeassignvendor,
  getemployeeaudit,
})(SideBarOperation);
