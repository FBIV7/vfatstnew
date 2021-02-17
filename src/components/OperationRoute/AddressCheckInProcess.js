import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { notDoAble } from "../../actions/operation";

const AddressCheckInProcess = ({data,notDoAble}) => {
  var count = 1;

    return (
        <div>
            <table class="table-fixed text-left w-full   ">
        <thead className=" bg-gray-200 text-gray-600 flex text-white w-full">
          <tr class="flex w-full mb-4">
            <th className="w-1/6 flex justify-center">S.No</th>
            <th class="w-1/6 flex justify-center ...">Client Name</th>
            <th class="w-1/6 flex justify-center ...">Candidate</th>
            <th class="w-1/6 flex justify-center ...">Address</th>
            <th class="w-1/6 flex justify-center ...">City</th>
            <th class="w-1/6 flex justify-center ...">State</th>
            <th class="w-1/6 flex justify-center ...">contact</th>
            <th class="w-1/6 flex justify-center ...">Vendor</th>
            <th class="w-1/6 flex justify-center ..."></th>
          </tr>
        </thead>
        <tbody
          className="flex flex-col items-center  w-full "
         // style={{ height: "50vh" }}
        >
          {data &&
            data.map((e) => {
              return (
                // <button className="flex  mx-auto w-full" onClick={(f) => onClick(e)}>

                <tr
                  className={
                    count % 2 === 0
                      ? `flex w-full  bg-gray-200 `
                      : `flex w-full  `
                  }
                  key={e._id}
                  //onClick={(f) => onClick(e)}
                >
                  <td className="w-1/6 flex justify-center">{count++}</td>
                  <td className="w-1/6 flex justify-center">
                    {e.info && e.info.clientName ? e.info.clientName : "N/A"}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.info && e.info.candidateName
                      ? e.info.candidateName
                      : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.info && e.info.address ? e.info.address : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.info && e.info.cityName ? e.info.cityName : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.info && e.info.state ? e.info.state : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.info && e.info.contact ? e.info.contact : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.vendor && e.vendor.name ? e.vendor.name : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    <button
                      className="bg-red-500 rounded-full text-white font-bold py-2 px-4"
                     onClick={(f) =>notDoAble(e._id)}
                    >
                      Not Doable
                    </button>
                  </td>
                </tr>
                // </button>
              );
            })}
        </tbody>
      </table>
        </div>
    )
}

AddressCheckInProcess.propTypes = {
notDoAble:PropTypes.func.isRequired,
}

export default connect(null,{notDoAble})(AddressCheckInProcess)
