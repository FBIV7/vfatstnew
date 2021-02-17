import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPricing } from "../../actions/profile";
const Dashboard = ({ getPricing }) => {
  useEffect(() => {
    getPricing();
  }, []);
  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <Link to="/client" className="dashboard-card">
              <h2> Client</h2>
              <h3>100</h3>
            </Link>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <Link to="/vendor" className="dashboard-card">
              <h2> Vendors</h2>
              <h3>100</h3>
            </Link>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <Link to="/leads" className="dashboard-card">
              <h2> Leads</h2>
              <h3>100</h3>
            </Link>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <Link to="/verify" className="dashboard-card">
              <h2> Verifiers</h2>
              <h3>100</h3>
            </Link>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <Link to="/verification" className="dashboard-card">
              <h2> Verifications</h2>
              <h3>100</h3>
            </Link>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <Link to="/report" className="dashboard-card">
              <h2> Reports</h2>
              <h3>100</h3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  getPricing: PropTypes.func.isRequired,
};

export default connect(null, { getPricing })(Dashboard);
