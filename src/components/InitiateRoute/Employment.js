import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  employmentSubmit,
  employmentInsuff,
  getEmploymentbyID,
  employmentUpdate
} from "../../actions/initiation";

const Employment = ({
  employmentSubmit,
  caseId,
  reportId,
  index,
  employmentInsuff,
  getEmploymentbyID,
  repID,
  history,
  employment,
  employmentUpdate
}) => {
  const [formData, setFormData] = useState({
    caseID: caseId,
    parentReportID: reportId,
    ReportID: `${reportId}emp-${Math.floor(Math.random() * 100)}`,
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
    isnew: true,
  });
  const [showModal, setShowModal] = React.useState(false);

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
    employerName,
    companyName,
    dateOfJoining,
    dateOfRelieving,
    supervisorManager,
    designation,
    employeeCode,
    remark,
    isnew,
  } = formData;
  const [documents, setDocument] = useState(null);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    if(isnew===true){
    employmentSubmit(formData, documents);
    } else if (isnew===false){
      const body = JSON.stringify(formData);
      var data = new FormData();
      data.append("form", body);
      data.append("documents", documents);
      employmentUpdate(data,history)
    }  
  };
  const onSubmitinsuff = (e) => {
    e.preventDefault();
    console.log(formData);
    employmentInsuff(formData,documents);
    setShowModal(false);
  };
  useEffect(() => {
    if (repID) {
      getEmploymentbyID(repID);
    }
  }, []);

useEffect(() => {
  setFormData({
    name: employment && employment.name ? employment.name : "",
    caseID: employment && employment.caseID ? employment.caseID : caseId,
    parentReportID:
      employment && employment.parentReportID
        ? employment.parentReportID
        : reportId,
    ReportID:
      employment && employment.ReportID
        ? employment.ReportID
        : `${reportId}emp-${Math.floor(Math.random() * 100)}`,
    mobile: employment && employment.mobile ? employment.mobile : "",
    alternateMobile:
      employment && employment.alternateMobile ? employment.alternateMobile : "",
    email: employment && employment.email ? employment.email : "",
    motherName: employment && employment.motherName ? employment.motherName : "",
    fatherName: employment && employment.fatherName ? employment.fatherName : "",
    aadharCard: employment && employment.aadharCard ? employment.aadharCard : "",
    passport: employment && employment.passport ? employment.passport : "",
    DOB: employment && employment.DOB ? employment.DOB : "",
    maritialStatus:
      employment && employment.maritialStatus ? employment.maritialStatus : "",
    nationality:
      employment && employment.nationality ? employment.nationality : "",
    employerName:
      employment && employment.employerName ? employment.employerName : "",
    companyName:
      employment && employment.companyName ? employment.companyName : "",
    dateOfJoining: employment && employment.dateOfJoining ? employment.dateOfJoining : "",
    dateOfRelieving:
      employment && employment.dateOfRelieving ? employment.dateOfRelieving : "",
    supervisorManager:
      employment && employment.supervisorManager ? employment.supervisorManager : "",
    designation:
      employment && employment.designation ? employment.designation : "",
    employeeCode:
      employment && employment.employeeCode
        ? employment.employeeCode
        : "",
  
    isnew: employment ? false : true,
  })
}, [employment])
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
             value ={alternateMobile}
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

Employment.propTypes = {
  employmentSubmit: PropTypes.func.isRequired,
  employmentInsuff: PropTypes.func.isRequired,
  getEmploymentbyID: PropTypes.func.isRequired,
  employmentUpdate:PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  repID: state.initiation.reportID,
  employment:state.initiation.employment
});

export default connect(mapStateToProps, {
  employmentSubmit,
  employmentInsuff,
  getEmploymentbyID,
  employmentUpdate
})(withRouter(Employment));
