import React from "react";
const Services = () => {
  return (
    <div className="text-center styleService">
      <div className="flex justify-center section-title font-serif  ">
        <h1 className="flex justify-center  font" style={{ marginTop: "30px" }}>
          OUR SERVICES
        </h1>
      </div>
      <p className=" font-sans">
        We provide the best and fastest online services.
      </p>
      <div className="verification md:grid grid-cols-3 gap-4 m-4">
        <div className="styleImg text-center md:col-span-1">
          <i className="fa fa-graduation-cap fa-5x  circle"></i>
          <h3 className="fontColor font-serif">Employee Verifcation</h3>
          <p className=" fontServ">
            Employees represent a company and this are an integral part of it.
            If you will hire the right employees.
          </p>
        </div>
        <div className="styleImg text-center block md:col-span-1">
          <i className="fa fa-check  fa-5x  circle"></i>
          <h3 className="fontColor font-serif">Company Verification</h3>
          <p className=" fontServ">
            We advice our customers to verify before hiring any company as
            vendor, you must verify it otherwise it may lead to fraudulent.
          </p>
        </div>

        <div className="styleImg text-center block md:col-span-1">
          <i className="fa fa-inbox fa-5x  circle"></i>
          <h3 className="fontColor font-serif">Tenant Verification</h3>
          <p className=" fontServ">
            Our Verification services provides assurance that tenant is not
            involved in anti-social or illegal activaties
          </p>
        </div>
        <div className="styleImg text-center block">
          <i className="fa fa-credit-card fa-5x  circle"></i>
          <h3 className="fontColor font-serif">Vehicle Verfication</h3>
          <p className=" fontServ">
            We advice our customers to verify before buying because this could
            be stolen or can be the case of fraud
          </p>
        </div>
        <div className="styleImg text-center block">
          <i className="fa fa-inbox fa-5x  circle"></i>
          <h3 className="fontColor font-serif">Property Verification</h3>
          <p className=" fontServ">
            We always advice every buyer to verify at VFAST before investing his
            hard-earned money in long term investment such as property
          </p>
        </div>
        <div
          className="styleImg text-center block"
          style={{ marginBottom: "50px" }}
        >
          <i className="fa fa-child fa-5x  circle"></i>
          <h3 className="fontColor font-serif">Bride/Groom Verification</h3>
          <p className=" font-sans">
            We always advice our customers to check the credibility of
            bride/groom and their families before making a realtionship for life
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
