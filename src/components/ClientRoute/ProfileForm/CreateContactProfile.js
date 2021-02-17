import React,{useState} from "react";
import PropTypes from "prop-types";
import { createProfile } from "../../../actions/profile";
import { connect } from "react-redux";

const CreateContactProfile = ({createProfile}) => {

    const [formData, setFormData] = useState({
        contactPersonName: "",
        desigination: "",
        mobile: "",
        alternateMobile: "",
        landline: "",
        fax: "",
      });
    
      let {contactPersonName,desigination,mobile,alternateMobile,landline,fax} = formData;
    
    
      const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
    
        const onSubmit = (e) => {
            e.preventDefault();
            // console.log(formData);
            createProfile(formData);
        }
  return (
    <div className="bg-white min-h-screen pt-2 font-mono my-16">
      <div className="container mx-auto">
        <div className="inputs w-full max-w-2xl p-6 mx-auto">
          <div className="text-5xl text-gray-900">CONTACT DETAIL</div>
          <form className="mt-6  pt-4" onSubmit={(e) => onSubmit(e)}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="personal w-full border-t border-gray-400 pt-4">
                <div className="flex items-center justify-between mt-4">
                  <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Contact Person Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name='contactPersonName'
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Desigination
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name='desigination'
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Mobile Number
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name='mobile'
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Alternate Mobile Number
                    </label>
                    <input
                      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                      type="text"
                      name='alternateMobile'
                      onChange={(e) => onChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Landline Number
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                    type="text"
                    name='landline'
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="w-full md:w-full px-3 mb-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Fax
                  </label>
                  <input
                    className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-2 px-3 leading-tight focus:outline-none  focus:border-gray-500"
                    type="text"
                    name='fax'
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
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
    </div>  );
};

CreateContactProfile.propTypes = {
    createProfile : PropTypes.func.isRequired,
};

export default connect(null,{createProfile})(CreateContactProfile);
