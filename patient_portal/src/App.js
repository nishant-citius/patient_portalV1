import "./App.css";
import { Switch, Route } from "react-router-dom";
import {Link} from "react-router-dom";
import PatientPortalHome from "components/PatientPortalHome";
import Login from "components/Login";
import RegisterUser from "components/RegisterUser";
import Admin_dashboard from "./components/admin/Admin_dashboard";
import Patient_dashboard from "./components/patient/Patient_dashboard";
import Physician_dashboard from "./components/physician/Physician_dashboard";
import About from 'pages/about';
import Services from 'pages/services';
import Contact from 'pages/contact';
import React from 'react';




function App() {
  return (
    <>
      
      <div>
      <Switch>
        <Route exact path="/" component={PatientPortalHome} />
        <Route path="/Login" component={Login} />
        <Route path="/RegisterUser" component={RegisterUser} />
        <Route path="/admin" component={Admin_dashboard} />
        <Route path="/patient" component={Patient_dashboard} />
        <Route path="/physician" component={Physician_dashboard} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} /> 
      </Switch>
      </div>


    


      
    </>
  );
}

export default App;
