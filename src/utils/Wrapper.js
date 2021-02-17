import React from "react";
import Slider from "../pages/Slider";
import Verification from "../pages/Verification";
import About from "../pages/About";
import Services from "../pages/Services";
import Landing from "../pages/Landing";
import Membership from '../pages/Membership'
import Footer from "../pages/Footer";

function Wrapper() {
  return (
    <div>
      <Slider />
      <Verification />
      <About />
      <Services />
      <Landing />
      <Membership />
      <Footer />
    </div>
  );
}

export default Wrapper;
