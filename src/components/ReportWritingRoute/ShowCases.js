import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { getCasesInReportWriting} from "../../actions/reportWriting";
import Moment from 'react-moment';
import {Link} from 'react-router-dom'
const ShowCases = ({getCasesInReportWriting,cases}) => {
    console.log(cases);
    useEffect(() => {
        getCasesInReportWriting()
        
    }, [])
    return (
     <>
             <table className="table-fixed w-full">
    <thead>
    <tr className="flex w-full ">
      <th className="w-1/5 flex justify-center...">Referance No</th>
      <th className="w-1/5 flex justify-center...">Client Name</th>
      <th className="w-1/5 flex justify-center...">Candidate</th>
      <th className="w-1/5 flex justify-center...">Date</th>
      <th className="w-1/5 flex justify-center...">TAT</th>
      <th className="w-1/5 flex justify-center...">Expire on</th>
      <th className="w-1/5 flex justify-center...">Colour</th>
   
    </tr>
    
    </thead>
   
    <tbody>
    {cases && cases.map(e=>{
      return(
        <Link to={{
          pathname:'/all-checks',
          state:e,
          isSave:false
        }} key={e.ReportID}>
    <tr className='flex w-full' >
      <th className="w-1/5 flex justify-center...">{e.reportId}</th>
      <th className="w-1/5 flex justify-center...">{e.clientName.name}</th>
      <th className="w-1/5 flex justify-center...">{e.candidateName}</th>
      <th className="w-1/5 flex justify-center..."><Moment format="YYYY/MM/DD" >{e.date}</Moment></th>
      <th className="w-1/5 flex justify-center...">{e.caseTAT}</th>
      <th className="w-1/5 flex justify-center..."><Moment format="YYYY/MM/DD" >{e.expireDate}</Moment></th>
      <th className="w-1/5 flex justify-center...">{e.colourCode}</th>

    
    </tr>
    </Link>
      )
    })}
    </tbody>
    
    </table>
    
        </>
    )
}

ShowCases.propTypes = {
getCasesInReportWriting:PropTypes.func.isRequired,
}
const mapStateToProps = state =>({
    cases:state.reportWriting.cases
})

export default connect(mapStateToProps,{getCasesInReportWriting})(ShowCases)
