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
import PatientVitals from "../components/patient/PatientVitals";
import PatientInactiveError from "../components/patient/PatientInactiveError";

import Immunization from "../components/patient/Immunization";
import Vitals from "../components/physician/PatientVitals";
import DietPlan from "../components/physician/PatientDietPlan";
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
import Notification from "shared/notification/Notification";
import AppointmentList from "./patient/AppointmentList";
import ScheduleAppointment from "./patient/ScheduleAppointment";
import PhysicianAppointment from "./physician/PhysicianAppointment";
import Appointmentstoday from "./physician/Appointmentstoday";
import AttendAppointment from "./physician/AttendAppointment";
import AllergyDetails from "./admin/AllergyDetails";
import AddAllergy from "./admin/AddAllergy";
import Patient_Education from "./patient/Patient_Education";
import Patient_orders from "./patient/Patient_orders";
import UserProfile from "components/common/UserProfile";
import Billing from "components/admin/Billing";

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
    <>
      <Notification notify={notify} setNotify={setNotify} />
      <Switch>
        {/* -----------Common------------- */}
        <Route exact path="/" component={PatientPortalHome} />
        <div className="top_mt_100">
          <Route path="/login">
            <Login flashNotification={showSnacksBar} />
          </Route>
          <Route path="/registeruser">
            <RegisterUser flashNotification={showSnacksBar} />
          </Route>
          <Route path="/userProfile">
            <UserProfile flashNotification={showSnacksBar} />
          </Route>
          {/* -----------Common------------- */}
          {/* -----------Admin------------- */}
          <Route path="/admin">
            <AdminDashboard flashNotification={showSnacksBar} />
          </Route>
          <Route path="/patientlist">
            <PatientList flashNotification={showSnacksBar} />
          </Route>
          <Route path={"/allusers"}>
            <UserList flashNotification={showSnacksBar} />
          </Route>
          <Route path={"/addusers"}>
            <AddUsers flashNotification={showSnacksBar} />
          </Route>
          <Route path={"/physicianlist"}>
            <PhysicianList flashNotification={showSnacksBar} />
          </Route>
          <Route path={"/appointments"}>
            <Appointments flashNotification={showSnacksBar} />
          </Route>
          <Route path={"/immunizationdetails"}>
            <ImmunizationDetails flashNotification={showSnacksBar} />
          </Route>
          <Route path={"/allergies"}>
            <AllergyDetails flashNotification={showSnacksBar} />
          </Route>
          <Route path={"/addallergy"}>
            <AddAllergy flashNotification={showSnacksBar} />
          </Route>
          <Route path={"/userdetails/:id"}>
            <UserDetails flashNotification={showSnacksBar} />
          </Route>
          <Route path={"/edit/:id"}>
            <EditUser flashNotification={showSnacksBar} />
          </Route>
          <Route path={"/billing"}>
            <Billing flashNotification={showSnacksBar} />
          </Route>
          {/* -----------Admin------------- */}
          {/* -----------Physician------------- */}
          <Route path="/physician" component={Physician_dashboard} />
          <Route path={"/patientdata"} component={PatientList1} />
          <Route path={"/patientinactive"} component={PatientInactiveError} />
          <Route path={"/pappointments"} component={AppointmentList} />
          <Route
            path={"/physician_appointments"}
            component={PhysicianAppointment}
          />
          <Route path={"/schedule_appointment"}>
            <ScheduleAppointment flashNotification={showSnacksBar} />
          </Route>
          <Route path={"/appointmentstoday"}>
            <Appointmentstoday flashNotification={showSnacksBar} />
          </Route>
          <Route path={"/attendAppointment/:patintId"}>
            <AttendAppointment flashNotification={showSnacksBar} />
          </Route>
          {/* -----------Physician------------- */}
          {/* -----------Patient------------- */}
          <Route path="/patient" component={Patient_dashboard} />
          <Route path="/demographics" component={Demographics}>
            <Demographics flashNotification={showSnacksBar} />
          </Route>
          <Route path="/immunization" component={Immunization}>
            <Immunization flashNotification={showSnacksBar} />
          </Route>
          <Route path="/patientvitals" component={PatientVitals} />
          <Route path="/vitals" component={Vitals} />
          <Route path="/dietplan" component={DietPlan} />
          <Route path="/medic_allergy" component={Medication_Allergies}>
            <Medication_Allergies flashNotification={showSnacksBar} />
          </Route>
          <Route
            path={"/patientdemographics/userid"}
            component={PatientDemographics}
          />
          <Route path="/order" component={Patient_orders} />

          <Route path="/patient_education" component={Patient_Education} />
          {/* -----------Patient------------- */}
        </div>
      </Switch>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ShellComponent);

/* <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact-us" component={Contact} /> */
