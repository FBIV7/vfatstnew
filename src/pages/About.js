import React from "react";
const About = () => {
  return (
    <div className="verificationStyle">
      <div className="flex justify-center text-3xl section-title font-serif md:text-5xl">
        <h1 className="flex justify-center font" style={{ marginTop: "100px" }}>
          ABOUT US
        </h1>
      </div>
      <div className="block md:grid grid-cols-5 gap-4  ">
        <div className="flex justify-center col-span-2 ">
          {" "}
          <img
            src="/assets/employee1.jpg"
            className="img-responsive"
            alt=""
          />{" "}
        </div>
        <div className="about text-center m-22 col-span-3">
          <div className="about-text">
            <p>
              VFAST is the fastest evolving verification product by FBIV Infcomm
              Pvt Ltd in India. We provide a compliant & robust background
              verification process to help large enterprises, small business,
              startup and individuals to build sucessful realtionship with their
              applicants based on trust and safety.
            </p>
            <div className="text-center m-4 ">
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul className='aboutLi'>
                    <li className='fontServ'>TRUST</li>
                    <li className='fontServ'>TECHNOLOGY</li>
                    <li className='fontServ'>EVIDENCE</li>
                    <li className='fontServ'> RELIABILITY</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
