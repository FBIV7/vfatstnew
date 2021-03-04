import React from "react";

const Employee = () => {
  return (
    <div>

      <div className="flex justify-center  section-title font-serif md:text-5xl">
        <h1 className="flex justify-center" style={{ marginTop: "100px" }}>
          EMPLOYEE VERIFICATION
        </h1>
      </div>
      <div className="about text-center m-22 col-span-3">
        <div className="about-text">
          <p>
          Employees represent a company and thus are an integral part of it. If you will hire the right employees, your company will move in the right direction. It's not sufficient to take an application or CV at face value. You need to carry out a exhaustive and comprehensive background check to put you in the best possible position when you make a hiring decision. All of our screening services are performed in harmony with tried and established processes, and everything we do is subject to various quality controls
          </p>
          {/* <div className="flex justify-center font-serif md:text-5xl"> */}
            <h1 className="flex justify-center" style={{ marginTop: "10px" }}>
            BENEFITS
            </h1>
            <p>Employee’s background verification with VFAST will equip you with</p>
          {/* </div> */}
          <li>Global Coverage with Local Expertise</li>
          <li>The ability to manage multiple background checks online</li>
          <li>Fast turnaround times</li>
          <li>High quality searches, backed by numerous checks and quality controls</li>
        </div>
        <div className="flex justify-center  section-title font-serif md:text-5xl">
          <h1 className="flex justify-center" style={{ marginTop: "10px" }}>
          Key Background Checks

          </h1>
        </div>
        <li>Identity check</li>
        <li>Address verification</li>
        <li>Academic Verification Personal & Professional Reference</li>
        <li>Company search</li>
        <li>Criminal Check</li>
        <li>Employment History</li>
        <li>Drug Test</li>
        <li>Database Checks</li>

      </div>
      {/* <div className="flex justify-center  section-title font-serif md:text-5xl">
        <h1 className="flex justify-center" style={{ marginTop: "10px" }}>
          Employee Background Verification
        </h1>
      </div> */}
      {/* <p>
        Employee's background verification including education work experience,
        residential address screnning etc, is vital to building a secure comapny
        culture
      </p>
      <li>To avoid numerous future issues for the company</li>
      <li>To select the right candidate fit every time</li>
      <li>To improve and grow your business</li> */}
    </div>
  );
};

export default Employee;
