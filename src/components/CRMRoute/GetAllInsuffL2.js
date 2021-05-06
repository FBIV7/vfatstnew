import React, {useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getInsuffL2,clearEmploymentInsuffL2,clearEducationInsuffL2 } from "../../actions/CRM";

import Moment from "react-moment";
const GetAllInsuffL2 = ({ getInsuffL2, insuff,clearEmploymentInsuffL2,clearEducationInsuffL2 }) => {
  const [showModalEducation, setShowModalEducation] = React.useState(false);
  const [showModalAddress, setShowModalAddress] = React.useState(false);
  const [showModalReferance, setShowModalReferance] = React.useState(false);
  const [showModalBluecollar, setShowModalBluecollar] = React.useState(false);
  const [showModalEmployment, setShowModalEmployment] = React.useState(false);
console.log(insuff);
  const [data, SetData] = useState({
    id: "",
    insuffRemark: "",
    documents: "",
  });
  const { id, documents, insuffRemark } = data;

  const employmentClear = (e) => {
    SetData({ ...data, id: e._id });
    setShowModalEmployment(true);
  };

  const onSubmitinsuffemp = e =>{
    e.preventDefault();
    var formData = new FormData();
    formData.append("id", id);
    formData.append("insuffRemark", insuffRemark);
    formData.append("documents", documents);
    clearEmploymentInsuffL2(formData)
    setShowModalEmployment(false)
  }

  const educationClear = e =>{
    SetData({ ...data, id: e._id });
    setShowModalEducation(true);
  }

  const onSubmitinsuffedu = e =>{
    e.preventDefault();
    var formData = new FormData();
    formData.append("id", id);
    formData.append("insuffRemark", insuffRemark);
    formData.append("documents", documents);
    clearEducationInsuffL2(formData);
    setShowModalEducation(false)
  }



  var count = 1;
  useEffect(() => {
    getInsuffL2();
  }, []);
  return (
    <div>
      <table class="table-fixed text-left w-full ">
        <thead className=" bg-gray-200 text-gray-600 flex text-white w-full">
          <tr class="flex w-full mb-4">
            <th className="w-1/5 flex justify-center">Count</th>
            <th className="w-1/5 flex justify-center">Client Name</th>
            <th class="w-1/5 flex justify-center ...">Candidate Name</th>
            <th class="w-1/5 flex justify-center ...">TAT</th>
            <th class="w-1/5 flex justify-center ...">Status</th>
            <th class="w-1/5 flex justify-center ...">Insuff Raised on</th>
            <th class="w-1/5 flex justify-center ...">remark</th>
            <th class="w-1/5 flex justify-center ...">Insuff clear</th>
            {/* <th class="w-1/3 ...">Edit</th> */}
            <th />
          </tr>
        </thead>
        <tbody
          className="flex flex-col items-center   w-full "
          style={{ height: "50vh" }}
        >
          <strong>Employment</strong>
          {!(insuff === null) &&
            insuff.employment.length > 0 &&
            insuff.employment.map((e) => {
              return (
                // <button className="flex  mx-auto w-full" onClick={(f) => onClick(e)}>

                <tr
                  className={
                    count % 2 === 0
                      ? `flex w-full  bg-gray-100 `
                      : `flex w-full  `
                  }
                  key={e._id}
                >
                  <td className="w-1/5 flex justify-center">{count++}</td>
                  <td className="w-1/5 flex justify-center">
                    {e.caseID && e.caseID.clientName && e.caseID.clientName.name
                      ? e.caseID.clientName.name
                      : "N/A"}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.name ? e.name : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.TAT ? e.TAT : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.status ? e.status : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    <Moment format="YYYY/MM/DD">
                      {e.insuffRaisedOn ? e.insuffRaisedOn : "N/A"}
                    </Moment>
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {e.remark ? e.remark : "N/A"}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    <button
                      className="bg-yellow-500 ml-3 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(f) => employmentClear(e)}
                      type="button"
                    >
                      Clear Insuff
                    </button>
                  </td>
                </tr>
              );
            })}

<strong>Education</strong>
          {!(insuff === null) &&
            insuff.education.length > 0 &&
            insuff.education.map((e) => {
              return (
                // <button className="flex  mx-auto w-full" onClick={(f) => onClick(e)}>

                <tr
                  className={
                    count % 2 === 0
                      ? `flex w-full  bg-gray-100 `
                      : `flex w-full  `
                  }
                  key={e._id}
                >
                  <td className="w-1/5 flex justify-center">{count++}</td>
                  <td className="w-1/5 flex justify-center">
                    {e.caseID && e.caseID.clientName && e.caseID.clientName.name
                      ? e.caseID.clientName.name
                      : "N/A"}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.name ? e.name : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.TAT ? e.TAT : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.status ? e.status : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    <Moment format="YYYY/MM/DD">
                      {e.insuffRaisedOn ? e.insuffRaisedOn : "N/A"}
                    </Moment>
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {e.remark ? e.remark : "N/A"}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    <button
                      className="bg-yellow-500 ml-3 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                      onClick={(f) => educationClear(e)}
                      type="button"
                    >
                      Clear Insuff
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {showModalEmployment ? (
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
                    onClick={() => setShowModalEmployment(false)}
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
                  onSubmit={(e) => onSubmitinsuffemp(e)}
                >
                  <div className="flex flex-col mt-4 mb-4">
                    <input
                      id="insuffRemark"
                      type="text"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="insuffRemark"
                      placeholder="Remark"
                      onChange={(g) =>
                        SetData({ ...data, [g.target.name]: g.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col mt-4 mb-4">
                    <input
                      id="documents"
                      type="file"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="documents"
                      onChange={(g) =>
                        SetData({ ...data, documents: g.target.files[0] })
                      }
                    />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={(f) => setShowModalEmployment(false)}
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
       {showModalEducation ? (
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
                    onClick={() => setShowModalEducation(false)}
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
                  onSubmit={(e) => onSubmitinsuffedu(e)}
                >
                  <div className="flex flex-col mt-4 mb-4">
                    <input
                      id="insuffRemark"
                      type="text"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="insuffRemark"
                      placeholder="Remark"
                      onChange={(g) =>
                        SetData({ ...data, [g.target.name]: g.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col mt-4 mb-4">
                    <input
                      id="documents"
                      type="file"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="documents"
                      onChange={(g) =>
                        SetData({ ...data, documents: g.target.files[0] })
                      }
                    />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={(f) => setShowModalEducation(false)}
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

GetAllInsuffL2.propTypes = {
  getInsuffL2: PropTypes.func.isRequired,
  clearEmploymentInsuffL2:PropTypes.func.isRequired,
  clearEducationInsuffL2:PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  insuff: state.CRM.insuffL2,
});

export default connect(mapStateToProps, { getInsuffL2,clearEmploymentInsuffL2,clearEducationInsuffL2 })(GetAllInsuffL2);
