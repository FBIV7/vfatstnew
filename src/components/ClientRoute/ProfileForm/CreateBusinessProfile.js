import React, { useState } from "react";
import PropTypes from "prop-types";
import { createBusiness,updateImage } from "../../../actions/profile";
import { connect } from "react-redux";
import axios from "axios";

const CreateBusinessProfile = ({profile :{profile,loading} ,createBusiness,updateImage}) => {
  const [companyDetail, setCompanyDetail] = useState({
    companyName: "",
    year: "",
    CEOname: "",
    contactName: "",
    websiteURL: "",
  });
  const [Address, setAddress] = useState({
    building: "",
    street: "",
    landmark: "",
    locality: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const [statutarydetails, setStatutaryDetails] = useState({
    gstin: "",
    TAN: "",
    importExportCode: "",
    pan_number: "",
    cin_number: "",
    gst_certificate: "",
  });
  const [bank_account, setBankAccount] = useState({
    IFSC_code: "",
    bank_name: "",
    importExportCode: "",
    account_number: "",
    account_type: "",
  });
  const [business_nature, setBusinessNature] = useState({
    primary_business: "",
    employee: "",
    ownership_type: "",
    annual_turnover: "",
    secondary_business: "",
  });
  const [pancard , setPancard] = useState('')
  const [agreement , setAgreement] = useState('')
  const [gst , setGST] = useState('')
  const [other , setOther] = useState('')
  let { companyName, year, CEOname, contactName, websiteURL } = companyDetail;
  let {
    building,
    street,
    landmark,
    locality,
    city,
    state,
    country,
    pincode,
  } = Address;
  let {
    gstin,
    TAN,
    importExportCode,
    pan_number,
    cin_number,
    gst_certificate,
  } = statutarydetails;
  let {
    IFSC_code,
    bank_name,
    
    account_number,
    account_type,
  } = bank_account;
  let {
    primary_business,
    employee,
    ownership_type,
    annual_turnover,
    secondary_business,
  } = business_nature;
  
  const company = (e) =>  setCompanyDetail({ ...companyDetail, [e.target.name]: e.target.value });
  const address = (e) =>  setAddress({ ...Address, [e.target.name]: e.target.value });
  const  statutary = (e) =>  setStatutaryDetails({ ...statutarydetails, [e.target.name]: e.target.value });
  const bank = (e) =>  setBankAccount({ ...bank_account, [e.target.name]: e.target.value });
  const business = (e) =>  setBusinessNature({ ...business_nature, [e.target.name]: e.target.value });
const submitPancard = (e) => setPancard(e.target.files[0])
const submitGST = (e) => setGST(e.target.files[0])
const submitAgreement = (e) =>setAgreement(e.target.files[0])
const submitother = (e) => setOther(e.target.files[0])

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log();
    
    const formData = new FormData();
    formData.append('pancard', pancard);
    formData.append('gst',gst);
    formData.append('agreement', agreement);
    formData.append('other', other);
   
    createBusiness({companyDetail,Address,statutarydetails,bank_account,business_nature})
    updateImage(formData);
  }


  return (
    <div className="bg-white min-h-screen pt-2 font-mono my-16">
      <div className="container mx-auto">
        <div className="inputs w-full max-w-2xl p-6 mx-auto">
          <span className="text-5xl uppercase tracking-wide font-bold text-gray-900">Business Details</span>
          <form className="mt-6  pt-4" onSubmit={e => onSubmit(e)}  method="post" enctype="multipart/form-data">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="personal w-full border-t border-gray-400 pt-4">
                <h2 className="text-2xl uppercase tracking-wide font-bold text-gray-900">Company Detail:</h2>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Company Name</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="companyName"
                        onChange={e => company(e)} 
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Year</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="year"
                      onChange={e => company(e)} 
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >CEO Name</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="CEOname"
                      onChange={e => company(e)} 
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Contact Person</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="contactName"
                      onChange={e => company(e)} 
                      required
                    />
                  </div>
                </div>
                <div className="w-full md:w-full px-3 mb-3">
                  <label className='block  tracking-wide text-gray-700 text-xs  mb-1'>Website URL</label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                    type="text"
                    name="websiteURL"
                    onChange={e => company(e)} 
                    required
                  />
                </div>
              </div>

              <div className="personal w-full border-t border-gray-400 pt-4">
                <h2 className="text-2xl uppercase tracking-wide font-bold text-gray-900">Address:</h2>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Building</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="building"
                      onChange={e => address(e)} 
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Street</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="street"
                      onChange={e => address(e)} 
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Landmark</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="landmark"
                      onChange={e => address(e)} 
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Locality</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="locality"
                      onChange={e => address(e)} 
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >City</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="city"
                      onChange={e => address(e)} 
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >State</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="state"
                      onChange={e => address(e)} 
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Country</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="country"
                      onChange={e => address(e)} 
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Pincode</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="pincode"
                      onChange={e => address(e)} 
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="personal w-full border-t border-gray-400 pt-4">
                <h2 className="text-2xl uppercase tracking-wide font-bold text-gray-900">Statutary Details:</h2>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >GSTIN</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="gstin"
                      onChange={e => statutary(e)} 
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >TAN</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="TAN"
                      onChange={e => statutary(e)} 
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Import Export Code</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="importExportCode"
                      onChange={e => statutary(e)} 
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Pan Number</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="pan_number"
                      onChange={e => statutary(e)} 
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >CIN Number</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="cin_number"
                      onChange={e => statutary(e)} 
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >GST Certificate</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="gst_certificate"
                      onChange={e => statutary(e)} 
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="personal w-full border-t border-gray-400 pt-4">
                <h2 className="text-2xl uppercase tracking-wide font-bold text-gray-900">Bank Account:</h2>
    <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >IFSC Code</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="IFSC_code"
                      onChange={e => bank(e)} 
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Bank Name</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="bank_name"
                      onChange={e => bank(e)}
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Account Number</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="account_number"
                      onChange={e => bank(e)}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Account Type</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="account_type"
                      onChange={e => bank(e)}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="personal w-full border-t border-gray-400 pt-4">
                <h2 className="text-2xl text-gray-900">Business Nature:</h2>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Primary Business</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="primary_business"
                      onChange={e => business(e)}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >No. of Employee</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="employee"
                      onChange={e => business(e)}
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Ownership Type</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="ownership_type"
                      onChange={e => business(e)}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Annual Trunover</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="annual_turnover"
                      onChange={e => business(e)}
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-full md:w-1/2 px-3 mb-3">
                    <label className='block  tracking-wide text-gray-700 text-xs  mb-1' >Secondary Business</label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name="secondary_business"
                      onChange={e => business(e)}
                      required
                    />
                  </div>
                </div>

                <div className=''>
                  <div className='flex '>
                  <div class="flex mx-auto justify-center bg-grey-lighter">
                    <label class="w-64 h-44 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-900">
                    { pancard ==="" ?
                        <div><svg
                        class="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-2 text-base leading-normal">
                        Select a file
                      </span></div>  : <img src={URL.createObjectURL(pancard)} className='w-64 h-full' />
                       } 
                      <input name='pancard' type="file" class="hidden"  onChange={e => submitPancard(e)}/>
                    </label>
                  </div>
                  <div class="flex mx-auto  justify-center bg-grey-lighter">
                    <label class="w-64 h-44 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-900">
                    { gst ==="" ?
                        <div><svg
                        class="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-2 text-base leading-normal">
                        Select a file
                      </span></div>  : <img src={URL.createObjectURL(gst)} className='w-64 h-full' />
                       } 
                      <input name='gst' type="file" class="hidden" onChange={e => submitGST(e)} />
                    </label>
                  </div>
                  </div>

                  <div className='flex mt-5'>
                  <div class="flex mx-auto justify-center bg-grey-lighter">
                    <label class="w-64 h-44 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-900">
                    { agreement ==="" ?
                        <div><svg
                        class="w-8 h-8 align-bottom"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-2 text-base leading-normal">
                        Select a file
                      </span></div>  : <img src={URL.createObjectURL(agreement)} className='w-64 h-full' />
                       } 
                      <input type="file" name='agreement' class="hidden" onChange={e => submitAgreement(e)} />
                    </label>
                  </div>
                  <div class="flex mx-auto  justify-center bg-grey-lighter">
                    <label class="w-64 h-44 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-900">
                    { other ==="" ?
                        <div className='block align-middle'><svg
                        class="w-8 h-8"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-2 text-base leading-normal">
                        Select a file
                      </span></div>  : <img src={URL.createObjectURL(other)} className='w-64 h-full' />
                       } 
                      <input type="file" name='other' class="hidden" onChange={e => submitother(e)} />
                    </label>
                  </div>
                  </div>
                  
                 
                </div>

                <div className="flex justify-end mt-5">
                  <button
                    className="appearance-none bg-gray-900 text-white px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                    type="submit"
                  >
                    save changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

CreateBusinessProfile.propTypes = {
    createBusiness: PropTypes.func.isRequired,
    updateImage:PropTypes.func.isRequired,
};
const mapStateToProps = state =>({
    profile:state.profile,
})

export default connect(mapStateToProps,{createBusiness,updateImage})(CreateBusinessProfile);
