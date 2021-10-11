import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import PatientPortalHome from "./components/PatientPortalHome";
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";
import AdminDashboard from "./components/admin/AdminDashboard";
import Patient_dashboard from "./components/patient/Patient_dashboard";
import Physician_dashboard from "./components/physician/Physician_dashboard";
import Demographics from "./components/patient/Demographics";
import Immunization from "./components/patient/Immunization";
import Slider from "./components/imageslider/Slider";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";

import PatientList from "./components/admin/PatientList";
import PhysicianList from "./components/admin/PhysicianList";
import Appointments from "./components/admin/Appointments";
import ImmunizationDetails from "./components/admin/ImmunizationDetails";
import EditUser from "./components/admin/common/EditUser";
import UserDetails from "./components/admin/common/UserDetails";

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path="/" component={PatientPortalHome} />
          <Route path="/login" component={Login} />
          <Route path="/registeruser" component={RegisterUser} />

          <Route path="/admin" component={AdminDashboard} />
          <Route path="/patient" component={Patient_dashboard} />
          <Route path="/physician" component={Physician_dashboard} />

          <Route path="/demographics" component={Demographics} />
          <Route path="/immunization" component={Immunization} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact-us" component={Contact} />

          {/* *****Admin Routes***** */}
          <Route path={"/patientlist"} component={PatientList} />
          <Route path={"/physicianlist"} component={PhysicianList} />
          <Route path={"/appointments"} component={Appointments} />
          <Route
            path={"/immunizationdetails"}
            component={ImmunizationDetails}
          />
          <Route path={"/userdetails/:id"} component={UserDetails} />
          <Route path={"/edit/:id"} component={EditUser} />
          {/* *****Admin Routes***** */}
        </Switch>
      </div>
    </>
  );
}

export default App;
