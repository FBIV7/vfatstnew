import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getClient, addPackage } from "../../actions/clientRegistration";

const AddPackage = ({ client, getClient, addPackage }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [display, setDisplay] = useState(null);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    educationCheck: "",
    addressCheck: "",
    criminalCheck: "",
    drugCheck: "",
    referanceCheck: "",
    cost: "",
  });
  const {
    name,
    educationCheck,
    addressCheck,
    criminalCheck,
    drugCheck,
    referanceCheck,
    cost,
    id,
  } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    addPackage(formData);
    setShowModal(false)
  };
  const onClick = (e) => {
    // setDisplay(e);
    setFormData({ ...formData, id: e._id });
    setShowModal(true);
  };
  useEffect(() => {
    getClient();
  }, []);
  return (
    <div>
      <table class="table-fixed text-left w-full ">
        <thead className="bg-black flex text-white w-full">
          <tr class="flex w-full mb-4">
            <th class="mx-auto ...">Client Name</th>
            <th class="mx-auto ...">Aggrement </th>
            <th class="mx-auto ...">Start Date</th>
            <th class="mx-auto ...">End Date</th>
            <th class="mx-auto ...">Add Package</th>
            <th class="mx-auto ...">Add Pricing</th>
          </tr>
        </thead>
        <tbody
          className="flex flex-col items-center  overflow-y-scroll w-full "
          style={{ height: "50vh" }}
        >
          {!(client === null) &&
            client.map((e) => {
              return (
                <tr
                  className="flex w-full "
                  key={e._id}
                  onClick={(f) => setDisplay(e)}
                >
                  <td className="mx-auto">{e.name}</td>
                  <td className="mx-auto"> {e.agreement} </td>
                  <td className="mx-auto"> {e.startDate} </td>
                  <td className="mx-auto"> {e.endDate} </td>
                  <td className="mx-auto">
                    {" "}
                    <button className="" onClick={(f) => onClick(e)}>
                      Add Package
                    </button>{" "}
                  </td>
                  <td className="mx-auto">
                    {" "}
                    <button
                      className=""
                      // onClick={(f) => onClick(e)}
                    >
                      Add Pricing
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Package</h3>
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
                <form class="mt-7 " onSubmit={(e) => onSubmit(e)}>
                  <div className="flex flex-col mt-4">
                    <input
                      id="name"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="name"
                      placeholder="Name"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="educationCheck"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="educationCheck"
                      placeholder="Education Check"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="referanceCheck"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="referanceCheck"
                      placeholder="Referance Check"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="drugCheck"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="drugCheck"
                      placeholder="Drug Check"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="addressCheck"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="addressCheck"
                      placeholder="Address Check"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="criminalCheck"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="criminalCheck"
                      placeholder="Criminal Check"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="cost"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="cost"
                      placeholder="Cost"
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

      {display === null ? (
        ""
      ) : (
        <div className="mt-10 block bg-grey-100 border-t border-gray-400 ">
         
<div> Client Name:- {display.name}</div>
          <table class="table-fixed text-left w-full ">
            <thead className="bg-black flex text-white w-full">
              <tr class="flex w-full mb-4">
                <th class="mx-auto ..."> Name</th>
                <th class="mx-auto ...">Education </th>
                <th class="mx-auto ...">Address</th>
                <th class="mx-auto ...">Drug</th>
                <th class="mx-auto ...">Criminal</th>
                <th class="mx-auto ...">Cost</th>
              </tr>
            </thead>
            <tbody
              className="flex flex-col items-center  overflow-y-scroll w-full "
              style={{ height: "50vh" }}
            >
              {display.package &&
                display.package.map((e) => {
                  return (
                    <tr className="flex w-full " key={e._id}>
                      <td className="mx-auto">{e.name}</td>
                      <td className="mx-auto"> {e.educationCheck} </td>
                      <td className="mx-auto"> {e.addressCheck} </td>
                      <td className="mx-auto"> {e.drugCheck} </td>
                      <td className="mx-auto"> {e.criminalCheck} </td>
                      <td className="mx-auto"> {e.cost} </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

AddPackage.propTypes = {
  getClient: PropTypes.func.isRequired,
  addPackage: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  client: state.clientRegistration.client,
});

export default connect(mapStateToProps, { getClient, addPackage })(AddPackage);
