import { makeStyles } from "@material-ui/core";
import { Container } from "../mui";
import {
  HomeIcon,
  AccessibilityIcon,
  ArchiveIcon,
  DashboardIcon,
  GroupIcon,
  ListAltIcon,
  PermContactCalendarIcon,
  ReceiptIcon,
  DetailsIcon,
  ContactPhoneIcon,
} from "../mui-icons";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import * as actioncreators from "../redux/actions/userActionCreater";
import { connect } from "react-redux";
import "./navigation.css";
import {
  LineStyle,
  PermIdentity,
  AttachMoney,
  WorkOutline,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    // // borderRadius: "10px",
    // height: "auto",
    // // color: "black",
    // paddingTop: theme.spacing(10),
    // backgroundColor: "#3f51b5",
    // position: "sticky",
    // top: 0,

    height: "100%",
    borderRadius: "5px",
    marginLeft: "5px",
    backgroundColor: "#3f51b5",
    position: "fixed",
    paddingTop: theme.spacing(4),
    top: "75px",

    [theme.breakpoints.up("sm")]: {
      maxWidth: "210px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "60px",
    },
  },
  item: {
    marginTop: "18px",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(4),
    },
  },
  icon: {
    color: "#fff",
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  text: {
    fontSize: "13px",
    marginBottom: "0",
    color: "#fff",
    fontFamily: "sans-serif",
    fontWeight: "normal",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  headerText: {
    fontSize: "18px",
    marginBottom: "5px",
    color: "#000000",
    textAlign: "center",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  HeaderColor: {
    background: "#fff",
    borderRadius: "3px",
    padding: "5px",
  },
}));

const mapStateToProps = (rootReducer) => {
  return {
    isLoggedIn: rootReducer.login.isLoggedIn,
    role: rootReducer.login.role,
    authToken: rootReducer.login.authToken,
    currentUser: rootReducer.login.loggedUserInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actioncreators.Logout()),
  };
};

function SideNav(props) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.HeaderColor}>
        <h5 style={{ color: "#3f51b5" }} className={classes.headerText}>
          Welcome {props.currentUser.fName}
        </h5>
      </div>

      {
        // Admin Menu====================================================================================
        props.role === "admin" ? (
          <div className="sideNav">
            <div className={classes.item}>
              <Link to="/admin">
                <DashboardIcon className={classes.icon} />
                <span className={classes.text}>Dashboard</span>
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="/allusers">
                <GroupIcon className={classes.icon} />
                <span className={classes.text}>All Users</span>
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="/patientlist">
                <ListAltIcon className={classes.icon} />
                <span className={classes.text}>Manage Patient</span>
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="physicianlist">
                <ListAltIcon className={classes.icon} />
                <span className={classes.text}>Manage Physician</span>
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="/appointments">
                <Icon icon="whh:appointment" className={classes.icon} />
                <span className={classes.text}>Appointments</span>
              </Link>
            </div>
            {/* <div className={classes.item}>
              <Link to="/immunizationdetails">
                <DetailsIcon className={classes.icon} />
                <span className={classes.text}>Immunization Details</span>
              </Link>
            </div> */}
            <div className={classes.item}>
              <Link to="/allergies">
                <ListAltIcon className={classes.icon} />
                <span className={classes.text}>Manage Allergy</span>
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="/billing">
                <ReceiptIcon className={classes.icon} />
                <span className={classes.text}>Billing</span>
              </Link>
            </div>
          </div>
        ) : // Patient Menu==================================================================================

        props.role === "patient" && props.currentUser.isActive ? (
          <div className="sideNav">
            <div className={classes.item}>
              <Link to="/patient">
                <DashboardIcon className={classes.icon} />
                <span className={classes.text}>Patient Dashboard</span>
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="/schedule_appointment">
                <Icon icon="whh:appointment" className={classes.icon} />
                <span className={classes.text}>Schedule Appointment</span>
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="/pappointments">
                <ListAltIcon className={classes.icon} />
                <span className={classes.text}>Appointment History</span>
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="/demographics">
                <Icon icon="fa:wpforms" className={classes.icon} />
                <span className={classes.text}>Demographics</span>
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="/medic_allergy">
                <Icon icon="fa:wpforms" className={classes.icon} />
                <span className={classes.text}>Medication & Allergies</span>
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="/immunization">
                <Icon icon="fa:wpforms" className={classes.icon} />
                <span className={classes.text}>Immunization Details</span>
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="/patientvitals">
                <Icon icon="mdi:heart-pulse" className={classes.icon} />
                <span className={classes.text}>Patient Vitals</span>
              </Link>
            </div>
            {/* <div className={classes.item}>
              <Link to="">
                <Icon icon="mdi:heart-pulse" className={classes.icon} />
                <span className={classes.text}>Patient DietPlan</span>
              </Link>
            </div> */}
            <div className={classes.item}>
              <Link to="/order">
                <DetailsIcon className={classes.icon} />
                <span className={classes.text}>Orders</span>
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="/patient_education">
                <Icon icon="mdi:cast-education" className={classes.icon} />
                <span className={classes.text}>Patient Education</span>
              </Link>
            </div>
          </div>
        ) : // physician Menu==============================================================================
        props.role === "physician" ? (
          <div className="sideNav">
            <div className={classes.item}>
              <Link to="/physician">
                <DashboardIcon className={classes.icon} />
                <span className={classes.text}>Physician Dashboard</span>
              </Link>
            </div>
            <div className={classes.item}>
              <Link to="/physician_appointments">
                <DashboardIcon className={classes.icon} />
                <span className={classes.text}>Manage Appointments</span>
              </Link>
            </div>
            {/* <div className={classes.item}>
              <Link to="/patientdata">
                <ContactPhoneIcon className={classes.icon} />
                <span className={classes.text}>Patient List</span>
              </Link>
            </div> */}
            <div className={classes.item}>
              <Link to="/appointmentstoday">
                <DashboardIcon className={classes.icon} />
                <span className={classes.text}>Today's Patients</span>
              </Link>
            </div>
          </div>
        ) : null
      }
    </Container>
  );
}

//export default SideNav;
export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
