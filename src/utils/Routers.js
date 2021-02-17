import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import BrideGroom from "../pages/services/BrideGroom";
import Company from "../pages/services/Company";
import Employee from "../pages/services/Employee";
import Property from "../pages/services/Property";
import Tenant from "../pages/services/Tenant";
import Vehicle from "../pages/services/Vehicle";
import Aboutpage from "./About";
import ContactPage from "./ContactPage";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import ForgotPassword from "../components/auth/ForgotPassword";
import Wrapper from "./Wrapper";
import Dashboard from "../components/dashboard/Dashboard";
import Main from "../components/Navbar/Main";
import PrivateRoute from "./routing/PrivateRoute";
import { connect } from "react-redux";
import ResetPassword from "../components/auth/ResetPassword";
import Form from "../components/VendorRoute/Form";
const Routers = ({ isAuthenticated }) => {
  const history = useHistory();

  console.log(history);
  return (
    <Router>
      <Fragment>
        {history.location.pathname.startsWith("/public") ? (<div>
          <Route path="/public/resetpassword/:token" component={ResetPassword} />
          <Route path="/public/updatebyvendor/:id" component={Form} />
          </div>
        ) : (
          <Fragment>
            <Main />
            {!isAuthenticated && <Route exact path="/" component={Wrapper} />}
            <Switch>
              <Route exact path="/about" component={Aboutpage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
              {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}

              {/* <Route exact path="/dashboard" component={Dashboard} /> */}
              {/* service page */}
              <Route exact path="/services/company" component={Company} />
              <Route exact path="/services/tenant" component={Tenant} />
              <Route exact path="/services/vehicle" component={Vehicle} />
              <Route exact path="/services/Employee" component={Employee} />
              <Route exact path="/services/bridegroom" component={BrideGroom} />
              <Route exact path="/services/property" component={Property} />
            </Switch>
          </Fragment>
        )}
      </Fragment>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Routers);
