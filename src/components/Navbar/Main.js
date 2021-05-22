import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { connect } from "react-redux";
import SideBarAdmin from "./SideBarAdmin";
import SideBarVendor from "./SideBarVendor";
import SideBarOperation from "./SideBarOperation";
import SideBarInitiation from "./SideBarInitiation";
import SideBarCRM from "./SideBarCRM";
import SideBarAddressTL from "./SideBarAddressTL";
import SideBarEducationTL from "./SideBarEducationTL";
import SideBarEmploymentTL from "./SideBarEmploymentTL";
import SideBarBluecollarTL from "./SideBarBluecollarTL";
import SideBarReferanceTL from "./SideBarReferanceTL";
import SideBarClientRegistration from "./SideBarClientRegistration";
import SideBarEmploymentOperation from "./SideBarEmploymentOperation";
import SideBarEducationOperation from "./SideBarEducationOperation";
import SideBarEmpQualityCheck from "./SideBarEmpQualityCheck";
import SideBarEduQualityCheck from "./SideBarEduQualityCheck";
import SideBarReportWriting from "./SideBarReportWriting";

const Main = ({ isAuthenticated, role }) => {
  // (isAuthenticated)?(<div><SideBar/></div>):(<div><Navbar/></div>)
  if (isAuthenticated) {
    if (role == "admin") {
      return (
        <div>
          <SideBarAdmin />
        </div>
      );
    } else if (role == "client") {
      return (
        <div>
          <SideBar />
        </div>
      );
    } else if (role == "vendor") {
      return (
        <div>
          <SideBarVendor />
        </div>
      );
    } else if (role == "operation") {
      return (
        <div>
          <SideBarOperation />
        </div>
      );
    } else if (role == "initiation") {
      return (
        <div>
          <SideBarInitiation />
        </div>
      );
    } else if (role == "CRM") {
      return (
        <div>
          <SideBarCRM />
        </div>
      );
    } else if (role == "addressTL") {
      return (
        <div>
          <SideBarAddressTL />
        </div>
      );
    } else if (role == "educationTL") {
      return (
        <div>
          <SideBarEducationTL />
        </div>
      );
    } else if (role == "employmentTL") {
      return (
        <div>
          <SideBarEmploymentTL />
        </div>
      );
    } else if (role == "bluecollarTL") {
      return (
        <div>
          <SideBarBluecollarTL />
        </div>
      );
    } else if (role == "referanceTL") {
      return (
        <div>
          <SideBarReferanceTL />
        </div>
      );
    } else if (role == "employment") {
      return (
        <div>
          <SideBarEmploymentOperation />
        </div>
      );
    }else if (role == "education") {
      return (
        <div>
          <SideBarEducationOperation/>
        </div>
      );
    }
     else if (role == "clientRegistration") {
      return (
        <div>
          <SideBarClientRegistration />
        </div>
      );
    }
    else if (role == "EMPQUALITYCHECK") {
      return (
        <div>
          <SideBarEmpQualityCheck/>
        </div>
      );
    }
    else if (role == "EDUQUALITYCHECK") {
      return (
        <div>
          <SideBarEduQualityCheck/>
        </div>
      );
    }
    else if (role == "REPORTWRITING") {
      return (
        <div>
          <SideBarReportWriting/>
        </div>
      );
    }
  } else {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
};

Main.propTypes = {};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.role,
});

export default connect(mapStateToProps)(Main);
