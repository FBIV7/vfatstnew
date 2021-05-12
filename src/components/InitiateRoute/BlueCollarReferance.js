import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  BCReferenceSubmit,
  BCReferenceInsuff,
  getBluecollarbyID,
  BCreferanceUpdate,
} from "../../actions/initiation";
const BlueCollarReferance = ({
  caseId,
  BCReferenceSubmit,
  BCReferenceInsuff,
  reportId,
  getBluecollarbyID,
  bluecollar,
  repID,
  BCreferanceUpdate,
  history,
}) => {
  const [showModal, setShowModal] = React.useState(false);

  const [formData, setFormData] = useState({
    caseID: caseId,
    parentReportID: reportId,
    ReportID: `${reportId}ref-${Math.floor(Math.random() * 100)}`,
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
    referenceName: "",
    referenceMobile: "",
    referenceAlternateMobile: "",
    periodApplicant: "",
    relationApplicant: "",
    remark: "",
    isnew: true,
  });
  const [documents, setDocument] = useState(null);
  const {
    caseID,
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
    referenceName,
    referenceMobile,
    referenceAlternateMobile,
    periodApplicant,
    relationApplicant,
    remark,
    isnew,
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData, documents);
    if (isnew === true) {
      BCReferenceSubmit(formData, documents);
    } else if (isnew === false) {
      const body = JSON.stringify(formData);
      var data = new FormData();
      data.append("form", body);
      data.append("documents", documents);
      BCreferanceUpdate(data, history);
    }
  };
  const onSubmitinsuff = (e) => {
    e.preventDefault();
    console.log(formData);
    BCReferenceInsuff(formData,documents);
    setShowModal(false);
  };
  useEffect(() => {
    if (repID) {
      getBluecollarbyID(repID);
    }
  }, []);
  useEffect(() => {
    setFormData({
      name: bluecollar && bluecollar.name ? bluecollar.name : "",
      caseID: bluecollar && bluecollar.caseID ? bluecollar.caseID : caseId,
      parentReportID:
        bluecollar && bluecollar.parentReportID
          ? bluecollar.parentReportID
          : reportId,
      ReportID:
        bluecollar && bluecollar.ReportID
          ? bluecollar.ReportID
          : `${reportId}edu-${Math.floor(Math.random() * 100)}`,
      mobile: bluecollar && bluecollar.mobile ? bluecollar.mobile : "",
      alternateMobile:
        bluecollar && bluecollar.alternateMobile
          ? bluecollar.alternateMobile
          : "",
      email: bluecollar && bluecollar.email ? bluecollar.email : "",
      motherName:
        bluecollar && bluecollar.motherName ? bluecollar.motherName : "",
      fatherName:
        bluecollar && bluecollar.fatherName ? bluecollar.fatherName : "",
      aadharCard:
        bluecollar && bluecollar.aadharCard ? bluecollar.aadharCard : "",
      passport: bluecollar && bluecollar.passport ? bluecollar.passport : "",
      DOB: bluecollar && bluecollar.DOB ? bluecollar.DOB : "",
      maritialStatus:
        bluecollar && bluecollar.maritialStatus
          ? bluecollar.maritialStatus
          : "",
      nationality:
        bluecollar && bluecollar.nationality ? bluecollar.nationality : "",
      referenceName:
        bluecollar && bluecollar.referenceName ? bluecollar.referenceName : "",
      referenceMobile:
        bluecollar && bluecollar.referenceMobile
          ? bluecollar.referenceMobile
          : "",
      referenceAlternateMobile:
        bluecollar && bluecollar.referenceAlternateMobile
          ? bluecollar.referenceAlternateMobile
          : "",
      relationApplicant:
        bluecollar && bluecollar.relationApplicant
          ? bluecollar.relationApplicant
          : "",
      remark: bluecollar && bluecollar.remark ? bluecollar.remark : "",
      isnew: bluecollar ? false : true,
    });
  }, [bluecollar]);
  return (
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
              type="text"
              placeholder=""
              value={name}
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
              type="text"
              placeholder=""
              value={mobile}
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
              type="text"
              placeholder=""
              value={alternateMobile}
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
              type="text"
              placeholder=""
              value={email}
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
              type="text"
              placeholder=""
              value={motherName}
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
              type="text"
              placeholder=""
              value={fatherName}
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
              type="text"
              placeholder=""
              value={aadharCard}
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
              type="text"
              placeholder=""
              value={passport}
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
              type="text"
              placeholder=""
              value={DOB}
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
              type="text"
              placeholder=""
              value={maritialStatus}
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
              type="text"
              placeholder=""
              value={nationality}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className="border-2 border-white-900 w-full flex m-auto "></div>
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Referance
          </label>
        </div>
        <div className="md:w-full flex px-3 mb-6 md:mb-0">
          <label className="flex uppercase w-1/3  text-grey-darker text-xs font-bold mb-2">
            Referance Name
          </label>
          <input
            className="appearance-none w-2/3 bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
            type="text"
            name="referenceName"
            placeholder=""
            value={referenceName}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Mobile
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              type="text"
              name="referenceMobile"
              value={referenceMobile}
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
              id=""
              name="referenceAlternateMobile"
              type="text"
              placeholder=""
              value={referenceAlternateMobile}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Period Applicant
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              name="periodApplicant"
              id=""
              type="text"
              placeholder=""
              value={periodApplicant}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Realtion Applicant
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="relationApplicant"
              value={relationApplicant}
              type="text"
              placeholder=""
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Document
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="documents"
              type="file"
              placeholder=""
              onChange={(e) => setDocument(e.target.files[0])}
            />
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Save
        </button>
        <button
          className="bg-red-500 ml-3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={(e) => setShowModal(true)}
          type="button"
        >
          Insufficent
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
                      id="remark"
                      type="text"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="remark"
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
  );
};

BlueCollarReferance.propTypes = {
  BCReferenceSubmit: PropTypes.func.isRequired,
  BCReferenceInsuff: PropTypes.func.isRequired,
  getBluecollarbyID: PropTypes.func.isRequired,
  BCreferanceUpdate: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  bluecollar: state.initiation.bluecollar,
  repID: state.initiation.reportID,
});

export default connect(mapStateToProps, {
  BCReferenceSubmit,
  BCReferenceInsuff,
  getBluecollarbyID,
  BCreferanceUpdate,
})(withRouter(BlueCollarReferance));
