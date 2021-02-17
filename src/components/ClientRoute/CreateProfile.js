import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router ,Switch,Route,Link } from "react-router-dom";
import CreateContactProfile from './ProfileForm/CreateContactProfile';
import CreateBusinessProfile from './ProfileForm/CreateBusinessProfile';
import Price from './Price';

const CreateProfile = props => {
    return (
        <Router>
        <div>
      <div className="justify-center my-8 select-none flex">
        <button className="py-2 px-4 shadow-md no-underline rounded-full bg-blue bg-gray-900 text-white font-sans font-semibold text-sm border-blue hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">
        <Link to="/createprofile/contactdetail"> Contact Detail</Link> 
        </button>
        <button className="py-2 px-4 shadow-md no-underline rounded-full bg-orange bg-gray-900 text-white font-sans font-semibold text-sm border-orange  hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2">
        <Link to="/createprofile/businessdetail"> Business Detail</Link>
        </button>
        <button className="py-2 px-4 shadow-md no-underline rounded-full bg-red bg-gray-900 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none">
         <Link to='pricing'> Pricing</Link>
        </button>
      </div>
      <Switch>
        <Route exact path="/createprofile/contactdetail" component={CreateContactProfile} />
        <Route exact path="/createprofile/businessdetail" component={CreateBusinessProfile} />
        <Route exact path="/pricing" component={Price} />
       </Switch>
        </div>
        </Router>
    )
}

CreateProfile.propTypes = {

}

export default CreateProfile
