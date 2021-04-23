import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveEmployment,saveInsuffEmployment } from "../../actions/employmentOperation";
import { withRouter } from "react-router-dom";
const FillData = ({ location, saveEmployment,history ,saveInsuffEmployment}) => {
  const [showModal, setShowModal] = React.useState(false);

  // console.log(location.state)
  const [formData, setFormData] = useState({
    id: "",
    caseID: "caseId",
    parentReportID: "",
    ReportID: "",
    name: "",
    mobile: "",
    alternateMobile: "",
    email: "",
    fatherName: "",
    motherName: "",
    aadharCard: "",
    passport: "",
    DOB: "",
    maritialStatus: "",
    nationality: "",
    employerName: "",
    companyName: "",
    dateOfJoining: "",
    dateOfRelieving: "",
    supervisorManager: "",
    designation: " ",
    employeeCode: " ",
    remark: "",
    exitFormality: "",
    disciplinaryIssue: "",
    eligibilityForRehire: "",
    additionalComments: "",
    companyRegistered: "",
    verifiedBy: "",
    verificationMode: "",
    verifierContact: "",
    verifierDesignation: "",
    remarkInsuffL2:"",
    isnew: true,
  });

  const {
    id,
    caseID,
    verifierDesignation,
    verifierContact,
    verificationMode,
    verifiedBy,
    additionalComments,
    companyRegistered,
    exitFormality,
    eligibilityForRehire,
    disciplinaryIssue,
    parentReportID,
    ReportID,
    name,
    mobile,
    alternateMobile,
    email,
    fatherName,
    motherName,
    passport,
    aadharCard,
    DOB,
    maritialStatus,
    nationality,
    employerName,
    companyName,
    dateOfJoining,
    dateOfRelieving,
    supervisorManager,
    designation,
    employeeCode,
    remark,
    remarkInsuffL2,
    isnew,
  } = formData;
  const [documents, setDocument] = useState(null);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    saveEmployment(formData,history);
  };

  const onSubmitinsuff = (e) => {
    e.preventDefault();
    console.log(formData);
    saveInsuffEmployment(formData,history);
    setShowModal(false);
  };

  useEffect(() => {
    setFormData({
      name: location.state && location.state.name ? location.state.name : "",
      id: location.state && location.state._id ? location.state._id : "",
      mobile:
        location.state && location.state.mobile ? location.state.mobile : "",
      alternateMobile:
        location.state && location.state.alternateMobile
          ? location.state.alternateMobile
          : "",
      email: location.state && location.state.email ? location.state.email : "",
      motherName:
        location.state && location.state.motherName
          ? location.state.motherName
          : "",
      fatherName:
        location.state && location.state.fatherName
          ? location.state.fatherName
          : "",
      aadharCard:
        location.state && location.state.aadharCard
          ? location.state.aadharCard
          : "",
      passport:
        location.state && location.state.passport
          ? location.state.passport
          : "",
      DOB: location.state && location.state.DOB ? location.state.DOB : "",
      maritialStatus:
        location.state && location.state.maritialStatus
          ? location.state.maritialStatus
          : "",
      nationality:
        location.state && location.state.nationality
          ? location.state.nationality
          : "",
      employerName:
        location.state && location.state.employerName
          ? location.state.employerName
          : "",
      companyName:
        location.state && location.state.companyName
          ? location.state.companyName
          : "",
      dateOfJoining:
        location.state && location.state.dateOfJoining
          ? location.state.dateOfJoining
          : "",
      dateOfRelieving:
        location.state && location.state.dateOfRelieving
          ? location.state.dateOfRelieving
          : "",
      supervisorManager:
        location.state && location.state.supervisorManager
          ? location.state.supervisorManager
          : "",
      designation:
        location.state && location.state.designation
          ? location.state.designation
          : "",
      employeeCode:
        location.state && location.state.employeeCode
          ? location.state.employeeCode
          : "",
          verifierDesignation:
        location.state && location.state.verifierDesignation
          ? location.state.verifierDesignation
          : "",
          verifierContact:
        location.state && location.state.verifierContact
          ? location.state.verifierContact
          : "",
          verificationMode:
        location.state && location.state.verificationMode
          ? location.state.verificationMode
          : "",
          verifiedBy:
        location.state && location.state.verifiedBy
          ? location.state.verifiedBy
          : "",
          additionalComments:
        location.state && location.state.additionalComments
          ? location.state.additionalComments
          : "",
          companyRegistered:
        location.state && location.state.companyRegistered
          ? location.state.companyRegistered
          : "",
          exitFormality:
        location.state && location.state.exitFormality
          ? location.state.exitFormality
          : "",
          eligibilityForRehire:
        location.state && location.state.eligibilityForRehire
          ? location.state.eligibilityForRehire
          : "",
          disciplinaryIssue:
        location.state && location.state.disciplinaryIssue
          ? location.state.disciplinaryIssue
          : "",
    });
  }, []);
  // console.log(location.state)
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 mt-10">
        <div>
          {" "}
          Report ID : {location.state.ReportID && location.state.ReportID}{" "}
        </div>
        <div>
          {" "}
          <span>
            Client Name :{" "}
            {location.state.caseID.clientName.name &&
              location.state.caseID.clientName.name}
          </span>{" "}
        </div>
        <div>Candidate Name : {location.state.name && location.state.name}</div>
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
            <a
              href={location.state.document && location.state.document}
              download=""
            >
              Download
            </a>
          </span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-10"></div>
      <div className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-full px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Full Name
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="name"
                value={name}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Mobile
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="mobile"
                value={mobile}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Alternate Mobile
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="alternateMobile"
                value={alternateMobile}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="email"
                value={email}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Mother Name
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="motherName"
                value={motherName}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Father Name
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="fatherName"
                value={fatherName}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Aadhar Card
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="aadharCard"
                value={aadharCard}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Passport
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="passport"
                value={passport}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                DOB
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="DOB"
                value={DOB}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Material Status
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="maritialStatus"
                value={maritialStatus}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Nationality
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="nationality"
                value={nationality}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="border-2 border-white-900 w-full flex m-auto "></div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Employment details
            </label>
          </div>
          <div className="md:w-full flex px-3 mb-6 md:mb-0">
            <label className="flex uppercase w-1/3  text-grey-darker text-xs font-bold mb-2">
              Employeer Name
            </label>
            <input
              className="appearance-none w-2/3 bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              type="text"
              name="employerName"
              value={employerName}
              placeholder=""
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Name Of Company
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="companyName"
                value={companyName}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Date Of Joining
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="dateOfJoining"
                value={dateOfJoining}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Date Of Relieving
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="dateOfRelieving"
                value={dateOfRelieving}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Supervisor Manager
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                type="text"
                name="supervisorManager"
                value={supervisorManager}
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Desigination
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="designation"
                value={designation}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                Employee Code
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="employeeCode"
                value={employeeCode}
                id=""
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                ELIGIBILITY FOR REHIRE
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                type="text"
                name="eligibilityForRehire"
                value={eligibilityForRehire}
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                ANY INTEGRITY / DISCIPLINARY ISSUES
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="disciplinaryIssue"
                value={disciplinaryIssue}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                EXIT FORMALITIES COMPLETED / PENDING
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="exitFormality"
                value={exitFormality}
                id=""
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                ADDITIONAL COMMENTS
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                type="text"
                name="additionalComments"
                value={additionalComments}
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                COMPANY REGISTERED UNDER REGULATORY AUTHORITIES
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="companyRegistered"
                value={companyRegistered}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                VERIFIED BY
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="verifiedBy"
                value={verifiedBy}
                id=""
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                DESIGNATION OF VERIFIER
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                type="text"
                name="verifierDesignation"
                value={verifierDesignation}
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                CONTACT DETAIL OF VERIFIER(EMAIL/PHONE)
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="verifierContact"
                value={verifierContact}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                MODE OF VERIFICATION
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                name="verificationMode"
                value={verificationMode}
                id=""
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Save
          </button>
          <button className="bg-yellow-500 ml-3 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Assign Vendor
          </button>
          <button
            className="bg-red-500 ml-3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => setShowModal(true)}
            type="button"
          >
            Insufficent
          </button>
          <button className="bg-green-500 ml-3 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
        </form>
        {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Insufficent</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form
                  id="myForm"
                  class="mt-7 "
                  onSubmit={(e) => onSubmitinsuff(e)}
                >
                  <div className="flex flex-col mt-4 mb-4">
                    <input
                      id="remarkInsuffL2"
                      type="text"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="remarkInsuffL2"
                      placeholder="Remark"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </div>
    </div>
  );
};

FillData.propTypes = {
  saveEmployment: PropTypes.func.isRequired,
  saveInsuffEmployment:PropTypes.func.isRequired,
};

export default connect(null, { saveEmployment,saveInsuffEmployment })(withRouter(FillData));
