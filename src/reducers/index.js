import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import report from "./report";
import admin from "./admin";
import vendor from "./vendor";
import operation from "./operation";
import CRM from "./CRM";
import initiation from "./initiation";
import addressTL from "./addressTL";
import clientRegistration from "./clientRegistration";
import alert from "./alert";
export default combineReducers({
  auth,
  profile,
  report,
  admin,
  vendor,
  operation,
  CRM,
  initiation,
  addressTL,
  clientRegistration,
  alert,
});
