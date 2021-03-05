import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPrice, getVendor } from "../../actions/admin";
const GetAllVendor = ({ vendor, addPrice, getVendor }) => {
  const [display, setDisplay] = useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [formData, setFormData] = useState({
    locationName: "",
    areaType: "",
    cost: "",
    id: "",
  });
  const { locationName, areaType, cost } = formData;
  const onClick = (e) => {
    setDisplay(e);
    setShowModal(true);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addPrice(formData);
    setShowModal(false);
  };

  useEffect(() => {
    getVendor();
  }, []);
  return (
    <div>
      <table class="table-fixed text-left w-full ">
        <thead className="bg-black flex text-white w-full">
          <tr class="flex w-full mb-4">
            <th class="mx-auto ...">Vendor Name</th>
            <th class="mx-auto ...">Aggrement </th>
            <th class="mx-auto ...">Start Date</th>
            <th class="mx-auto ...">End Date</th>
            <th class="mx-auto ...">Add Price</th>
          </tr>
        </thead>
        <tbody
          className="flex flex-col items-center  overflow-y-scroll w-full "
          style={{ height: "50vh" }}
        >
          {!(vendor === null) &&
            vendor.map((e) => {
              return (
                <tr
                  className="flex w-full "
                  key={e._id}
                  onClick={(f) => setDisplay(e)}
                >
                  <td className="mx-auto">{e.name}</td>
                  <td className="mx-auto"> {e.aggrement} </td>
                  <td className="mx-auto"> {e.startDate} </td>
                  <td className="mx-auto"> {e.endDate} </td>
                  <td className="mx-auto">
                    {" "}
                    <button className="" onClick={(f) => onClick(e)}>
                      Add Price
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
                  <h3 className="text-3xl font-semibold">Add Price</h3>
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
                  <div className="relative p-6 flex-auto">
                    <div className=" block gap-1  md:flex">
                      <input
                        id="locationName"
                        type="text"
                        name="locationName"
                        placeholder="Location Name"
                        class=" w-1/2   py-3  mt-1 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required
                        onChange={(e) => onChange(e)}
                      />
                      <select
                        id="areaType"
                        name="areaType"
                        className="appearance-none "
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            areaType: document.getElementById("areaType").value,
                            id: display._id,
                          })
                        }
                      >
                        <option>Select</option>
                        <option value="Rural">Rural</option>
                        <option value="Urban">Urban</option>
                        <option value="City">City</option>
                      </select>

                      <input
                        id="cost"
                        type="text"
                        name="cost"
                        placeholder="Cost"
                        class=" w-1/2   py-3  mt-1 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required
                        onChange={(e) => onChange(e)}
                      />
                    </div>

                    {/* <button
                  type="submit"
                  class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                            font-medium text-white uppercase
                            focus:outline-none hover:bg-gray-700 hover:shadow-none"
                >
                  Save
                </button> */}
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
          <div> Vendor Name:- {display.name}</div>
          <div>Price</div>
          <table class="table-fixed text-left w-full ">
            <thead className="bg-black flex text-white w-full">
              <tr class="flex w-full mb-4">
                <th class="mx-auto ..."> Location</th>
                <th class="mx-auto ...">Area </th>
                <th class="mx-auto ...">Cost</th>
              </tr>
            </thead>
            <tbody
              className="flex flex-col items-center  overflow-y-scroll w-full "
              style={{ height: "50vh" }}
            >
              {display.price &&
                display.price.map((e) => {
                  return (
                    <tr className="flex w-full " key={e._id}>
                      <td className="mx-auto">{e.locationName}</td>
                      <td className="mx-auto"> {e.areaType} </td>
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

GetAllVendor.propTypes = {
  addPrice: PropTypes.func.isRequired,
  getVendor: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  vendor: state.admin.vendor,
});

export default connect(mapStateToProps, { addPrice, getVendor })(GetAllVendor);
