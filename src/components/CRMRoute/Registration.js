import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addCase, getPackage, getClient } from "../../actions/CRM";

const Registration = ({ packages, addCase, getPackage, getClient, client,history }) => {
  const [formData, setFormData] = useState({
    clientName: "",
    candidateName: "",
    pack: "",
    reportId: "",
    educationTAT: "",
    addressTAT: "",
    criminalTAT: "",
    drugTAT: "",
    referanceTAT: "",
    blueCollarReferanceTAT: "",
    employmentTAT:"",
    documents: "",
  });
  // const [documents, setDocument] = useState(null);
  const [packagess, setPackage] = useState(null);
  const {
    criminalTAT,
    educationTAT,
    drugTAT,
    referanceTAT,
    clientName,
    candidateName,
    pack,
    reportId,
    addressTAT,
    blueCollarReferanceTAT,
    employmentTAT,
    documents,
  } = formData;

  const date = new Date();
  var report =
    "VF-" +
    Math.random().toString(36).substring(7) +
    date.getMonth() +
    "/" +
    date.getFullYear();

  //   console.log(report);
  const onHandle = (e) => {
    setFormData({
      ...formData,
      clientName: document.getElementById("check").value,
      reportId: report,
    });
    let data = client.filter((g) => {
      return g._id === document.getElementById("check").value;
    });
    data.map((e) => {
      setPackage(e.package);
    });
  };
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      reportId: report,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // const data = new FormData();
    // data.append("formData", formData);
    // // Data.append("formData", formData);
    console.log(formData);
    addCase(formData, documents,history);
  };
  useEffect(() => {
    if (packagess) {
      packagess.map((e) => {
        if (e._id === document.getElementById("checks").value) {
          setFormData({
            ...formData,
            educationTAT: e && e.educationTAT ? e.educationTAT : 0,
            addressTAT: e && e.addressTAT ? e.addressTAT : 0,
            criminalTAT: e && e.criminalTAT ? e.criminalTAT : 0,
            drugTAT: e && e.drugTAT ? e.drugTAT : 0,
            referanceTAT: e && e.referanceTAT ? e.referanceTAT : 0,
            blueCollarReferanceTAT:
              e && e.blueCollarReferanceTAT ? e.blueCollarReferanceTAT : 0,
              employmentTAT: e && e.employmentTAT ? e.employmentTAT :0
          });
        }
      });
    }
  }, [pack]);
  useEffect(() => {
    //getPackage();
    getClient();
  }, []);
  return (
    <div class="flex flex-col h-screen bg-gray-100">
      <div class="grid place-items-center  my-20 sm:my-auto">
        <div
          class="w-4/5 p-12 sm:w-4/5 md:w-3/4 lg:w-3/4 2xl:w-3/5
                        px-6 py-10 sm:px-10 sm:py-6 
                        bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h1 class="text-center font-bold text-5xl lg:text-4xl text-gray-800">
            Register
          </h1>

          <form
            className="form-horizontal w-3/4 mx-auto"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="flex flex-col mt-4">
              <select
                id="check"
                name="check"
                class=""
                onChange={(f) => {
                  onHandle(f);
                }}
              >
                <option value="">select Client</option>

                {client &&
                  client.map((e) => {
                    return (
                      <option key={e._id} value={e._id}>
                        {e.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="flex flex-col mt-4">
              <input
                id="candidateName"
                type="text"
                className="flex-grow h-8 px-2 rounded border border-grey-400"
                name="candidateName"
                placeholder="Candidate Name"
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="flex flex-col mt-4">
              <select
                id="checks"
                name="checks"
                class=""
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    pack: document.getElementById("checks").value,
                    reportId: report,
                  })
                }
              >
                <option value="">select package</option>

                {packagess &&
                  packagess.map((e) => {
                    return (
                      <option key={e._id} value={e._id}>
                        {e.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="flex flex-col mt-4">
              <input
                type="file"
                name="documents"
                onChange={(e) =>
                  setFormData({ ...formData, documents: e.target.files[0] })
                }
              ></input>
            </div>

            <div className="flex flex-col mt-8">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
              >
                Add Case
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Registration.propTypes = {
  addCase: PropTypes.func.isRequired,
  getPackage: PropTypes.func.isRequired,
  getClient: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  packages: state.CRM.package,
  client: state.CRM.client,
});
export default connect(mapStateToProps, { addCase, getPackage, getClient })(
  withRouter(Registration)
);
