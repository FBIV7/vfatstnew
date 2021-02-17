import React from "react";

const Vehicle = () => {
  return (
    <div>
    
      <div className="flex justify-center text-3xl section-title font-serif md:text-5xl">
        <h1 className="flex justify-center" style={{ marginTop: "100px" }}>
          VEHICLE VERIFICATION
        </h1>
      </div>
      <div className="about text-center m-22 col-span-3">
        <div className="about-text">
          <p>
            Before you buy a vehicle make sure that inspection is done well to
            check whether the vehicle is stolen or registered
          </p>
          <p>
            You don't want to go home with stolen vehicle or waste your
            hard-earned money by buying tolen vehicle with is ehy it's important
            to examine and do a complete inspection of thevehicle before you buy
            it.
          </p>
          <p>
            We are a <strong> vehicle verifcation company </strong> that
            provides end to end vehicle verfication online to check that the
            vehicle you are purchasing will be a wise transaction
          </p>
          <div className="flex justify-center text-3xl section-title font-serif md:text-5xl">
            <h1 className="flex justify-center" style={{ marginTop: "100px" }}>
              VEHICLE VERIFICATION IMPORTANCE
            </h1>
          </div>
          <li>
            It should be in proper condition so you don't have to worry about
            frequent repairs in the future.
          </li>
          <li>
            The vehicle should be registered so you don't run into any legal
            problems later in life.
          </li>
          <li>
            It Should not have any pending challans or laking with any document
            to void legal trouble during police checks.
          </li>
          <li>The vehicle should be genuine and not stolen.</li>
        </div>
        <p>
          Saving valuable time and energy so you get complete assurnace of the
          vehicle purchase.
        </p>
      </div>
    </div>
  );
};

export default Vehicle;
