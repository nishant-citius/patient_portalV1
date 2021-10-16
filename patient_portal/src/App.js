import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
//import PatientPortalHome from "./components/common/PatientPortalHome";
// import Login from "./components/common/Login";
// import RegisterUser from "./components/common/RegisterUser";
// import AdminDashboard from "./components/admin/AdminDashboard";
// import Patient_dashboard from "./components/patient/Patient_dashboard";
// import Physician_dashboard from "./components/physician/Physician_dashboard";
// import Demographics from "./components/patient/Demographics";
// import Immunization from "./components/patient/Immunization";
// import Medication_Allergies from "components/patient/Medication_Allergies";
// import Slider from "./components/imageslider/Slider";
// import About from "./pages/about";
// import Services from "./pages/services";
// import Contact from "./pages/contact";
// import 'react-calendar/dist/Calendar.css';
// import { connect } from "react-redux";


// import PatientList from "./components/admin/PatientList";
// import PhysicianList from "./components/admin/PhysicianList";
// import Appointments from "./components/admin/Appointments";
// import ImmunizationDetails from "./components/admin/ImmunizationDetails";
// import EditUser from "./components/admin/common/EditUser";
// import UserDetails from "./components/admin/common/UserDetails";
// import UserList from "components/admin/Userslist";
// import Navbar from "components/Layout";
// import Navbar from "./components/admin/common/Navbar";

////////////////////////////////////////////////////////////////
import logo from './logo.svg';
import './App.css';
import { Button } from './mui';
import { PersonIcon } from './mui-icons';
import { DeleteIcon } from './mui-icons';
import {Grid} from './mui';

import AppToolBar from './navigation/AppToolBar';
import SideNav from './navigation/SideNav';
import ShellComponent from './components/ShellComponent';
import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//import React from 'react';
import * as actioncreators from './redux/actions/userActionCreater';
/////////////////////////////////////////////////////////////////
const mapStateToProps = (rootReducer) => {
  return {
      isLoggedIn: rootReducer.login.isLoggedIn,
      role: rootReducer.login.role,
      authToken: rootReducer.login.authToken
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//       logout: () => dispatch(actioncreators.Logout()) 
//   }
// }
function App(props) {
  return (
    <>         
      <div> 
       
                    
      <AppToolBar/>
      {
          (props.isLoggedIn == false)
          ?
              (
                 <React.Fragment>
                  <Grid container>
                    <Grid item sm={12} xs={12}>
                        <ShellComponent/>
                    </Grid>
                  </Grid>   
                 </React.Fragment>
                 
              )
          :
          (
             <React.Fragment>
                <Grid container>
                  <Grid item sm={2} xs={2}>
                      <SideNav role="physicianx"/>
                  </Grid>
                  <Grid item sm={10} xs={10}>
                      <ShellComponent/>
                  </Grid>
                </Grid> 
             </React.Fragment>
          ) 
        }
      </div>
    </>
  );
}
export default connect(mapStateToProps, null)(App);
//export default App;
