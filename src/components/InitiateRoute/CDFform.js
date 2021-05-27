import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCasebyID } from "../../actions/initiation";
import _ from "lodash";
import Education from "./Education";
import Address from "./Address";
import Employment from "./Employment";
import Reference from "./Reference";
import BlueCollarReferance from "./BlueCollarReferance";
import SocialMedia from "./SocialMedia";
import Passport from "./Passport";
import Pancard from "./Pancard";
import DrivingLicene from "./DrivingLicene";
import Aadhar from "./Aadhar";
import CriminalThroughLawFirm from "./CriminalThroughLawFirm";
import CriminalThroughEcourt from "./CriminalThroughEcourt";

const CDFform = ({ location, cases, getCasebyID }) => {
  const [packages, setPackages] = useState(null);
  console.log(location.state, cases);

  useEffect(() => {
    var pack = location.state.clientName.package.filter((e) => {
      return e._id === location.state.pack;
    });
    pack.map((e) => setPackages(e));
    getCasebyID(location.state._id);
    return () => {};
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
      <div class="bg-gray">
        <nav class="flex ">
          {" "}
          <span className="mt-2 mb-2 ml-3">Education form </span>
        </nav>
      </div>
      {packages &&
        packages.educationCheck &&
        cases &&
        _.times(packages.educationCheck - cases.educationSubmit, (i, index) => {
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
        })}

      <div class="bg-gray">
        <nav class="flex ">
          {" "}
          <span className="mt-2 mb-2 ml-3">Address Form</span>
        </nav>
      </div>

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
        <div class="bg-gray">
          <nav class="flex ">
            {" "}
            <span className="mt-2 mb-2 ml-3">Employment Form </span>
          </nav>
        </div>

        {packages &&
          packages.employmentCheck &&
          cases &&
          _.times(
            packages.employmentCheck - cases.employmentSubmit,
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
        <div class="bg-gray">
          <nav class="flex ">
            {" "}
            <span className="mt-2 mb-2 ml-3">Reference Form </span>
          </nav>
        </div>

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
        <div class="bg-gray">
          <nav class="flex ">
            {" "}
            <span className="mt-2 mb-2 ml-3">Background Referance form </span>
          </nav>
        </div>
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

        <div class="bg-gray">
          <nav class="flex ">
            {" "}
            <span className="mt-2 mb-2 ml-3">
              Criminal Through E-Court Form
            </span>
          </nav>
        </div>

        {packages &&
          packages.criminalThroughECourtCheck &&
          cases &&
          _.times(
            packages.criminalThroughECourtCheck -
              (cases ? cases.criminalThroughECourtSubmit : 0),
            (i, index) => {
              return (
                <div key={index}>
                  <CriminalThroughEcourt
                    caseId={location.state._id}
                    reportId={location.state.reportId}
                  />
                </div>
              );
            }
          )}

        <div class="bg-gray">
          <nav class="flex ">
            {" "}
            <span className="mt-2 mb-2 ml-3">
              Criminal Through Law Firm Form{" "}
            </span>
          </nav>
        </div>
        {packages &&
          packages.criminalThroughLawFirmCheck &&
          cases &&
          _.times(
            packages.criminalThroughLawFirmCheck -
              (cases ? cases.criminalThroughLawFirmSubmit : 0),
            (i, index) => {
              return (
                <div key={index}>
                  <CriminalThroughLawFirm
                    caseId={location.state._id}
                    reportId={location.state.reportId}
                  />
                </div>
              );
            }
          )}

        <div class="bg-gray">
          <nav class="flex ">
            {" "}
            <span className="mt-2 mb-2 ml-3">Aadhar Form </span>
          </nav>
        </div>
        {packages &&
          packages.aadharCheck &&
          cases &&
          _.times(
            packages.aadharCheck - (cases ? cases.aadharSubmit : 0),
            (i, index) => {
              return (
                <div key={index}>
                  <Aadhar
                    caseId={location.state._id}
                    reportId={location.state.reportId}
                  />
                </div>
              );
            }
          )}

        <div class="bg-gray">
          <nav class="flex ">
            {" "}
            <span className="mt-2 mb-2 ml-3">Driving Lience Form </span>
          </nav>
        </div>

        {packages &&
          packages.drivingLienceCheck &&
          cases &&
          _.times(
            packages.drivingLienceCheck -
              (cases ? cases.drivingLienceSubmit : 0),
            (i, index) => {
              return (
                <div key={index}>
                  <DrivingLicene
                    caseId={location.state._id}
                    reportId={location.state.reportId}
                  />
                </div>
              );
            }
          )}

        <div class="bg-gray">
          <nav class="flex ">
            {" "}
            <span className="mt-2 mb-2 ml-3">Pancard Form </span>
          </nav>
        </div>

        {packages &&
          packages.pancardCheck &&
          cases &&
          _.times(
            packages.pancardCheck - (cases ? cases.pancardSubmit : 0),
            (i, index) => {
              return (
                <div key={index}>
                  <Pancard
                    caseId={location.state._id}
                    reportId={location.state.reportId}
                  />
                </div>
              );
            }
          )}

        <div class="bg-gray">
          <nav class="flex ">
            {" "}
            <span className="mt-2 mb-2 ml-3">Passport Form </span>
          </nav>
        </div>

        {packages &&
          packages.passportCheck &&
          cases &&
          _.times(
            packages.passportCheck - (cases ? cases.passportSubmit : 0),
            (i, index) => {
              return (
                <div key={index}>
                  <Passport
                    caseId={location.state._id}
                    reportId={location.state.reportId}
                  />
                </div>
              );
            }
          )}

        <div class="bg-gray">
          <nav class="flex ">
            {" "}
            <span className="mt-2 mb-2 ml-3">Social Media Form </span>
          </nav>
        </div>

        {packages &&
          packages.socialMediaCheck &&
          cases &&
          _.times(
            packages.socialMediaCheck - (cases ? cases.socialMediaSubmit : 0),
            (i, index) => {
              return (
                <div key={index}>
                  <SocialMedia
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
  getCasebyID: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  pack: state.initiation.package,
  cases: state.initiation.onecase,
});
export default connect(mapStateToProps, { getCasebyID })(CDFform);
