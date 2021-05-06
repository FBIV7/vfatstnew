import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import { getEMPAssignVendorCases } from "../../actions/employmentOperation";
import Moment from 'react-moment';
import {Link} from 'react-router-dom'
const AssignVendor = ({getEMPAssignVendorCases,assignvendor}) => {
    useEffect(() => {
        getEMPAssignVendorCases()
    }, [])
    return (
        <>
          <table className="table-fixed w-full">
    <thead>
    <tr className="flex w-full ">
      <th className="w-1/5 flex justify-center...">CaseId</th>
      <th className="w-1/5 flex justify-center...">Client Name</th>
      <th className="w-1/5 flex justify-center...">Candidate</th>
      <th className="w-1/5 flex justify-center...">Date</th>
      <th className="w-1/5 flex justify-center...">TAT</th>
      <th className="w-1/5 flex justify-center...">Expire on</th>
   
    </tr>
    
    </thead>
   
    <tbody>
    {assignvendor && assignvendor.map(e=>{
      return(
        <Link to={{
          pathname:'/filldata',
          state:e,
          isSave:false
        }} key={e.ReportID}>
    <tr className='flex w-full' >
      <th className="w-1/5 flex justify-center...">{e.ReportID}</th>
      <th className="w-1/5 flex justify-center...">{e.caseID.clientName.name}</th>
      <th className="w-1/5 flex justify-center...">{e.name&&e.name}</th>
      <th className="w-1/5 flex justify-center..."><Moment format="YYYY/MM/DD" >{e.date}</Moment></th>
      <th className="w-1/5 flex justify-center...">{e.TAT}</th>
      <th className="w-1/5 flex justify-center..."><Moment format="YYYY/MM/DD" >{e.expireDate}</Moment></th>
    
    </tr>
    </Link>
      )
    })}
    </tbody>
    
    </table>
        </>
    )
}

AssignVendor.propTypes = {
getEMPAssignVendorCases:PropTypes.func.isRequired,
}
const mapStateToProps = state =>({
    assignvendor : state.employmentOperation.assignVendor
})
export default connect(mapStateToProps,{getEMPAssignVendorCases})(AssignVendor)
