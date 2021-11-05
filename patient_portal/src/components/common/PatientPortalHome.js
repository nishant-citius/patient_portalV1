import React from "react";
import Navbar from "../Layout/index";
import Slider from "../imageslider/Slider";
import DoctorsCard from "../DoctorsCard/card";
import Footer from "../Layout/Footer";

const PatientPortalHome = () => {
  return (
    <>
      <div className="mt_63">
        <Slider />
      </div>
      <div>
        <DoctorsCard />
      </div>
      <br></br>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default PatientPortalHome;
