import React, { useState } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { createVendor } from "../../actions/admin";
import { connect } from "react-redux";

const CreateVendor = ({ createVendor }) => {
  const [formData, setFormData] = useState({
    name: "",
    agreement: "",
    startDate: "",
    endDate: "",
  });

  const [count, setCount] = useState(1);

  let { name, agreement, startDate, endDate } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, agreement: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    createVendor(formData);
  };
  return (
    <div class="flex flex-col h-screen bg-gray-100">
      <div class="grid place-items-center  my-20 sm:my-auto">
        <div
          class="w-4/5 p-12 sm:w-4/5 md:w-3/4 lg:w-3/4 2xl:w-3/5
                      px-6 py-10 sm:px-10 sm:py-6 
                      bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <h1 class="text-center font-bold text-5xl lg:text-4xl text-gray-800">
            Create Vendor
          </h1>

          <form class="mt-7" onSubmit={(e) => onSubmit(e)}>
            <div className="block w-full mx-auto">
              <label className="  mx-auto tracking-wide text-grey-darker text-xs  mb-2">
                Name
              </label>
              <input
                id="name"
                type="taxt"
                name="name"
                placeholder="Name"
                class=" ml-10 py-3 px-1 mt-1 
                              text-gray-800 appearance-none 
                              border-b-2 border-gray-100
                              focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="flex   w-full py-3 px-1 mt-1 mb-4">
              <label className="  tracking-wide text-grey-darker text-xs  mb-2">
                Agreement
              </label>
              <div className="ml-3 ">
                {" "}
                <input
                  type="radio"
                  name="answer"
                  onChange={handleChange}
                  value="Yes"
                  checked={agreement === "Yes"}
                />{" "}
                Yes
                <input
                  type="radio"
                  name="answer"
                  onChange={handleChange}
                  value="No"
                  checked={agreement === "No"}
                />{" "}
                Not
              </div>
            </div>
            <div className="block w-full mx-auto">
              <label className="  tracking-wide text-grey-darker text-xs  mb-2">
                Start Date
              </label>
              <input
                id="startDate"
                type="date"
                name="startDate"
                placeholder="Start Date"
                class="w-1/2 ml-10 py-3 px-1 mt-1 mb-4
                              text-gray-800 appearance-none 
                              border-b-2 border-gray-100
                              focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="block w-full mx-auto">
              <label className="  tracking-wide text-grey-darker text-xs  mb-2">
                End Date
              </label>

              <input
                id="endDate"
                type="date"
                name="endDate"
                placeholder="End Date"
                class="w-1/2 ml-10 py-3 px-1 mt-1 mb-4
                              text-gray-800 appearance-none 
                              border-b-2 border-gray-100
                              focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <button
              type="submit"
              class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                              font-medium text-white uppercase
                              focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              UPDATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

CreateVendor.propTypes = {
  createVendor: PropTypes.func.isRequired,
};

export default connect(null, { createVendor })(CreateVendor);
