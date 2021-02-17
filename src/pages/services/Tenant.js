import React from "react";


const Tenant = () => {
  return (
    <div>
    
      <div className="flex justify-center text-3xl section-title font-serif md:text-5xl">
        <h1 className="flex justify-center" style={{ marginTop: "100px" }}>
          TENANT VERFICATION
        </h1>
      </div>
      <div className="about text-center m-22 col-span-3">
        <div className="about-text">
          <p>
            Don't rent your house to just about anyone and make sure who's
            taking your home for rent is really trustworthy through{" "}
            <strong> police verifcation of tenants.</strong>
          </p>
          <p>
            You need to know that the person you are renting you home or flat is
            not involved with illicit activities and is not faking the
            residential address.
          </p>
          <p>
            We are a <strong>tenant verification service firm </strong>and we
            will help you verify the home address of the tenants along with a
            basic tenant background verification.
          </p>
          <p>
            Don't fall prey to tenant related fraud and stay 10 steps ahead of
            the drama with our professional background screening services.
          </p>
          <div className="text-left">
            <p>
              We give you a complete insight into the applicant's history so you
              know whom you are giving your home to and how safe is your how
              safe is your property and whether the tenant will be able to pay
              your rent in time or not.
            </p>
            <p>
              You never know how you may become a victim a fraud and may bump
              into tenant will be able to pay your rent on time
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-3xl section-title font-serif md:text-5xl">
        <h1 className="flex justify-center" style={{ marginTop: "100px" }}>
          Why should you consider a tenant verification?
        </h1>
      </div>
      <div className="about-text">
        <p>
          There are several reasons why should you consider a tenant background
          check other than the fact that it make your rental decisions easy:
        </p>
        <li>
          It's mandatory to conduct these background checks other under the
          section IPC-88
        </li>
        <li>
          To get assurance that the tenant will pay rent on time and shouldn't
          breach the rental agreement.
        </li>
        <li>To ensure the safety of landlords</li>
        <li>
          To secure police verifcation for the tenants before renting out the
          property.
        </li>
        <div className="flex justify-center text-3xl section-title font-serif md:text-5xl">
          <h1 className="flex justify-center" style={{ marginTop: "100px" }}>
            Services we provide:
          </h1>
        </div>
        <li>
          <strong>Full income verifcation:</strong> We will perform a complete
          full income verification to check whether the applicant is financially
          stable.
        </li>
        <li>
          <strong>Current and previous landlord checks :</strong> By checking
          the relationship of the applicant with the current and previous
          landlords, we will ensure their character and repuation.
        </li>
      </div>
      <li>
        <strong>Residential address verification:</strong> We will send our
        local surveyor to check whether the home adress is real or not and
        whether the apllicant is faking documnets.
      </li>
      <li>
        <strong>Rental Agreement Verification:</strong> We go through the
        reference checks of the tenant behaviour, living style and PR status
        with the neighbours.
      </li>
      <li>
        <strong>Criminal background Check:</strong> We provide the tenant
        background criminal check only on landlord demand with an additional
        service fee.
      </li>
      <div class="mt-4 items-center flex justify-between">
        <button
          class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
          type="submit"
        >
          SUBMIT REQUEST
        </button>
      </div>
    </div>
  );
};

export default Tenant;
