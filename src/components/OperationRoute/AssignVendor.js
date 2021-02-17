import React,{useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getemployeeunderverification,getVendorByState, assignVendor } from "../../actions/operation";

const AssignVendor = ({ data,getVendorByState ,vendor,assignVendor }) => {
  var count = 1;
  const [display, setDisplay] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false);
  const [formData, setFormData] = React.useState({
      employee_id:"",
      vendor_id:""
  });

  var {employee_id,vendor_id} = formData

  const onClick = (e) => {

      setDisplay(null)
    setShowModal(true);
    setDisplay(e);

  };

  const onSubmit = async e =>{
    
      e.preventDefault();
    //   console.log(formData);
      assignVendor(formData)
      setShowModal(false)
  }

  useEffect(() => {
      if(display){
     getVendorByState(display.info.state)
     setFormData({
        ...formData,
        employee_id: display._id
    })
      }
     // console.log(display);
  }, [display])
  return (
    <div>
      <table class="table-fixed text-left w-full   ">
        <thead className=" bg-gray-200 text-gray-600 flex text-white w-full">
          <tr class="flex w-full mb-4">
            <th className="w-1/6 flex justify-center">S.No</th>
            <th class="w-1/6 flex justify-center ...">Client Name</th>
            <th class="w-1/6 flex justify-center ...">Candidate</th>
            <th class="w-1/6 flex justify-center ...">Father name</th>
            <th class="w-1/6 flex justify-center ...">Address</th>
            <th class="w-1/6 flex justify-center ...">City</th>
            <th class="w-1/6 flex justify-center ...">State</th>
            <th class="w-1/6 flex justify-center ...">contact</th>
            <th class="w-1/6 flex justify-center ..."></th>
          </tr>
        </thead>
        <tbody
          className="flex flex-col items-center  overflow-y-scroll w-full "
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
                    {e.info && e.info.fatherName
                      ? e.info.fatherName
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
                    <button
                      className="bg-green-500 rounded-full text-white font-bold py-2 px-4"
                      onClick={(f) => onClick(e)}
                    >
                      Assign
                    </button>
                  </td>
                </tr>
                // </button>
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
                  <h3 className="text-3xl font-semibold">Assign Vendor</h3>
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
                <form class="mt-7 " 
                onSubmit={(e) => onSubmit(e)}
                >
                  <div className="relative p-6 flex-auto">
                      {/* <label> {display.} </label> */}
                    <div className=" block gap-1  md:flex">

                        <label> Vendor </label>
                     
                      <select
                        id="check"
                        name="check"
                        class=""
                       onChange={(e) =>
                         setFormData({
                           ...formData,
                           vendor_id: document.getElementById("check").value,
                         })
                       }
                      >
                                <option value="">select vendor</option>

                          {vendor && vendor.map(e => {
                              return(
                                <option key={e.id} value={e.id}>{e.name}</option>

                              )
                          })}
                        
                      </select>
                      

                      
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
     
    </div>
  );
};

AssignVendor.propTypes = {
  getemployeeunderverification: PropTypes.func.isRequired,
  getVendorByState:PropTypes.func.isRequired,
  assignVendor:PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    vendor: state.operation.vendorByState
});

export default connect(mapStateToProps, { getemployeeunderverification,getVendorByState ,assignVendor})(
  AssignVendor
);
