import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addressSubmit,
  addressInsuff,
  getAddressbyID,
} from "../../actions/initiation";
const Address = ({
  addressSubmit,
  caseId,
  reportId,
  index,
  addressInsuff,
  getAddressbyID,
  address,
  repID
}) => {
  const [formData, setFormData] = useState({
    caseID: caseId,
    parentReportID: reportId,
    ReportID: `${reportId}add-${Math.floor(Math.random() * 100)}`,
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
    street: "",
    pincode: "",
    city: "",
    state: "",
    from: "",
    to: "",
    landmark: "",
    remark: "",
  });
  const [showModal, setShowModal] = React.useState(false);
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
    aadharCard,
    passport,
    DOB,
    maritialStatus,
    nationality,
    street,
    pincode,
    city,
    state,
    from,
    to,
    landmark,
    remark,

  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addressSubmit(formData, documents);
  };
  const onSubmitinsuff = (e) => {
    e.preventDefault();
    console.log(formData);
    addressInsuff(formData);
    setShowModal(false);
  };
  useEffect(() => {
    if (repID) {
      getAddressbyID(repID);
    }
  }, []);
  useEffect(() => {
    setFormData({
      name: address && address.name ? address.name : "",
      caseID: address && address.caseID ? address.caseID : caseId,
      parentReportID:
        address && address.parentReportID
          ? address.parentReportID
          : reportId,
      ReportID:
        address && address.ReportID
          ? address.ReportID
          : `${reportId}edu-${Math.floor(Math.random() * 100)}`,
      mobile: address && address.mobile ? address.mobile : "",
      alternateMobile:
        address && address.alternateMobile ? address.alternateMobile : "",
      email: address && address.email ? address.email : "",
      motherName: address && address.motherName ? address.motherName : "",
      fatherName: address && address.fatherName ? address.fatherName : "",
      aadharCard: address && address.aadharCard ? address.aadharCard : "",
      passport: address && address.passport ? address.passport : "",
      DOB: address && address.DOB ? address.DOB : "",
      maritialStatus:
        address && address.maritialStatus ? address.maritialStatus : "",
      nationality:
        address && address.nationality ? address.nationality : "",
      street:
        address && address.street ? address.street : "",
      pincode:
        address && address.pincode ? address.pincode : "",
      city: address && address.city ? address.city : "",
      state:
        address && address.state ? address.state : "",
      from:
        address && address.from ? address.from : "",
      to:
        address && address.to ? address.to : "",
      landmark:
        address && address.landmark
          ? address.landmark
          : "",
      remark: address && address.remark ? address.remark : "",
      
      isnew: false,
    });
  }, [address]);
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
        <div className="border-2 border-fuchsia-900 w-full flex m-auto "></div>

        <div className="md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
            Address
          </label>
        </div>
        <div className="md:w-full flex px-3 mb-6 md:mb-0">
          <label className="flex uppercase w-1/3  text-grey-darker text-xs font-bold mb-2">
            Street No
          </label>
          <input
            className="appearance-none w-2/3 bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
            type="text"
            name="street"
            placeholder=""
            value={street}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              City
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="city"
              type="text"
              placeholder=""
              value={city}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              PinCode
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="pincode"
              type="text"
              placeholder=""
              value={pincode}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              State
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="state"
              type="text"
              placeholder=""
              value={state}
              onChange={(e) => onChange(e)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              LandMark
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              type="text"
              name="landmark"
              placeholder=""
              value={landmark}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              Start Date
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              id=""
              name="from"
              type="text"
              placeholder=""
              value={from}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
              End Date
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-1 px-2 mb-3"
              name="universityLocation"
              id=""
              type="text"
              name="to"
              placeholder=""
              value={to}
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

Address.propTypes = {
  addressSubmit: PropTypes.func.isRequired,
  addressInsuff: PropTypes.func.isRequired,
  getAddressbyID: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  address: state.initiation.address,
  repID: state.initiation.reportID,
});

export default connect(mapStateToProps, {
  addressSubmit,
  addressInsuff,
  getAddressbyID,
})(Address);
