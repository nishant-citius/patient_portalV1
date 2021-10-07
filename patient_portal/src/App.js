import "./App.css";
import { Switch, Route } from "react-router-dom";
import PatientPortalHome from "./components/PatientPortalHome";
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";
import Admin_dashboard from "./components/admin/Admin_dashboard";
import Patient_dashboard from "./components/patient/Patient_dashboard";
import Physician_dashboard from "./components/physician/Physician_dashboard";
import PatientList from "./components/admin/PatientDetails/PatientList";
import PatientDetails from "./components/admin/PatientDetails/PatientDetails";
import PhysicianList from "./components/admin/PhysicianDetails/PhysicianList";
import PhysicianDetails from "./components/admin/PhysicianDetails/PhysicianDetails";
import UserList from "./components/admin/UserDetails/UserList";
import Appointments from "./components/admin/AppointmentDetails/Appointments";
import ImmunizationDetails from "./components/admin/ImmunizationDetails/ImmunizationDetails";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={PatientPortalHome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegisterUser} />
        <Route path="/admin" component={Admin_dashboard} />
        <Route path="/patient" component={Patient_dashboard} />
        <Route path="/physician" component={Physician_dashboard} />

        {/* *****Admin Routes***** */}
        <Route path={"/patientlist"} component={PatientList} />
        <Route path={"/patientdetails"} component={PatientDetails} />
        <Route path={"/physicianlist"} component={PhysicianList} />
        <Route path={"/physiciandetails"} component={PhysicianDetails} />
        <Route path={"/userlist"} component={UserList} />
        <Route path={"/appointments"} component={Appointments} />
        <Route
          path={"/admin/immunizationdetails"}
          component={ImmunizationDetails}
        />
        {/* *****Admin Routes***** */}
      </Switch>
    </>
  );
}

export default App;
