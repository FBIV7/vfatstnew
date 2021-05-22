import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  saveEducation,
  saveInsuffEducation,
  getVendorState,
  assignVendorEDU,
  saveCheck
} from "../../actions/educationOperation";
import { withRouter } from "react-router-dom";
import { RegionDropdown } from "react-country-region-selector";
const FillData = ({
  location,
  history,
  saveEducation,
  saveInsuffEducation,
  getVendorState,
  vendor,
  assignVendorEDU,
  saveCheck
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showInsuffModal, setShowInsuffModal] = React.useState(false);
  const [showCloseModal, setShowCloseModal] = React.useState(false);
  const [temp, setTemp] = useState(null);
  const [temp2, setTemp2] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    id: "",
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
    pincode: "",
    startDate: "",
    endDate: "",
    registrationNumber: "",
    yearOfPassing: "",
    grade: "",
    remark: "",
    isnew: true,
    recognizedUnderAuthority: "",
    statusOfResult: "",
    genuineDocument: "",
    verifiedBy: "",
    verifierDesignation: "",
    verificationMode: "",
    additionalComment: "",
    verifierDetail: "",
    remarkInsuffL2: "",
    states: "",
    district: "",
    vendorId: "",
    documents: "",
    companyAddress: "",
    pincode: "",
    colourCode: "",
  });

  const {
    states,
    district,
    vendorId,
    documents,
    companyAddress,
    pincode,
    colourCode,
    recognizedUnderAuthority,
    verifierDetail,
    additionalComment,
    verificationMode,
    statusOfResult,
    verifierDesignation,
    verifiedBy,
    genuineDocument,
    name,
    id,
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
    registrationNumber,
    yearOfPassing,
    grade,
    remark,
    isnew,
    remarkInsuffL2,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    saveEducation(formData, history);
  };

  const onSubmitinsuff = (e) => {
    e.preventDefault();
    saveInsuffEducation(formData, history);
    setShowModal(false);
  };

  const onSubmitClose = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("educationid", id);
    data.append("remark", remark);
    data.append("colourCode", colourCode);
    data.append("documents", documents);
console.log("helloooo");
    saveCheck(data, history);
    setShowCloseModal(false)
  };
  useEffect(() => {
    if (states) {
      getVendorState(states);
    }
  }, [states]);
  function uniq(a) {
    return Array.from(new Set(a));
  }
  const onSubmitVendor = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("id", vendorId);
    data.append("educationid", id);
    data.append("universityName", universityName);
    data.append("universityLocation", universityLocation);
    data.append("pincode", pincode);
    data.append("remark", remark);
    data.append("documents", documents);
    assignVendorEDU(data, history);
    setShowInsuffModal(false);
  };
  useEffect(() => {
    if (vendor) {
      // vendor = vendor.flat(1)
      let data = vendor.map((e) => {
        return Array.from(e.price);
      });
      let data1 = data.flat(1);
      let data2 = data1.map((e) => {
        return e.locationName;
      });

      setTemp(uniq(data2));
    }
  }, [vendor]);
  useEffect(() => {
    if (district) {
      let data = vendor.map((e) => {
        let aa = e;
        return e.price.map((f) => {
          if (f.locationName === district) {
            return aa;
          }
        });
      });
      data = data.flat().filter(function (element) {
        return element !== undefined;
      });
      //  console.log(data);
      setTemp2(data);
    }
  }, [district]);
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
      certificateName:
        location.state && location.state.certificateName
          ? location.state.certificateName
          : "",
      educationMode:
        location.state && location.state.educationMode
          ? location.state.educationMode
          : "",
      degreeName:
        location.state && location.state.degreeName
          ? location.state.degreeName
          : "",
      specialization:
        location.state && location.state.specialization
          ? location.state.specialization
          : "",
      collegeName:
        location.state && location.state.collegeName
          ? location.state.collegeName
          : "",
      universityName:
        location.state && location.state.universityName
          ? location.state.universityName
          : "",
      universityLocation:
        location.state && location.state.universityLocation
          ? location.state.universityLocation
          : "",
      startDate:
        location.state && location.state.startDate
          ? location.state.startDate
          : "",
      endDate:
        location.state && location.state.endDate ? location.state.endDate : "",
      registrationNumber:
        location.state && location.state.registrationNumber
          ? location.state.registrationNumber
          : "",
      yearOfPassing:
        location.state && location.state.yearOfPassing
          ? location.state.yearOfPassing
          : "",
      recognizedUnderAuthority:
        location.state && location.state.recognizedUnderAuthority
          ? location.state.recognizedUnderAuthority
          : "",
      grade: location.state && location.state.grade ? location.state.grade : "",
      verifierDetail:
        location.state && location.state.verifierDetail
          ? location.state.verifierDetail
          : "",
      additionalComment:
        location.state && location.state.additionalComment
          ? location.state.additionalComment
          : "",
      verificationMode:
        location.state && location.state.verificationMode
          ? location.state.verificationMode
          : "",
      statusOfResult:
        location.state && location.state.statusOfResult
          ? location.state.statusOfResult
          : "",
      verifierDesignation:
        location.state && location.state.verifierDesignation
          ? location.state.verifierDesignation
          : "",
      verifiedBy:
        location.state && location.state.verifiedBy
          ? location.state.verifiedBy
          : "",
      genuineDocument:
        location.state && location.state.genuineDocument
          ? location.state.genuineDocument
          : "",
      isnew: location.state ? false : true,
    });
  }, []);
  return (
    <>
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
                value={name}
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
                type="number"
                value={mobile}
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
                type="number"
                value={alternateMobile}
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
                value={email}
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
                value={motherName}
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
                value={fatherName}
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
                value={aadharCard}
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
                value={passport}
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
                value={DOB}
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
                type="text"
                value={maritialStatus}
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
                value={nationality}
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="border-2 border-white-900 w-full flex m-auto "></div>
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
              value={certificateName}
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
                value={educationMode}
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
                value={degreeName}
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
                value={specialization}
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
                vlue={collegeName}
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
                value={universityName}
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
                value={universityLocation}
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
                value={startDate}
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
                value={endDate}
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
                value={registrationNumber}
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
                value={yearOfPassing}
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
                value={grade}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                RECOGNIZED UNDER REGULATORY AUTHORITY
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="recognizedUnderAuthority"
                value={recognizedUnderAuthority}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                STATUS OF RESULT
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="statusOfResult"
                value={statusOfResult}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                ARE THE PROVIDED DOCUMENTS GENUINE?
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="genuineDocument"
                value={genuineDocument}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                VERIFIED BY (PERSON NAME)
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="verifiedBy"
                value={verifiedBy}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                DESIGNATION OF VERIFIER
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="verifierDesignation"
                value={verifierDesignation}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                CONTACT DETAIL OF VERIFIER (EMAIL/PHONE)
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="verifierDetail"
                value={verifierDetail}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>

          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                MODE OF VERIFICATION
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="verificationMode"
                value={verificationMode}
                type="text"
                placeholder=""
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
                ADDITIONAL COMMENTS (IF ANY)
              </label>
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                id=""
                name="additionalComment"
                value={additionalComment}
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

          <button
            className="bg-yellow-500 ml-3 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => {
              setShowInsuffModal(true);
            }}
            type="button"
          >
            Assign Vendor
          </button>
          <button
            className="bg-red-500 ml-3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => setShowModal(true)}
            type="button"
          >
            Insufficent
          </button>
          <button
            className="bg-green-500 ml-3 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  "
            type="button"
            onClick={(e) => setShowCloseModal(true)}
          >
            Close
          </button>
        </form>
      </div>

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

      {showCloseModal ? (
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
                    onClick={() => setShowCloseModal(false)}
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
                  onSubmit={(e) => onSubmitClose(e)}
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
                  <div className="flex flex-col mt-4 mb-4">
                    <select
                      id="check"
                      name="check"
                      class=""
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          colourCode: document.getElementById("check").value,
                        })
                      }
                    >
                      <option value="">Select colour code</option>
                      <option value="green">Green</option>
                      <option value="Red">Red</option>
                      <option value="Orange">Orange</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-4 mb-4">
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                      id=""
                      name="documents"
                      type="file"
                      placeholder=""
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          documents: e.target.files[0],
                        })
                      }
                    />
                  </div>

                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowCloseModal(false)}
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

      {showInsuffModal ? (
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
                    onClick={() => setShowInsuffModal(false)}
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
                  onSubmit={(e) => onSubmitVendor(e)}
                >
                  <div className="flex flex-col mt-4 mb-4">
                    <RegionDropdown
                      type="text"
                      name="State"
                      country="India"
                      value={states}
                      blacklist={{ IN: ["AN", "DD"] }}
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      required
                      onChange={(e) => setFormData({ ...formData, states: e })}
                    />
                  </div>
                  <div className="flex flex-col mt-4 mb-4">
                    <select
                      id="check"
                      name="check"
                      class=""
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          district: document.getElementById("check").value,
                        })
                      }
                    >
                      <option value="">select Avaliable district</option>

                      {temp &&
                        temp.map((e) => {
                          return (
                            <option key={e} value={e}>
                              {e}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="flex flex-col mt-4 mb-4">
                    <select
                      id="check1"
                      name="check1"
                      class=""
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          vendorId: document.getElementById("check1").value,
                        })
                      }
                    >
                      <option value="">
                        select vendor for selected district
                      </option>

                      {temp2 &&
                        temp2.map((e) => {
                          return (
                            <option key={e._id} value={e._id}>
                              {e.name} ,
                              {e.price.map((f) => {
                                if (f.locationName === district) {
                                  return f.cost;
                                }
                              })}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="flex flex-col mt-4 mb-4">
                    <input
                      type="text"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="universityName"
                      value={universityName}
                      placeholder="University Name"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mt-4 mb-4">
                    <input
                      type="text"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="universityLocation"
                      value={universityLocation}
                      placeholder="University Address"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mt-4 mb-4">
                    <input
                      id="pincode"
                      type="text"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="pincode"
                      placeholder="Pincode"
                      onChange={(e) => onChange(e)}
                    />
                  </div>

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
                  <div className="flex flex-col mt-4 mb-4">
                    <input
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
                      id=""
                      name="documents"
                      type="file"
                      placeholder=""
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          documents: e.target.files[0],
                        })
                      }
                    />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowInsuffModal(false)}
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
    </>
  );
};

FillData.propTypes = {
  saveEducation: PropTypes.func.isRequired,
  saveInsuffEducation: PropTypes.func.isRequired,
  getVendorState: PropTypes.func.isRequired,
  assignVendorEDU: PropTypes.func.isRequired,
  saveCheck:PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  vendor: state.employmentOperation.vendor,
});
export default connect(mapStateToProps, {
  saveEducation,
  saveInsuffEducation,
  getVendorState,
  assignVendorEDU,
  saveCheck
})(withRouter(FillData));
