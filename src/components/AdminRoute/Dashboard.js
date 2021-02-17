import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  getAllReport,
  getClient,
  getVendor,
  getOperation,
  getPrice,
} from "../../actions/admin";
import Test from "./Test";
const Dashboard = ({ getAllReport, getClient, getVendor, getOperation }) => {
  useEffect(() => {
    getClient();
    getAllReport();
    getVendor();
    getOperation();
    getPrice();
  }, []);
  return(
    
      <div>
        <Link to={{
          pathname:"/test",
          state :{
            name:"aman"
          }
        }}> hello</Link>
      </div>
    
  )
};

Dashboard.propTypes = {
  getAllReport: PropTypes.func.isRequired,
  getClient: PropTypes.func.isRequired,
  getOperation: PropTypes.func.isRequired,
  getVendor: PropTypes.func.isRequired,
  getPrice: PropTypes.func.isRequired,
};

export default connect(null, {
  getAllReport,
  getClient,
  getVendor,
  getOperation,
  getPrice,
})(Dashboard);
