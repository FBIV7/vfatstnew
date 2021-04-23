import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPackagebyID, getCasebyID } from "../../actions/initiation";
import _ from "lodash";
import Education from "./Education";
import Address from "./Address";
import Employment from "./Employment";
import Reference from "./Reference";
import BlueCollarReferance from "./BlueCollarReferance";
import axios from "axios";

const CDFform = ({ getPackagebyID, location, pack, cases, getCasebyID }) => {
  const [packages, setPackages] = useState(null);

  console.log(cases);

  useEffect(() => {
    var pack = location.state.clientName.package.filter((e) => {
      return e._id === location.state.pack;
    });
    console.log(pack);
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
        <button class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
            class="w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>
            <a href={location.state.document} download="">
              Download
            </a>
          </span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-10">
        <div>Package selected : {packages && packages.name}</div>
      </div>
      Education form
      {packages &&
        packages.educationCheck &&
        cases &&
        _.times(
          packages.educationCheck - ( cases.educationSubmit),
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
          cases &&
          _.times(
            packages.addressCheck - (cases ? cases.addressSubmit : 0),
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
          cases &&
          _.times(
            packages.employmentCheck - ( cases.employmentSubmit),
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
          packages.referanceCheck &&
          cases &&
          _.times(
            packages.referanceCheck - (cases ? cases.referenceSubmit : 0),
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
        <div>BC referance</div>
        {packages &&
          packages.blueCollarReferanceCheck &&
          cases &&
          _.times(
            packages.blueCollarReferanceCheck -
              (cases ? cases.blueCollarReferenceSubmit : 0),
            (i, index) => {
              return (
                <div key={index}>
                  <BlueCollarReferance
                    caseId={location.state._id}
                    reportId={location.state.reportId}
                  />
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
