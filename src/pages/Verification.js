import React from "react";

const Verification = () => {
  return (
    <div className="verificationStyle">
      <div className="flex justify-center text-3xl font-serif section-title font-serif md:text-5xl">
        <h1 className="block justify-center font">VERFICATION PROCESS</h1>
      </div>

      <div className="verification  md:flex align-item-center gap-6 m-6">
        <div className="styleImg text-center">
          <i className="fa fa-user-plus fa-5x  circle"></i>
          <h3>Register/Verification</h3>
          <p>
            Fill Up The form and confirm the KYC. Upload the Verfication data
          </p>
        </div>
        <div className="styleImg text-center block ">
          <i className="fa fa-tasks  fa-5x  circle"></i>
          <h3>Operation</h3>
          <p>Our System will assign a surveyor for your request</p>
        </div>

        <div className="styleImg text-center block">
          <i className="fa fa-history fa-5x  circle"></i>
          <h3>Audit</h3>
          <p>Our Backened Team will assign a surveyor for the request</p>
        </div>
        <div className="styleImg text-center block">
          <i className="fa fa-file fa-5x  circle"></i>
          <h3>Report Generated</h3>
          <p>After Complete Verification we'll generate an authentic report</p>
        </div>
      </div>
    </div>
  );
};

export default Verification;
