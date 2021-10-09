import React from "react";
import Navbar from './Layout/index';
import Slider from "./imageslider/Slider";
import App from "../components/DoctorsCard/card";
import Footer from "../components/Layout/Footer";


const PatientPortalHome = () => {
  return (
    <>
    
     <div>
      <Navbar />
      </div>

      <div>
        <Slider />
      </div> 

     

      <div>
        <App />
      </div> 
    <br>
    </br>
      <div>
       <Footer /> 
       </div> 
    </>
  );
};

export default PatientPortalHome;
