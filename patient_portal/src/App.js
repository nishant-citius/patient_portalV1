import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import PatientPortalHome from "./components/PatientPortalHome";
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";
import Admin_dashboard from "./components/admin/Admin_dashboard";
import Patient_dashboard from "./components/patient/Patient_dashboard";
import Physician_dashboard from "./components/physician/Physician_dashboard";
import Demographics from "./components/patient/Demographics";
import Immuniztion from "./components/patient/Immuniztion";
import Slider from "./components/imageslider/Slider";
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';





import PatientList from "./components/admin/PatientDetails/PatientList";
import PatientDetails from "./components/admin/PatientDetails/PatientDetails";
import PhysicianList from "./components/admin/PhysicianDetails/PhysicianList";
import PhysicianDetails from "./components/admin/PhysicianDetails/PhysicianDetails";
import UserList from "./components/admin/UserDetails/UserList";
import Appointments from "./components/admin/AppointmentDetails/Appointments";
import ImmunizationDetails from "./components/admin/ImmunizationDetails/ImmunizationDetails";
import EditUser from "./components/admin/PatientDetails/EditUser";
import AddNewUser from "components/admin/PatientDetails/AddNewUser";

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
          <Route path="/demographics" component={Demographics} />
          <Route path="/immuniztion" component={Immuniztion} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact-us" component={Contact} />

          {/* *****Admin Routes***** */}
          <Route path={"/patientlist"} component={PatientList} />
          <Route path={"/physicianlist"} component={PhysicianList} />
          <Route path={"/physiciandetails"} component={PhysicianDetails} />
          <Route path={"/userlist"} component={UserList} />
          <Route path={"/appointments"} component={Appointments} />
          <Route
            path={"/immunizationdetails"}
            component={ImmunizationDetails}
          />
          <Route path={"/patientdetails/:id"} component={PatientDetails} />
          <Route path={"/edit/:id"} component={EditUser} />
          <Route path={"/addnewuser"} component={AddNewUser} />

          {/* *****Admin Routes***** */}
        </Switch>
      </div>
    </>
  );
}

export default App;
