import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCases } from "../../actions/reportWriting.js";
import Moment from "react-moment";
import { Link } from "react-router-dom";
const ShowChecks = ({ location, getCases, checks }) => {
  useEffect(() => {
    getCases(location.state._id);
  }, []);

  console.log(checks);
  return (
    <>
      <table className="table-auto w-full border-separate border border-green-800 mt-5">
        <thead>
          <tr className="flex w-full ">
            <th className="w-1/5 flex justify-center... border border-green-600">Checks</th>
            <th className="w-1/5 flex justify-center... border border-green-600">Referance No</th>
            <th className="w-1/5 flex justify-center... border border-green-600">Client Name</th>
            <th className="w-1/5 flex justify-center... border border-green-600">Candidate</th>
            <th className="w-1/5 flex justify-center... border border-green-600">Date</th>
            <th className="w-1/5 flex justify-center... border border-green-600">Expire on</th>
            <th className="w-1/5 flex justify-center... border border-green-600">Colour</th>
          </tr>
        </thead>

        <tbody>
          {checks &&
            checks.map((e) => {
              return (
               
                  <tr className="flex w-full">
                  <th className="w-1/5 flex justify-center... border border-green-600">
                      {e.reportId}
                    </th>
                    <th className="w-1/5 flex justify-center... border border-green-600">
                      {e.ReportID}
                    </th>
                    <th className="w-1/5 flex justify-center... border border-green-600">
                      {e.caseID.clientName.name}
                    </th>
                    <th className="w-1/5 flex justify-center... border border-green-600">{e.name}</th>
                    <th className="w-1/5 flex justify-center... border border-green-600">
                      <Moment format="YYYY/MM/DD">{e.date}</Moment>
                    </th>
                    <th className="w-1/5 flex justify-center... border border-green-600">
                      <Moment format="YYYY/MM/DD">{e.expireDate}</Moment>
                    </th>
                    <th className="w-1/5 flex justify-center... border border-green-600">
                      {e.colourCode}
                    </th>
                  </tr>
                
              );
            })}
        </tbody>
      </table>
      <div >


      </div>
    </>
  );
};

ShowChecks.propTypes = {
  getCases: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  checks: state.reportWriting.checks,
});
export default connect(mapStateToProps, { getCases })(ShowChecks);
