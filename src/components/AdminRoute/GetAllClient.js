import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getClient, approve, decline } from "../../actions/admin";
const GetAllClient = ({ getClient, client, approve, decline, isProfile }) => {
  const [display, setDisplay] = useState(null);
  useEffect(() => {
    getClient();
  }, []);

  const onClick = (e) => {
    setDisplay(e);
  };
  var count = 1;
  return (
    <div>
      <table class="table-fixed text-left w-full ">
        <thead className=" bg-gray-200 text-gray-600 flex text-white w-full">
          <tr class="flex w-full mb-4">
            <th className="w-1/5 flex justify-center">S.No</th>
            <th class="w-1/5 flex justify-center ...">Company Name</th>
            <th class="w-1/5 flex justify-center ...">Contact Person</th>
            <th class="w-1/5 flex justify-center ...">Mobile</th>
            {/* <th class="w-1/3 ...">Edit</th> */}
            <th />
          </tr>
        </thead>
        <tbody
          className="flex flex-col items-center  overflow-y-scroll w-full "
          style={{ height: "50vh" }}
        >
          {!(client === null) &&
            client.map((e) => {
              return (
                // <button className="flex  mx-auto w-full" onClick={(f) => onClick(e)}>

                <tr
                  className={
                    count % 2 === 0
                      ? `flex w-full  bg-gray-100 `
                      : `flex w-full  `
                  }
                  key={e._id}
                  onClick={(f) => onClick(e)}
                >
                  <td className="w-1/5 flex justify-center">{count++}</td>
                  <td className="w-1/5 flex justify-center">
                    {e.profile &&
                    e.profile.companyDetail &&
                    e.profile.companyDetail.companyName
                      ? e.profile.companyDetail.companyName
                      : "N/A"}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.profile && e.profile.contactPersonName
                      ? e.profile.contactPersonName
                      : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {" "}
                    {e.profile && e.profile.mobile
                      ? e.profile.mobile
                      : "N/A"}{" "}
                  </td>
                  <td className="w-1/5 flex justify-center">
                    {e.profile.isBusiness &&
                    e.profile.isBusiness === "approve" ? (
                      <button
                        className="bg-green-500 rounded-full text-white font-bold py-2 px-4"
                        onClick={(f) => approve(e._id)}
                      >
                        Verified
                      </button>
                    ) : (
                      <div>
                        {" "}
                        <button
                          className="bg-blue-500 rounded-full text-white font-bold py-2 px-4"
                          onClick={(f) => approve(e._id)}
                        >
                          Approve
                        </button>
                        <button
                          className=" bg-red-500 rounded-full text-white font-bold py-2 px-4"
                          onClick={(f) => decline(e._id)}
                        >
                          Decline
                        </button>
                      </div>
                    )}{" "}
                  </td>
                </tr>
                // </button>
              );
            })}
        </tbody>
      </table>
      {display === null ? (
        ""
      ) : (
        <div className="mt-10 block bg-grey-100 border-t border-gray-400 ">
          <span></span>
          <div class="grid grid-cols-3  gap-1">
            <div>
              <span>Name : {display.name}</span> <br />
              <span>Desigination: {display.profile.desigination}</span>
              <br />
              <span>LandLine : {display.profile.landline}</span>
            </div>
            <div>
              {" "}
              <span>Email : {display.email}</span> <br />
              <span>Mobile : {display.profile.mobile}</span>
              <br />
              <span>Fax : {display.profile.fax}</span>
            </div>
            <div>
              {" "}
              <span>
                {" "}
                Contact Person Name:{" "}
                {display &&
                  display.profile &&
                  display.profile.contactPersonName &&
                  display.profile.contactPersonName}
              </span>{" "}
              <br />
              <span>
                Alternate Mobile :{" "}
                {display.profile.alternateMobile &&
                  display.profile.alternateMobile}
              </span>
            </div>
          </div>
          <strong>Company Detail:</strong>
          <div class="grid grid-cols-3 gap-1">
            <div>
              <span>
                Company Name :{" "}
                {display.profile &&
                  display.profile.companyDetail &&
                  display.profile.companyDetail.companyName &&
                  display.profile.companyDetail.companyName}
              </span>{" "}
              <br />
              <span>
                Contact Name :{" "}
                {display.profile.companyDetail &&
                  display.profile.companyDetail.contactName &&
                  display.profile.companyDetail.contactName}
              </span>
            </div>
            <div>
              {" "}
              <span>
                Year :{" "}
                {display.profile.companyDetail &&
                  display.profile.companyDetail.year}
              </span>{" "}
              <br />
              <span>
                Website URL :{" "}
                {display.profile.companyDetail &&
                  display.profile.companyDetail.websiteURL &&
                  display.profile.companyDetail.websiteURL}
              </span>
            </div>
            <div>
              {" "}
              <span>
                CEO Name :{" "}
                {display.profile.companyDetail &&
                  display.profile.companyDetail.CEOname &&
                  display.profile.companyDetail.CEOname}
              </span>{" "}
              <br />
            </div>
          </div>

          <strong>Address:</strong>
          <div class="grid grid-cols-3 gap-1">
            <div>
              <span>
                Building :{" "}
                {display.profile.Address &&
                  display.profile.Address.building &&
                  display.profile.Address.building}
              </span>{" "}
              <br />
              <span>
                Locality :{" "}
                {display.profile.Address &&
                  display.profile.Address.locality &&
                  display.profile.Address.locality}
              </span>
              <br />
              <span>
                Country :{" "}
                {display.profile.Address && display.profile.Address.country}
              </span>
            </div>
            <div>
              {" "}
              <span>
                Street :{" "}
                {display.profile.Address && display.profile.Address.street}
              </span>{" "}
              <br />
              <span>
                City : {display.profile.Address && display.profile.Address.city}
              </span>
              <br />
              <span>
                Pincode :{" "}
                {display.profile.Address && display.profile.Address.pincode}
              </span>
            </div>
            <div>
              {" "}
              <span>
                Landmark :{" "}
                {display.profile.Address && display.profile.Address.landmark}
              </span>{" "}
              <br />
              <span>
                State :{" "}
                {display.profile.Address && display.profile.Address.state}
              </span>
            </div>
          </div>

          <strong>Statutary Detail:</strong>
          <div class="grid grid-cols-3 gap-1">
            <div>
              <span>
                GSTIN :{" "}
                {display.profile.statutarydetails &&
                  display.profile.statutarydetails.gstin}
              </span>{" "}
              <br />
              <span>
                Pan Number :{" "}
                {display.profile.statutarydetails &&
                  display.profile.statutarydetails.pan_number}
              </span>
            </div>
            <div>
              {" "}
              <span>
                TAN :{" "}
                {display.profile.statutarydetails &&
                  display.profile.statutarydetails.TAN}
              </span>{" "}
              <br />
              <span>
                CIN :{" "}
                {display.profile.statutarydetails &&
                  display.profile.statutarydetails.cin_number}
              </span>
            </div>
            <div>
              {" "}
              <span>
                Import Export Code :{" "}
                {display.profile.statutarydetails &&
                  display.profile.statutarydetails.importExportCode}
              </span>
            </div>
          </div>

          <strong>Bank Detail:</strong>
          <div class="grid grid-cols-3 gap-1">
            <div>
              <span>
                IFSC code :{" "}
                {display.profile.bank_account &&
                  display.profile.bank_account.IFSC_code}
              </span>{" "}
              <br />
              <span>
                Account Number :{" "}
                {display.profile.bank_account &&
                  display.profile.bank_account.account_number}
              </span>
            </div>
            <div>
              {" "}
              <span>
                Bank Name :{" "}
                {display.profile.bank_account &&
                  display.profile.bank_account.bank_name}
              </span>{" "}
              <br />
              <span>
                Account Types :{" "}
                {display.profile.bank_account &&
                  display.profile.bank_account.account_type}
              </span>
            </div>
            <div> {/* <span> : {display.name}</span> <br /> */}</div>
          </div>

          <strong>Business Nature:</strong>
          <div class="grid grid-cols-3 gap-1">
            <div>
              <span>
                Primary Business :{" "}
                {display.profile.business_nature &&
                  display.profile.business_nature.primary_business}
              </span>{" "}
              <br />
              <span>
                Annual Turnover :{" "}
                {display.profile.business_nature &&
                  display.profile.business_nature.annual_turnover}
              </span>
            </div>
            <div>
              {" "}
              <span>
                Employee :{" "}
                {display.profile.business_nature &&
                  display.profile.business_nature.employee}
              </span>{" "}
              <br />
              <span>
                Secondary Business :{" "}
                {display.profile.business_nature &&
                  display.profile.business_nature.secondary_business}
              </span>
            </div>
            <div>
              {" "}
              <span>
                Ownership Type :{" "}
                {display.profile.business_nature &&
                  display.profile.business_nature.ownership_type}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-5 mb-10">
            <div className="h-34  ">
              <a href={display.profile.pancard_img} target="_blank">
                <img src={display.profile.pancard_img} alt="pancarf" />
              </a>
            </div>
            <div className="h-34  ">
              <a href={display.profile.agreement_img} target="_blank">
                <img src={display.profile.agreement_img} alt="fdfdf" />
              </a>
            </div>
            <div className="h-34 ">
              <a
                href={
                  display.profile.statutarydetails &&
                  display.profile.statutarydetails.gst
                }
                target="_blank"
              >
                <img
                  src={
                    display.profile.statutarydetails &&
                    display.profile.statutarydetails.gst
                  }
                  alt="dssf"
                />
              </a>
            </div>
            <div className="h-34 ">
              <a href={display.profile.other} target="_blank">
                <img src={display.profile.other} alt="fdf" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

GetAllClient.propTypes = {
  getClient: PropTypes.func.isRequired,
  approve: PropTypes.func.isRequired,
  decline: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  client: state.admin.client,
});

export default connect(mapStateToProps, { getClient, approve, decline })(
  GetAllClient
);
