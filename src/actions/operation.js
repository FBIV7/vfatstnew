import {
  GET_EMPLOYEEUNDERVERIFICATION,
  GET_VENDORBYSTATE,
  ASSIGN_VENDOR,
  GET_EMPLOYEEASSIGNVENDOR,
  GET_EMPLOYEEAUDIT
} from "./types";
import axios from "axios";

//GET EMPLOYEE
export const getemployeeunderverification = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/v1/operation/getallemployee?status=Under verification"
    );
    dispatch({
      type: GET_EMPLOYEEUNDERVERIFICATION,
      payload: res.data.employee,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getemployeeassignvendor = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/v1/operation/getallemployee?status=Assign vendor"
    );
    dispatch({
      type: GET_EMPLOYEEASSIGNVENDOR,
      payload: res.data.employee,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getemployeeaudit = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/v1/operation/getallemployee?status=wait for confirmation"
    );
    dispatch({
      type: GET_EMPLOYEEAUDIT,
      payload: res.data.employee,
    });
  } catch (err) {
    console.error(err);
  }
};

export const notDoAble = (id) => async (dispatch) => {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/v1/operation/notdoable/${id}`
    );
    // dispatch({
    //   type: GET_EMPLOYEEASSIGNVENDOR,
    //   payload: res.data.employee,
    // });
    dispatch(getemployeeassignvendor());
    dispatch(getemployeeunderverification());
  } catch (err) {
    console.error(err);
  }
};

export const getVendorByState = (state) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/v1/operation/getallvendor?state=${state}`
    );
    dispatch({
      type: GET_VENDORBYSTATE,
      payload: res.data.vendor,
    });

  } catch (err) {
    console.log(err);
  }
};

export const assignVendor = (formdata) => async (dispatch) => {
  const { employee_id, vendor_id } = formdata;
  try {
    const res = await axios.put(
      `http://localhost:5000/api/v1/operation/assignvendor/?employee_id=${employee_id}&vendor_id=${vendor_id}`
    );
    dispatch(getemployeeunderverification());
    dispatch(getemployeeassignvendor());
  } catch (err) {
    console.error(err);
  }
};


export const verified = (id) => async (dispatch) => {
 
  try {
    const res = await axios.put(
      `http://localhost:5000/api/v1/operation/verifier?employee_id=${id}`
    );
    dispatch(getemployeeunderverification());
    dispatch(getemployeeassignvendor());
    dispatch(getemployeeaudit())
  } catch (err) {
    console.error(err);
  }
};