import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import {getEMPInsuffClearCases} from "../../actions/employmentOperation"
import Moment from 'react-moment';
import {Link} from 'react-router-dom'
const InsuffClear = ({insuff,getEMPInsuffClearCases}) => {
    useEffect(() => {
       getEMPInsuffClearCases()
    }, [])
    return (
        <table className="table-fixed w-full">
        <thead>
        <tr className="flex w-full ">
          <th className="w-1/5 flex justify-center...">CaseId</th>
          <th className="w-1/5 flex justify-center...">Client Name</th>
          <th className="w-1/5 flex justify-center...">Candidate</th>
          <th className="w-1/5 flex justify-center...">Expire on</th>
          <th className="w-1/5 flex justify-center...">status</th>
          <th className="w-1/5 flex justify-center...">Remark</th>
          <th className="w-1/5 flex justify-center...">Document</th>
       
        </tr>
        
        </thead>
       
        <tbody>
        {insuff && insuff.map(e=>{
          return(
            
        <tr className='flex w-full' key={e.ReportID} >
            <Link to={{
              pathname:'/filldata',
              state:e 
            }} 
            className = "flex w-full">
          <th className="w-1/5 flex justify-center...">{e.ReportID}</th>
          <th className="w-1/5 flex justify-center...">{e.caseID.clientName.name}</th>
          <th className="w-1/5 flex justify-center...">{e.name&&e.name}</th>
          <th className="w-1/5 flex justify-center..."><Moment format="YYYY/MM/DD" >{e.expireDate}</Moment></th>
          <th className="w-1/5 flex justify-center...">{e.status}</th>
          <th className="w-1/5 flex justify-center...">{e.remarkInsuffL2}</th>
          </Link>
          <th className="w-1/5 flex justify-center">
                    <a href={e.document3} download="">
                      Download
                    </a>
                  </th>
        
        </tr>
       
          )
        })}
        </tbody>
        
        </table>
    )
}

InsuffClear.propTypes = {
    getEMPInsuffClearCases:PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    insuff : state.employmentOperation.empInsuff
})

export default connect(mapStateToProps,{getEMPInsuffClearCases})(InsuffClear)
