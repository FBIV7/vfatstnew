import React,{useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { verified } from "../../actions/operation";

const AddressAudit = ({ data,verified }) => {
  const [display, setDisplay] = useState(null);
  const onClick = (e) => {
    setDisplay(e);
  };
    console.log(data);
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
          className="flex flex-col items-center overflow-y-scroll  w-full "
          style={{ height: "50vh" }}
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
                  onClick={(f) => onClick(e)}
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
                      className="bg-green-500 rounded-full text-white font-bold py-2 px-4"
                      onClick={(f) =>{ verified(e._id)
                    setDisplay(null)
                    }}
                    >
                      Verify
                    </button>
                  </td>
                </tr>
                // </button>
              );
            })}
        </tbody>
      </table>

      {display===null?'':
         <div className="grid grid-cols-4 gap-4 mt-5 mb-10">
             {display.image.map(e =>{
                 return(
                    <div key={`http://192.168.1.18:5000${e}`} className="h-34  ">
                    <a href={`http://192.168.1.18:5000${e}`} target="_blank">
                      <img src={`http://192.168.1.18:5000${e}`} alt="pancarf" />
                    </a>
                  </div>
                 )
             })}
       </div>

      }
    </div>
  );
};

AddressAudit.propTypes = {
    verified:PropTypes.func.isRequired,
};

export default connect(null,{verified})(AddressAudit);
