import React from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar/index';
import Slider from "./imageslider/Slider";


const PatientPortalHome = () => {
  return (
    <>
     <div>
      <Navbar />
      </div>

      <div>
        <Slider />
      </div>
     
    </>
  );
};

export default PatientPortalHome;
