import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createVendorProfile, getVendorProfile } from "../../../actions/vendor";

const ContactDetail = ({
  profile: { profile, loading },
  createVendorProfile,
  history,
  getVendorProfile,
}) => {
  const [formData, setFormData] = useState({
    contactPersonName: "",
    desigination: "",
    mobile: "",
    alternateMobile: "",
    landline: "",
    fax: "",
  });

  let {
    contactPersonName,
    desigination,
    mobile,
    alternateMobile,
    landline,
    fax,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createVendorProfile(formData, history);
  };

  useEffect(() => {
    getVendorProfile();

    setFormData({
        contactPersonName:
          loading || !profile.contactPersonName ? "" : profile.contactPersonName,
        desigination:
          loading || !profile.desigination ? "" : profile.desigination,
        mobile: loading || !profile.mobile ? "" : profile.mobile,
        alternateMobile:
          loading || !profile.alternateMobile ? "" : profile.alternateMobile,
        landline: loading || !profile.landline ? "" : profile.landline,
        fax: loading || !profile.fax ? "" : profile.fax,
      });
  }, []);
  return (profile&&profile.isContact&&profile.isContact === "wait") ? (
    <div> Under verification</div>
  ) : (
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
                      name="contactPersonName"
                      value={contactPersonName}
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
                      name="desigination"
                      value={desigination}
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
                      name="mobile"
                      value={mobile}
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
                      name="alternateMobile"
                      value={alternateMobile}
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
                    name="landline"
                    value={landline}
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
                    name="fax"
                    value={fax}
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
    </div>
  );
};

ContactDetail.propTypes = {
  createVendorProfile: PropTypes.func.isRequired,
  getVendorProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.vendor,
});

export default connect(mapStateToProps, {
  createVendorProfile,
  getVendorProfile,
})(withRouter(ContactDetail));
