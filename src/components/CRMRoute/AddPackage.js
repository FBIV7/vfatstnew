import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPackage } from "../../actions/CRM";

const AddPackage = ({ addPackage }) => {
  const [formData, setFormData] = useState({
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
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    addPackage(formData);
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
            Add Package
          </h1>

          <form
            className="form-horizontal w-3/4 mx-auto"
            onSubmit={(e) => onSubmit(e)}
          >
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

            <div className="flex flex-col mt-8">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
              >
                Add Package
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

AddPackage.propTypes = {
  addPackage: PropTypes.func.isRequired,
};

export default connect(null, {addPackage})(AddPackage);
