import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { educationSubmit } from "../../actions/initiation";
const Education = ({ caseId, reportId, index, educationSubmit }) => {
  const [formData, setFormData] = useState({
    caseID: caseId,
    parentReportID: reportId,
    ReportID: `${reportId}edu-${Math.floor(Math.random() * 100)}`,
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
    certificateName: "",
    educationMode: "",
    degreeName: "",
    specialization: "",
    collegeName: "",
    universityName: " ",
    universityLocation: " ",
    startDate: "",
    endDate: "",
    registartionNumber: "",
    yearOfPassing: "",
    grade: "",
  });
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
    certificateName,
    educationMode,
    degreeName,
    specialization,
    collegeName,
    universityName,
    universityLocation,
    startDate,
    endDate,
    registartionNumber,
    yearOfPassing,
    grade,
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    educationSubmit(formData);
  };
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
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Material Status
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              name="materialStatus"
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
              type="text"
              placeholder=""
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Education Qualification
          </label>
        </div>
        <div className="md:w-full flex px-3 mb-6 md:mb-0">
          <label className="flex uppercase w-1/3  text-grey-darker text-xs font-bold mb-2">
            Name on Certificate
          </label>
          <input
            className="appearance-none w-2/3 bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
            type="text"
            name="certificateName"
            placeholder=""
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Mode of Education
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="educationMode"
              type="text"
              placeholder=""
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Name of Examination
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="degreeName"
              type="text"
              placeholder=""
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Specialization
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="specialization"
              type="text"
              placeholder=""
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Name Of College/Institute
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              type="text"
              name="collegeName"
              placeholder=""
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Name Of University
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="universityName"
              type="text"
              placeholder=""
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              University Location
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              name="universityLocation"
              id=""
              type="text"
              placeholder=""
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Start Date
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="startDate"
              type="text"
              placeholder=""
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              End Date{" "}
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="endDate"
              type="text"
              placeholder=""
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              SeatNo / Roll No / Regn No
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="registrationNumber"
              type="text"
              placeholder=""
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Year Of Passing
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="yearOfPassing"
              type="text"
              placeholder=""
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              % of Marks/ Grade
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="grade"
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
      </form>
    </div>
  );
};

Education.propTypes = {
  educationSubmit: PropTypes.func.isRequired,
};

export default connect(null, { educationSubmit })(Education);
