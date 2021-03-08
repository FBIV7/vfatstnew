import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPackagebyID, getCasebyID } from "../../actions/initiation";
import _ from "lodash";
import Education from "./Education";
import Address from "./Address";
import Employment from "./Employment";
import Reference from "./Reference";

const CDFform = ({ getPackagebyID, location, pack, cases, getCasebyID }) => {
  const [packages, setPackages] = useState(null);

  console.log(packages);
  useEffect(() => {
    var pack = location.state.clientName.package.filter((e) => {
      return e._id === location.state.pack;
    });

    pack.map((e) => setPackages(e));
    // getPackagebyID(location.state.pack);
    getCasebyID(location.state._id);
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mt-10">
        <div> caseId : {location.state.reportId} </div>
        <div>
          {" "}
          <span>Client Name : {location.state.clientName.name}</span>{" "}
        </div>
        <div>Candidate Name : {location.state.candidateName}</div>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-10">
        <div>Package selected : {packages && packages.name}</div>
      </div>
      Education form
      {packages &&
        packages.educationCheck &&
        _.times(
          packages.educationCheck -
            (cases ? cases.educationSubmit : 0),
          (i, index) => {
            return (
              <div key={index}>
                {" "}
                <Education
                  caseId={location.state._id}
                  reportId={location.state.reportId}
                  index={index}
                ></Education>
              </div>
            );
          }
        )}
      Address Form
      <div>
        {packages &&
          packages.addressCheck &&
          _.times(
            packages.addressCheck -
              (cases ? cases.addressSubmit : 0),
            (i, index) => {
              return (
                <div key={index}>
                  <Address
                    caseId={location.state._id}
                    reportId={location.state.reportId}
                    index={index}
                  ></Address>
                </div>
              );
            }
          )}
      </div>
      <div>
        Employment Form
        {packages &&
          packages.employmentCheck &&
          _.times(
            packages.employmentCheck -
              (cases ? cases.employmentSubmit : 0),
            (i, index) => {
              return (
                <div key={index}>
                  <Employment
                    caseId={location.state._id}
                    reportId={location.state.reportId}
                    index={index}
                  ></Employment>
                </div>
              );
            }
          )}
      </div>
      <div>
        Reference Form
        {packages &&
          packages.referenceCheck &&
          _.times(
            packages.referenceCheck -
              (cases ? cases.referenceSubmit : 0),
            (i, index) => {
              return (
                <div key={index}>
                  <Reference
                    caseId={location.state._id}
                    reportId={location.state.reportId}
                    index={index}
                  ></Reference>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
};

CDFform.propTypes = {
  getPackagebyID: PropTypes.func.isRequired,
  getCasebyID: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  pack: state.initiation.package,
  cases: state.initiation.onecase,
});
export default connect(mapStateToProps, { getPackagebyID, getCasebyID })(
  CDFform
);
