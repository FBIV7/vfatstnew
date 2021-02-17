import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const GetAllVendor = ({vendor}) => {
  const [display, setDisplay] = useState(null);

  const onClick = (e) => {
    setDisplay(e);
  };
  return (
    <div>
      <table class="table-fixed text-left w-full ">
        <thead className="bg-black flex text-white w-full">
          <tr class="flex w-full mb-4">
            <th class="mx-auto ...">Company Name</th>
            <th class="mx-auto ...">Contact Person</th>
            <th class="mx-auto ...">Mobile</th>
            <th class="mx-auto ...">Edit</th>
          </tr>
        </thead>
        <tbody
          className="flex flex-col items-center  overflow-y-scroll w-full "
          style={{ height: "50vh" }}
        >
          {!(vendor === null) &&
            vendor.map((e) => {
              return (
                <tr className="flex w-full " key={e._id}>
                  <td className="mx-auto">
                    {e.profile &&
                    e.profile.companyDetail &&
                    e.profile.companyDetail.companyName
                      ? e.profile.companyDetail.companyName
                      : "N/A"}
                  </td>
                  <td className="mx-auto">
                    {" "}
                    {e.profile && e.profile.contactPersonName
                      ? e.profile.contactPersonName
                      : "N/A"}{" "}
                  </td>
                  <td className="mx-auto">
                    {" "}
                    {e.profile && e.profile.mobile
                      ? e.profile.mobile
                      : "N/A"}{" "}
                  </td>
                  <td className="mx-auto">
                    {" "}
                    <button className="" onClick={(f) => onClick(e)}>
                      Show
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

GetAllVendor.propTypes = {};

const mapStateToProps= state =>({
    vendor : state.admin.vendor
})

export default connect(mapStateToProps)(GetAllVendor);
