import React from 'react'
import PropTypes from 'prop-types'

const GetStatus = props => {
    console.log(props.location.state);
    return (
        <div>
             <table class="table-fixed w-full">
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
        {props.location.state&&props.location.state.map((e) => {
            return (
              <tr>
                <td>{e.info.candidateName}</td>
                <td>{e.info.address}</td>
                <td>{e.info.state}</td>
                <td>{e.info.pincode}</td>
                <td>{e.info.contact}</td>
              </tr>
            );
          })}
             </tbody>
        </table>
        </div>
    )
}

GetStatus.propTypes = {

}

export default GetStatus
