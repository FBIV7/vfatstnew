import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { getEMPQualityCases} from "../../actions/qualityEmp";
import Moment from 'react-moment';
import {Link} from 'react-router-dom'
const Showchecks = ({getEMPQualityCases,employment}) => {
    useEffect(() => {
        getEMPQualityCases();
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
      <th className="w-1/5 flex justify-center...">Colour</th>
   
    </tr>
    
    </thead>
   
    <tbody>
    {employment && employment.map(e=>{
      return(
        <Link to={{
          pathname:'/show-data',
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

Showchecks.propTypes = {
    getEMPQualityCases:PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    employment: state.quality.employment,
})

export default connect(mapStateToProps,{getEMPQualityCases})(Showchecks)
