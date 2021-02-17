import React,{useEffect} from "react";
import PropTypes from "prop-types";
import Moment from 'react-moment';
import { connect } from "react-redux";
import { getReport } from "../../actions/report";
import {Link} from 'react-router-dom'

const Status = ({profile, report,getReport }) => {
console.log(report);
  useEffect(() => {
   getReport()
  }, [])
  // console.log(report);
  return profile && profile.isContact && profile.isContact === "approve" ?(
    <div>
      <div class=" mb-10 ">
        <div class="  sm:my-auto">
          <div
            class="w-full bg-red-800 p-12 sm:w-full md:w-full lg:w-3/4 2xl:w-4/5
                      px-6 py-10 sm:px-10 sm:py-6 
                      bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <h1 class="text-center font-bold text-5xl  lg:text-4xl text-gray-800">
              Under Verification
            </h1>
          </div>
        </div>
      </div>
      <table class="table-fixed w-full">
 <thead>
 <tr className="flex justify-center">
   <th class="w-1/5 ...">Report</th>
   <th class="w-1/5 ...">Date</th>
   <th class="w-1/5 ...">Candidate</th>
   <th class="w-1/5 ...">Status</th>
   <th class="w-2/5 ...">Remark</th>
 </tr>
 
 </thead>

 <tbody>
 {report && report.map(e=>{
   return(
     <Link to={{
       pathname:'/getstatus',
       state:e.employee
     }}>
 <tr className='flex w-full'>
   <th class="w-1/5 flex justify-center...">{e.report_id}</th>
   <th class="w-1/5 flex justify-center..."><Moment format="YYYY/MM/DD" >{e.createdAt}</Moment></th>
   <th class="w-1/5 flex justify-center...">{e.numberOfDocument}</th>
 </tr>
 </Link>
   )
 })}
 </tbody>
 
 </table>


    </div>
  ): (
    <div>Contact to admin</div>
  );
};

Status.propTypes = {
  getReport:PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
  report: state.report.report,
});

export default connect(mapStateToProps,{getReport})(Status);
