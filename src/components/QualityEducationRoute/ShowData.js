import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import {approveEdu} from "../../actions/qualityEmp"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const ShowData = ({location,approveEdu,history}) => {
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

      const onSubmit =(e)=>{
        console.log('====================================');
        console.log(true);
        console.log('====================================');
        e.preventDefault();
        approveEdu(id,history)
      }
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
        <form 
        //onSubmit={(e) => onSubmit(e)}
        >
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                // onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
              disabled
              //onChange={(e) => onChange(e)}
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
                disabled
                // onChange={(e) => onChange(e)}
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
                disabled
                // onChange={(e) => onChange(e)}
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
                disabled
                // onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                // onChange={(e) => onChange(e)}
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
                disabled
                // onChange={(e) => onChange(e)}
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
                disabled
                // onChange={(e) => onChange(e)}
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
                disabled
                // onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                //onChange={(e) => onChange(e)}
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
                disabled
                // onChange={(e) => onChange(e)}
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
                disabled
               // onChange={(e) => onChange(e)}
              />
            </div>
          </div>

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={ (e) => onSubmit(e) }
          >
            Approve
          </button>

          
          <button
            className="bg-red-500 ml-3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            //onClick={(e) => setShowModal(true)}
            type="button"
          >
            Decline
          </button>
         
        </form>
      </div>
 
        </>
    )
}

ShowData.propTypes = {
    approveEdu:PropTypes.func.isRequired,
}

export default connect(null,{approveEdu})(withRouter(ShowData))
