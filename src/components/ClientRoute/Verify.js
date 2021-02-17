import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadAddressCheck, getReport } from "../../actions/report";

const Verify = ({
  profile,
  uploadAddressCheck,
  getReport,
  report,
  report_id,
  loading,
}) => {
  const [file, setFile] = useState("");
  const [control, setControl] = useState(false);
  if (report_id !== null) {
    var result = report.find((d) => {
      return d.report_id === report_id;
    });
  }

  const onChange = (e) => {
    setFile(e.target.files[0]);
  };
  const address = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    await uploadAddressCheck(formData);
    console.log(formData);

    setControl(!control);
  };

  useEffect(() => {
    getReport();
  }, [control]);
  return profile && profile.isContact && profile.isContact === "approve" ? (
    <div>
      <div class=" mb-10 bg-gray-100">
        <div class="  sm:my-auto">
          <div
            class="w-full p-12 sm:w-full md:w-full lg:w-3/4 2xl:w-4/5
                      px-6 py-10 sm:px-10 sm:py-6 
                      bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <h1 class=" font-bold text-5xl lg:text-4xl text-gray-800">
              Address Varification
            </h1>
            <form
              className="flex justify-between mt-10"
              onSubmit={(e) => address(e)}
            >
              <input type="file" onChange={(e) => onChange(e)} />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Upload
              </button>
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Download Sample</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="  bg-gray-100 ">
        <div class="  sm:my-auto">
          <div
            class="w-4/5 p-12 sm:w-4/5 md:w-3/4 lg:w-3/4 2xl:w-4/5
                      px-6 py-10 sm:px-10 sm:py-6 
                      bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <h1 class=" font-bold text-5xl lg:text-4xl text-gray-800">
              Education Check
            </h1>
            <form className="flex mt-10">
              <input type="file" />
              <button type="submit">Upload</button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h3>file uploaded</h3>
        {}
        {/* {loading||report_id?"":<Data report={report} report_id={report_id} />} */}

        {!result ? (
          ""
        ) : (
          <table class="table-fixed">
            <thead>
              <tr>
                <th class="w-1/5 ...">Candidate Name</th>
                <th class="w-1/5 ...">Address</th>
                <th class="w-1/5 ...">State</th>
                <th class="w-1/5 ...">Pincode</th>
                <th class="w-1/5 ...">Contact</th>
              </tr>
            </thead>

            <tbody>
              {result.employee.map((e) => {
                return (
                  <tr>
                    <td>{e.info.candidateName}</td>
                    <td>{e.info.address}</td>
                    <td>{e.info.state}</td>
                    <td>{e.info.pincode}</td>
                    <td>{e.info.contact}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  ) : (
    <div>Contact to admin</div>
  );
};

Verify.propTypes = {
  uploadAddressCheck: PropTypes.func.isRequired,
  getReport: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  report: state.report.report,
  report_id: state.report.report_id,
  loading: state.report.loading,
});

export default connect(mapStateToProps, { uploadAddressCheck, getReport })(
  Verify
);
