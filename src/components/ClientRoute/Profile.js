import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router ,Switch,Route,Link } from "react-router-dom";
import ContactDetail from "./ProfileForm/ContactDetail";
import BusinessProfile from "./ProfileForm/BusinessProfile";
import Price from "./Price";

const Profile = (props) => {
  return (
      <Router>
    <div>
      <div className="justify-center my-8 select-none flex">
        <button className="py-2 px-4 shadow-md no-underline rounded-full bg-blue bg-gray-900 text-white font-sans font-semibold text-sm border-blue hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">
        <Link to="/editprofile/contactdetail"> Contact Detail</Link> 
        </button>
        <button className="py-2 px-4 shadow-md no-underline rounded-full bg-orange bg-gray-900 text-white font-sans font-semibold text-sm border-orange  hover:text-white hover:bg-orange-light focus:outline-none active:shadow-none mr-2">
        <Link to="/editprofile/businessdetail"> Business Detail</Link>
        </button>
        <button className="py-2 px-4 shadow-md no-underline rounded-full bg-red bg-gray-900 text-white font-sans font-semibold text-sm border-red btn-primary hover:text-white hover:bg-red-light focus:outline-none active:shadow-none">
        <Link to='/pricing'>  Pricing</Link>
        </button>
      </div>
      <Switch>
        <Route exact path="/editprofile/contactdetail" component={ContactDetail} />
        <Route exact path="/editprofile/businessdetail" component={BusinessProfile} />
        <Route exact path="/pricing" component={Price} />
       </Switch>
        </div>
        </Router>
  );
};

Profile.propTypes = {};

export default Profile;
