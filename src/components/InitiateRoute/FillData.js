import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import {getinitiationCases} from "../../actions/initiation"
import Moment from 'react-moment';
import {Link} from 'react-router-dom'

const FillData = ({getinitiationCases,cases}) => {
    console.log(cases);
    useEffect(() => {
        getinitiationCases();
    }, [])
    return (
        <table className="table-fixed w-full">
        <thead>
        <tr className="flex w-full">
          <th className="w-1/5 flex justify-center...">CaseId</th>
          <th className="w-1/5 flex justify-center...">Client Name</th>
          <th className="w-1/5 flex justify-center...">Candidate</th>
          <th className="w-1/5 flex justify-center...">Date</th>
       
        </tr>
        
        </thead>
       
        <tbody>
        {cases && cases.map(e=>{
          return(
            <Link to={{
              pathname:'/cdf',
              state:e
            }} key={e}>
        <tr className='flex w-full' >
          <th className="w-1/5 flex justify-center...">{e.reportId}</th>
          <th className="w-1/5 flex justify-center...">{e.clientName.name}</th>
          <th className="w-1/5 flex justify-center...">{e.candidateName}</th>
          <th className="w-1/5 flex justify-center..."><Moment format="YYYY/MM/DD" >{e.date}</Moment></th>
        
        </tr>
        </Link>
          )
        })}
        </tbody>
        
        </table>
    )
}

FillData.propTypes = {
    getinitiationCases:PropTypes.func.isRequired,
}
const mapStateToProps =(state) =>({
    cases : state.initiation.cases
})
export default connect(mapStateToProps,{getinitiationCases})(FillData)
