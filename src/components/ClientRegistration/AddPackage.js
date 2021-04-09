import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getClient, addPackage } from "../../actions/clientRegistration";

const AddPackage = ({ client, getClient, addPackage, CRM }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [display, setDisplay] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    subBU: "",
    name: "",
    educationCheck: "",
    educationCost: 0,
    educationTAT: 0,
    addressCheck: "",
    addressCost: 0,
    addressTAT: 0,
    criminalCheck: "",
    criminalCost: 0,
    criminalTAT: 0,
    drugCheck: "",
    drugCost: 0,
    drugTAT: 0,
    referanceCheck: "",
    referanceCost: 0,
    referanceTAT: 0,
    blueCollarReferanceCheck: "",
    blueCollarReferanceCost: "",
    blueCollarReferanceTAT: "",
    cost: 0,
  });
  const {
    name,
    subBU,
    educationCheck,
    educationCost,
    educationTAT,
    addressCheck,
    addressCost,
    addressTAT,
    criminalCheck,
    criminalCost,
    criminalTAT,
    drugCheck,
    drugCost,
    drugTAT,
    referanceCheck,
    referanceCost,
    referanceTAT,
    blueCollarReferanceCheck,
    blueCollarReferanceCost,
    blueCollarReferanceTAT,
    cost,
    id,
  } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    addPackage(formData);

    console.log(formData);
    setShowModal(false);
  };
  const onClick = (e) => {
    // setDisplay(e);

    setFormData({
      ...formData,
      id: e._id,
      cost: 0,
      educationCost: 0,
      addressCost: 0,
      drugCost: 0,
      referanceCost: 0,
      criminalCost: 0,
      blueCollarReferanceCost: 0,
    });
    setShowModal(true);
  };
  useEffect(() => {
    getClient();
  }, []);
  useEffect(() => {
    setFormData({
      ...formData,
      cost:
        Number(educationCost) +
        Number(referanceCost) +
        Number(addressCost) +
        Number(criminalCost) +
        Number(drugCost) +
        Number(blueCollarReferanceCost),
    });
  }, [
    educationCost,
    addressCost,
    referanceCost,
    drugCost,
    criminalCost,
    blueCollarReferanceCost,
  ]);
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
            {/* <th class="mx-auto ...">Add Pricing</th> */}
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
                  {/* <td className="mx-auto">
                    {" "}
                    <button
                      className=""
                      // onClick={(f) => onClick(e)}
                    >
                      Add Pricing
                    </button>{" "}
                  </td> */}
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
                <form id="myForm" class="mt-7 " onSubmit={(e) => onSubmit(e)}>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      id="name"
                      type="text"
                      className=" h-8 px-2 border rounded border-grey-400"
                      name="name"
                      value={display && display.name}
                      placeholder="Package Name"
                      onChange={(e) => onChange(e)}
                    />
                    <select
                      id="subBU"
                      name="subBU"
                      class=""
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subBU: document.getElementById("subBU").value,
                        })
                      }
                    >
                      <option value="">Select subBU</option>
                      <option value="BPO">BPO</option>
                      <option value="IT">IT</option>
                      <option value="ITES">ITES</option>
                      <option value="OU">OU</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="name"
                      type="text"
                      className="flex-grow h-8 px-2 border rounded border-grey-400"
                      name="name"
                      placeholder="Package Name"
                      onChange={(e) => onChange(e)}
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <input
                      id="educationCheck"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="educationCheck"
                      placeholder="Education Check"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      id="educationCost"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="educationCost"
                      placeholder="Education cost"
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                    <input
                      id="educationTAT"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="educationTAT"
                      placeholder="Education TAT"
                      onChange={(e) => {
                        onChange(e);
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <input
                      id="referanceCheck"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="referanceCheck"
                      placeholder="Referance Check"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      id="referanceCost"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="referanceCost"
                      placeholder="Referance Cost"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      id="referanceTAT"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="referanceTAT"
                      placeholder="Referance TAT"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <input
                      id="drugCheck"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="drugCheck"
                      placeholder="Drug Check"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      id="drugCost"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="drugCost"
                      placeholder="Drug Cost"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      id="drugTAT"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="drugTAT"
                      placeholder="Drug TAT"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <input
                      id="addressCheck"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="addressCheck"
                      placeholder="Address Check"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      id="addressCost"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="addressCost"
                      placeholder="Address Cost"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      id="addressTAT"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="addressTAT"
                      placeholder="Address TAT"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <input
                      id="criminalCheck"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="criminalCheck"
                      placeholder="Criminal Check"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      id="criminalCost"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="criminalCost"
                      placeholder="Criminal Cost"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      id="criminalTAT"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="criminalTAT"
                      placeholder="Criminal TAT"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <input
                      id="blueCollarReferanceCheck"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="blueCollarReferanceCheck"
                      placeholder="Blue Collar Referance Check"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      id="blueCollarReferanceCost"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="blueCollarReferanceCost"
                      placeholder="Blue Collar Referance Cost"
                      onChange={(e) => onChange(e)}
                    />
                    <input
                      id="blueCollarReferanceTAT"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="blueCollarReferanceTAT"
                      placeholder="Blue Collar Referance TAT"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div className="flex flex-col mt-4">
                    <input
                      id="cost"
                      type="number"
                      className="flex-grow h-8 px-2 rounded border border-grey-400"
                      name="cost"
                      value={cost}
                      placeholder="Cost"
                      // onChange={(e) =>  setFormData({ ...formData, cost: document.getElementById("cost").value })}
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
                <th class="mx-auto ...">Referance</th>
                <th class="mx-auto ..."> Blue C. Ref</th>
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
                      <td className="mx-auto"> {e.referanceCheck} </td>
                      <td className="mx-auto"> {e.blueCollarReferanceCheck} </td>
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
  CRM: state.clientRegistration.CRM,
});

export default connect(mapStateToProps, { getClient, addPackage })(AddPackage);
