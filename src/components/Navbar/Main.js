import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import SideBar from './SideBar'
import {connect} from 'react-redux'
import SideBarAdmin from './SideBarAdmin'
import SideBarVendor from './SideBarVendor'
import SideBarOperation from './SideBarOperation'
const Main = ({isAuthenticated,role}) =>{
    // (isAuthenticated)?(<div><SideBar/></div>):(<div><Navbar/></div>)
    if(isAuthenticated){
        if(role=="admin") {
            return <div><SideBarAdmin/></div>
        } else if(role=="client") {
            return <div><SideBar/></div>
        } else if(role=="vendor") {
            return <div><SideBarVendor/></div>
        }else if(role=="operation") {
            return <div><SideBarOperation/></div>
        }
    } else{
        return(<div><Navbar/></div>)
    }
}

Main.propTypes = {
  
}

const mapStateToProps = (state) =>({
    isAuthenticated : state.auth.isAuthenticated,
    role : state.auth.role
})

export default connect(mapStateToProps)(Main)
