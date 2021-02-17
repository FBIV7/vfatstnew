import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getClient, createPrice, getPrice } from "../../actions/admin";
const Price = ({ getClient, client, createPrice, getPrice, price }) => {
  const [display, setDisplay] = useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [formData, setFormData] = useState({
    check: "",
    product: "",
    user_id: "",
    State: "",
    city: "",
    ruralPrice: "",
    urbanPrice: "",
    TAT: "",
  });
  var count = 1;

  var { user_id, product, State, city, ruralPrice, urbanPrice, TAT } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    createPrice(formData);
    getPrice(user_id);
    setShowModal(false);
  };

  useEffect(() => {
    getClient();
  }, []);

  const onClick = (e) => {
    setShowModal(true);

    setFormData({ ...formData, user_id: e._id });
    getPrice(user_id);
  };
  const showPrice = (e) => {
    console.log(e);
    setDisplay(null);
    setDisplay(e);
    setFormData({ ...formData, user_id: e._id });
    getPrice(e._id);
  };
  return (
    <div className="">
      <table class="table-fixed text-left w-full ">
        <thead className="bg-gray-900 flex text-white w-full">
          <tr class="flex  w-full mb-4">
            <th class="w-1/5 ml-1 mt-1 ...">S.No</th>
            <th class="w-1/5 mt-1 ...">Company Name</th>
            <th class="w-1/5 mt-1 ...">Contact Person</th>
            <th class="w-1/5  mt-1 ...">Mobile</th>
            <th class="w-1/5 mt-1 ...">Edit</th>
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
                  className={
                    count % 2 === 0
                      ? `flex w-full  bg-gray-100 `
                      : `flex w-full  `
                  }
                  onClick={(f) => showPrice(e)}
                  key={e._id}
                >
                  <td className="w-1/4 ml-1 mt-2">{count++}</td>
                  <td className="w-1/4 mt-2">
                    {e.profile &&
                    e.profile.companyDetail &&
                    e.profile.companyDetail.companyName
                      ? e.profile.companyDetail.companyName
                      : "N/A"}
                  </td>
                  <td className="w-1/4 mt-2">
                    {" "}
                    {e.profile && e.profile.contactPersonName
                      ? e.profile.contactPersonName
                      : "N/A"}{" "}
                  </td>
                  <td className="w-1/4 mt-2">
                    {" "}
                    {e.profile && e.profile.mobile
                      ? e.profile.mobile
                      : "N/A"}{" "}
                  </td>
                  <td className="w-1/4 mt-2">
                    {" "}
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 mt-1"
                      onClick={(f) => onClick(e)}
                    >
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
                      {/* <input
                        className="hidden"
                        for="check"
                        onChange={(e) => console.log(e)}
                      ></input> */}

                      <input
                        id="product"
                        type="text"
                        name="product"
                        placeholder="Product"
                        class=" w-1/2   py-3  mt-1 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required
                        onChange={(e) => onChange(e)}
                      />
                      <select
                        id="check"
                        name="check"
                        className="appearance-none "
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            check: document.getElementById("check").value,
                          })
                        }
                      >
                        <option>Select</option>
                        <option value="Address Check">Address Check</option>
                        <option
                          value="Education Check"
                          onclick={(e) => console.log(e)}
                        >
                          Education Check
                        </option>
                        <option value="Employment check">
                          Employment check
                        </option>
                      </select>

                      <input
                        id="state"
                        type="text"
                        name="State"
                        placeholder="State"
                        class=" w-1/2   py-3  mt-1 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required
                        onChange={(e) => onChange(e)}
                      />

                      <input
                        id="city"
                        type="text"
                        name="city"
                        placeholder="City"
                        class=" w-1/2 py-3  mt-1 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required
                        onChange={(e) => onChange(e)}
                      />

                      <input
                        id="ruralPrice"
                        type="text"
                        name="ruralPrice"
                        placeholder="Rural Price"
                        class=" w-1/2   py-3  mt-1 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required
                        onChange={(e) => onChange(e)}
                      />

<input
                        id="urbanPrice"
                        type="text"
                        name="urbanPrice"
                        placeholder="Urban Price"
                        class=" w-1/2 py-3  mt-1 mb-4
                            text-gray-800 appearance-none 
                            border-b-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200"
                        required
                        onChange={(e) => onChange(e)}
                      />
                       <input
                        id="TAT"
                        type="number"
                        name="TAT"
                        placeholder="TAT"
                        class=" w-1/2 py-3  mt-1 mb-4
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
        <div>
          <h2 className="flex justify-center font-bold mt-10">Price Data</h2>
          <table class="table-fixed w-full mt-10">
            <thead>
              <tr className="flex justify-center">
                <th class="w-1/5 ...">Product</th>
                <th class="w-1/5 ...">Check</th>
                <th class="w-1/5 ...">State</th>
                <th class="w-1/5 ...">City</th>
                <th class="w-1/5 ...">Rural Price</th>
                <th class="w-1/5 ...">Urban Price</th>
                <th class="w-1/5 ...">TAT</th>
              </tr>
            </thead>

            <tbody>
              {price !== null &&
                price.map((e) => {
                  return (
                    <tr className="flex w-full">
                      <td class="w-1/5  flex justify-center ...">{e.product}</td>
                      <td class="w-1/5  flex justify-center ...">{e.check}</td>
                      <td class="w-1/5  flex justify-center ...">{e.State}</td>
                      <td class="w-1/5  flex justify-center ...">{e.city}</td>
                      <td class="w-1/5  flex justify-center ...">{e.ruralPrice}</td>
                      <td class="w-1/5  flex justify-center ...">{e.urbanPrice}</td>
                      <td class="w-1/5  flex justify-center ...">{e.TAT ? e.TAT :""}</td>
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

Price.propTypes = {
  getClient: PropTypes.func.isRequired,
  createPrice: PropTypes.func.isRequired,
  getPrice: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  client: state.admin.client,
  price: state.admin.price,
});

export default connect(mapStateToProps, { getClient, createPrice, getPrice })(
  Price
);
