import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import PatientPortalHome from "../components/common/PatientPortalHome";
import { Switch, Route } from "react-router-dom";
import Login from "../components/common/Login";
import RegisterUser from "../components/common/RegisterUser";
import AdminDashboard from "../components/admin/AdminDashboard";
import Patient_dashboard from "../components/patient/Patient_dashboard";
import Physician_dashboard from "../components/physician/Physician_dashboard";
import Demographics from "../components/patient/Demographics";
import PatientInactiveError from "../components/patient/PatientInactiveError";

import Immunization from "../components/patient/Immunization";
import Medication_Allergies from "../components/patient/Medication_Allergies";
import "react-calendar/dist/Calendar.css";
import { connect } from "react-redux";

import PatientList from "../components/admin/PatientList";
import PatientList1 from "../components/physician/PatientData";
import PatientDemographics from "../components/physician/PatientDemographics";
import PhysicianList from "../components/admin/PhysicianList";
import Appointments from "../components/admin/Appointments";
import ImmunizationDetails from "../components/admin/ImmunizationDetails";
import EditUser from "../components/admin/common/EditUser";
import UserDetails from "../components/admin/common/UserDetails";
import UserList from "../components/admin/Userslist";

import * as actioncreators from "../redux/actions/userActionCreater";
import AddUsers from "./admin/common/AddUsers";
import MyProfile from "./patient/MyProfile";
import Notification from "shared/notification/Notification";
import { object } from "yup/lib/locale";
import AppointmentList from "./patient/AppointmentList";
import ScheduleAppointment from "./patient/ScheduleAppointment";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const mapStateToProps = (rootReducer) => {
  return {
    isLoggedIn: rootReducer.login.isLoggedIn,
    role: rootReducer.login.role,
    authToken: rootReducer.login.authToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actioncreators.Logout()),
  };
};

function ShellComponent(props) {
  const classes = useStyles();

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const showSnacksBar = (_object) => {
    setNotify({
      isOpen: true,
      message: _object.message,
      type: _object.type,
    });
  };

  return (
    <div className="top_mt_100">
      <Notification notify={notify} setNotify={setNotify} />
      <Switch>
        <Route exact path="/" component={PatientPortalHome} />
        <Route path="/login">
          <Login flashNotification={showSnacksBar} />
        </Route>
        <Route path="/registeruser">
          <RegisterUser flashNotification={showSnacksBar} />
        </Route>
        {/* <Route path="/admin" component={AdminDashboard} /> */}
        <Route path="/admin">
          <AdminDashboard flashNotification={showSnacksBar} />
        </Route>
        <Route path="/patient" component={Patient_dashboard} />
        <Route path="/physician" component={Physician_dashboard} />
        <Route path="/demographics" component={Demographics}>
          <Demographics flashNotification={showSnacksBar} />
        </Route>
        <Route path="/immunization" component={Immunization} />
        <Route path="/myprofile" component={MyProfile} />
        <Route path="/medic_allergy" component={Medication_Allergies} />
        {/* <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact-us" component={Contact} /> */}
        <Route path={"/patientlist"} component={PatientList} />
        <Route path={"/allusers"} component={UserList} />
        <Route path={"/addusers"} component={AddUsers} />
        <Route path={"/physicianlist"} component={PhysicianList} />
        <Route path={"/appointments"} component={Appointments} />
        <Route path={"/immunizationdetails"} component={ImmunizationDetails} />
        <Route path={"/userdetails/:id"} component={UserDetails} />
        <Route path={"/edit/:id"} component={EditUser} />
        <Route path={"/patientdata"} component={PatientList1} />
        <Route path={"/patientdemographics"} component={PatientDemographics} />
        <Route path={"/patientinactive"} component={PatientInactiveError} />
        <Route path={"/pappointments"} component={AppointmentList} />
        <Route path={"/schedule_appointment"}>
          <ScheduleAppointment flashNotification={showSnacksBar} />
        </Route>
      </Switch>
    </div>
  );
}

//export default ShellComponent;
export default connect(mapStateToProps, mapDispatchToProps)(ShellComponent);
