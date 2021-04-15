import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getInsuffClear } from "../../actions/initiation";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { SET_REPORTID } from "../../actions/types";
import store from "../../store";

const InsuffClear = ({ getInsuffClear, data }) => {
  //   if (education.length !== 0) {
  //     console.log(education.length);
  //   }
  //   if ((address.length !== 0)) {
  //     console.log(address.length);
  //   }
  var count = 1;
  useEffect(() => {
    getInsuffClear();
  }, []);
  return (
    <div>
      <table class="table-fixed text-left w-full ">
        <thead className=" bg-gray-200 text-gray-600 flex text-white w-full">
          <tr class="flex w-full mb-4">
            <th className="w-1/5 flex justify-center">Count</th>
            <th className="w-1/5 flex justify-center">Client Name</th>
            <th class="w-1/5 flex justify-center ...">Candidate Name</th>
            <th class="w-1/5 flex justify-center ...">TAT</th>
            <th class="w-1/5 flex justify-center ...">Insuff Raised on</th>
            <th class="w-1/5 flex justify-center ...">remark</th>
            <th class="w-1/5 flex justify-center ...">Document</th>
            {/* <th class="w-1/3 ...">Edit</th> */}
            <th />
          </tr>
        </thead>
        <tbody className=" " style={{ height: "50vh" }}>
          <strong className="flex justify-center"> Education </strong>
          {data &&
            data.education.map((e) => {
              return (
                // <button className="flex  mx-auto w-full" onClick={(f) => onClick(e)}>

                <tr
                  className={
                    count % 2 === 0
                      ? `flex w-full  bg-gray-100 `
                      : `flex w-full  `
                  }
                  key={e._id}
                >
                  <Link
                    to={{
                      pathname: "/educationcdf",
                      state: e,
                    }}
                    className={
                      count % 2 === 0
                        ? `flex w-full  bg-gray-100 `
                        : `flex w-full  `}
                    onClick={(f) =>
                      store.dispatch({
                        type: SET_REPORTID,
                        payload: e.ReportID,
                      })
                    }
                    key={e}
                  >
                    <th className="w-1/5 flex justify-center">{count++}</th>
                    <th className="w-1/5 flex justify-center">
                      {e.caseID &&
                      e.caseID.clientName &&
                      e.caseID.clientName.name
                        ? e.caseID.clientName.name
                        : "N/A"}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {" "}
                      {e.name ? e.name : "N/A"}{" "}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {" "}
                      {e.TAT ? e.TAT : "N/A"}{" "}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      <Moment format="YYYY/MM/DD">
                        {e.insuffRaisedOn ? e.insuffRaisedOn : "N/A"}
                      </Moment>
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {e.insuffL1ClearRemark ? e.insuffL1ClearRemark : "N/A"}
                    </th>
                  </Link>
                  <th className="w-1/5 flex justify-center">
                    <a href={e.documents} download="">
                      Download
                    </a>
                  </th>
                </tr>
              );
            })}
          <strong className="flex justify-center"> Address</strong>
          {data &&
            data.address.map((e) => {
              return (
                // <button className="flex  mx-auto w-full" onClick={(f) => onClick(e)}>

                <tr
                  className={
                    count % 2 === 0
                      ? `flex w-full  bg-gray-100 `
                      : `flex w-full  `
                  }
                  key={e._id}
                >
                  <Link
                    to={{
                      pathname: "/addresscdf",
                      state: e,
                    }}
                    className={
                      count % 2 === 0
                        ? `flex w-full  bg-gray-100 `
                        : `flex w-full  `}
                    onClick={(f) =>
                      store.dispatch({
                        type: SET_REPORTID,
                        payload: e.ReportID,
                      })
                    }
                    key={e}
                  >
                    <th className="w-1/5 flex justify-center">{count++}</th>
                    <th className="w-1/5 flex justify-center">
                      {e.caseID &&
                      e.caseID.clientName &&
                      e.caseID.clientName.name
                        ? e.caseID.clientName.name
                        : "N/A"}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {" "}
                      {e.name ? e.name : "N/A"}{" "}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {" "}
                      {e.TAT ? e.TAT : "N/A"}{" "}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      <Moment format="YYYY/MM/DD">
                        {e.insuffRaisedOn ? e.insuffRaisedOn : "N/A"}
                      </Moment>
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {e.insuffL1ClearRemark ? e.insuffL1ClearRemark : "N/A"}
                    </th>
                  </Link>
                  <th className="w-1/5 flex justify-center">
                    <a href={e.documents} download="">
                      Download
                    </a>
                  </th>
                </tr>
              );
            })}
          <strong className="flex justify-center"> Blue Collar</strong>
          {data &&
            data.bluecollar.map((e) => {
              return (
                // <button className="flex  mx-auto w-full" onClick={(f) => onClick(e)}>

                <tr
                  className={
                    count % 2 === 0
                      ? `flex w-full  bg-gray-100 `
                      : `flex w-full  `
                  }
                  key={e._id}
                >
                  <Link
                    to={{
                      pathname: "/bluecollar",
                      state: e,
                    }}
                    className={
                      count % 2 === 0
                        ? `flex w-full  bg-gray-100 `
                        : `flex w-full  `}
                    onClick={(f) =>
                      store.dispatch({
                        type: SET_REPORTID,
                        payload: e.ReportID,
                      })
                    }
                    key={e}
                  >
                    <th className="w-1/5 flex justify-center">{count++}</th>
                    <th className="w-1/5 flex justify-center">
                      {e.caseID &&
                      e.caseID.clientName &&
                      e.caseID.clientName.name
                        ? e.caseID.clientName.name
                        : "N/A"}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {" "}
                      {e.name ? e.name : "N/A"}{" "}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {" "}
                      {e.TAT ? e.TAT : "N/A"}{" "}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      <Moment format="YYYY/MM/DD">
                        {e.insuffRaisedOn ? e.insuffRaisedOn : "N/A"}
                      </Moment>
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {e.insuffL1ClearRemark ? e.insuffL1ClearRemark : "N/A"}
                    </th>
                  </Link>
                  <th className="w-1/5 flex justify-center">
                    <a href={e.documents} download="">
                      Download
                    </a>
                  </th>
                </tr>
              );
            })}
             <strong className="flex justify-center"> Referance</strong>
          {data &&
            data.referance.map((e) => {
              return (
                <tr
                  className={
                    count % 2 === 0
                      ? `flex w-full  bg-gray-100 `
                      : `flex w-full  `
                  }
                  key={e._id}
                >
                  <Link
                    to={{
                      pathname: "/referance",
                      state: e,
                    }}
                    className={
                      count % 2 === 0
                        ? `flex w-full  bg-gray-100 `
                        : `flex w-full  `}
                    onClick={(f) =>
                      store.dispatch({
                        type: SET_REPORTID,
                        payload: e.ReportID,
                      })
                    }
                    key={e}
                  >
                    <th className="w-1/5 flex justify-center">{count++}</th>
                    <th className="w-1/5 flex justify-center">
                      {e.caseID &&
                      e.caseID.clientName &&
                      e.caseID.clientName.name
                        ? e.caseID.clientName.name
                        : "N/A"}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {" "}
                      {e.name ? e.name : "N/A"}{" "}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {" "}
                      {e.TAT ? e.TAT : "N/A"}{" "}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      <Moment format="YYYY/MM/DD">
                        {e.insuffRaisedOn ? e.insuffRaisedOn : "N/A"}
                      </Moment>
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {e.insuffL1ClearRemark ? e.insuffL1ClearRemark : "N/A"}
                    </th>
                  </Link>
                  <th className="w-1/5 flex justify-center">
                    <a href={e.documents} download="">
                      Download
                    </a>
                  </th>
                </tr>
              );
            })}

<strong className="flex justify-center"> Employment</strong>
          {data &&
            data.employment.map((e) => {
              return (
                <tr
                  className={
                    count % 2 === 0
                      ? `flex w-full  bg-gray-100 `
                      : `flex w-full  `
                  }
                  key={e._id}
                >
                  <Link
                    to={{
                      pathname: "/employment",
                      state: e,
                    }}
                    className={
                      count % 2 === 0
                        ? `flex w-full  bg-gray-100 `
                        : `flex w-full  `}
                    onClick={(f) =>
                      store.dispatch({
                        type: SET_REPORTID,
                        payload: e.ReportID,
                      })
                    }
                    key={e}
                  >
                    <th className="w-1/5 flex justify-center">{count++}</th>
                    <th className="w-1/5 flex justify-center">
                      {e.caseID &&
                      e.caseID.clientName &&
                      e.caseID.clientName.name
                        ? e.caseID.clientName.name
                        : "N/A"}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {" "}
                      {e.name ? e.name : "N/A"}{" "}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {" "}
                      {e.TAT ? e.TAT : "N/A"}{" "}
                    </th>
                    <th className="w-1/5 flex justify-center">
                      <Moment format="YYYY/MM/DD">
                        {e.insuffRaisedOn ? e.insuffRaisedOn : "N/A"}
                      </Moment>
                    </th>
                    <th className="w-1/5 flex justify-center">
                      {e.insuffL1ClearRemark ? e.insuffL1ClearRemark : "N/A"}
                    </th>
                  </Link>
                  <th className="w-1/5 flex justify-center">
                    <a href={e.documents} download="">
                      Download
                    </a>
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

InsuffClear.propTypes = {
  getInsuffClear: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.initiation.insuffclearL1,
});

export default connect(mapStateToProps, { getInsuffClear })(InsuffClear);
