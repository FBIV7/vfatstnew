import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";

const Price = ({profile:{isBusiness}}) => {
    return (isBusiness&&isBusiness ==="approve" ?
        <div>
            price
        </div>
        : <div>contact to admin</div>
    )
}

Price.propTypes = {

}

const mapStateToProps = state =>({
    profile: state.vendor.profile
})

export default connect(mapStateToProps)(Price)
