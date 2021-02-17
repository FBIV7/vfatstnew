import React,{useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllReport } from "../../actions/admin";

const Status = ({ report, getAllReport }) => {
  

  
  
  
  useEffect(() => {
    getAllReport();
  }, []);
  // console.log(report);
  return (
    <div>
      <div class=" mb-10 ">
        <div class="  sm:my-auto">
          <div
            class="w-full bg-grey-800 p-12 sm:w-full md:w-full lg:w-3/4 2xl:w-4/5
                        px-6 py-10 sm:px-10 sm:py-6 
                        bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <h1 class="text-center font-bold text-5xl  lg:text-4xl text-white-800">
              Status
            </h1>
          </div>
        </div>
      </div>
      <table class="table-fixed">
        <thead>
          <tr>
            <th class="w-1/5 ...">Candidate Name</th>
            <th class="w-1/5 ...">Address</th>
            <th class="w-1/5 ...">State</th>
            <th class="w-1/5 ...">Pincode</th>
            <th class="w-1/5 ...">Contact</th>
          </tr>
        </thead>

        <tbody>
          {/* {underVerification.map((e) => {
            return (
              <tr>
                <td>{e.info.candidateName}</td>
                <td>{e.info.address}</td>
                <td>{e.info.state}</td>
                <td>{e.info.pincode}</td>
                <td>{e.info.contact}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>

     

      
     

     
    
    </div>
  );
};

Status.propTypes = {
  getAllReport: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  report: state.admin.report,
});

export default connect(mapStateToProps, { getAllReport })(Status);
