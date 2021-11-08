import "../components/common/common_style.css";

import { AppBar } from "../mui";
import { ToolBar } from "../mui";
import { Badge } from "../mui";
import { Avatar } from "../mui";
import { Menu } from "../mui";
import { MenuItem } from "../mui";
import { InputBase } from "../mui";

import { SearchIcon } from "../mui-icons";
import { MailIcon } from "../mui-icons";
import { NotificationsIcon, PersonIcon } from "../mui-icons";
import { makeStyles, alpha } from "@material-ui/core";

import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import * as actioncreators from "../redux/actions/userActionCreater";
import { NavBtn, NavBtnLink } from "../components/Layout/NavbarElements";
import ModalPopup from "shared/dialog/ModalPopup";
import EditDialog from "shared/dialog/EditDialog";

import UserRequests from "components/admin/UserRequests";
import AppointmentNotifications from "components/admin/AppointmentNotifications";
import EditUser from "components/admin/common/EditUser";
import { Edit } from "@material-ui/icons";
import AddUsers from "components/admin/common/AddUsers";
import { adminService } from "services/register_user_service";
import PhyAppointmentNotifications from "../components/physician/PhyAppointmentNotification";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PatientAppointmentNotification from "../components/patient/PatientAppointmentNotification";

const mapStateToProps = (rootReducer) => {
  return {
    isLoggedIn: rootReducer.login.isLoggedIn,
    role: rootReducer.login.role,
    authToken: rootReducer.login.authToken,
    currentUser: rootReducer.login.loggedUserInfo,
    count: rootReducer.inactiveUsers.inactiveUserCount,
    total: rootReducer.approvedAppointments.approvedAppointmentCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actioncreators.Logout()),
  };
};

const useStyles = makeStyles((theme) => ({
  desktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  mobile: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobile_btn: {
    textDecoration: "none",
    textAlign: "center",
    padding: "3px",
    outline: "none",
    borderRadius: "5px",
    boxShadow: "0 1px 4px rgba(0, 0, 0, .6)",
    backgroundColor: "#2ecc71",
    color: " #ecf0f1",
    minWidth: "70px",
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  icons: {
    alignItems: "center",
    display: "flex",
  },
  searchbutton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function AppToolBar(props) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [openAppointmentPopup, setOpenAppointmentPopup] = useState(false);
  const [openPhyAppointmentPopup, setOpenPhyAppointmentPopup] = useState(false);
  const [users, setUsers] = useState([]);
  const [phy, setPhy] = useState([]);

  const classes = useStyles({ open });
  const history = useHistory();

  function HandleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  function Logout() {
    props.logout();
    handleClose();
    history.push("/");
  }

  function handleAdminNotification() {
    setOpenPopup(true);
  }

  function handleAppointmentNotification() {
    setOpenAppointmentPopup(true);
  }
  function handlePhyAppointmentNotification() {
    setOpenPhyAppointmentPopup(true);
  }

  useEffect(() => {
    todaysAppointments(new Date().toISOString().slice(0, 10));
    todaysAppointmentsPhy(
      new Date().toISOString().slice(0, 10),
      props.currentUser.id
    );
  }, []);

  function userProfile() {
    handleClose();
    history.push("/userProfile");
  }

  const todaysAppointments = (_date) => {
    adminService.appointmentsToday(_date).then(
      (response) => {
        setUsers(response.data);
      },
      (error) => {
        return;
      }
    );
  };

  const todaysAppointmentsPhy = (_date, _id) => {
    adminService.appointmentsPendingPhysician(_date, _id).then(
      (response) => {
        setPhy(response.data);
      },
      (error) => {
        return;
      }
    );
  };

  const displayNotificationIcons = () => {
    let iconJSX = null;

    if (props.role === "admin") {
      iconJSX = (
        <>
          <Badge badgeContent={props.count} color="secondary">
            <PersonIcon onClick={handleAdminNotification} />
          </Badge>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Badge badgeContent={users.length} color="secondary">
            <MailIcon onClick={handleAppointmentNotification} />
          </Badge>
        </>
      );
    } else if (props.role === "physician") {
      iconJSX = (
        <>
          <Badge badgeContent={phy.length} color="secondary">
            <CalendarTodayIcon onClick={handlePhyAppointmentNotification} />
          </Badge>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </>
      );
    } else {
    }

    return iconJSX;
  };

  return (
    <AppBar position="fixed">
      <ToolBar className={classes.toolbar}>
        <h3 className={classes.desktop}>Patient Portal</h3>
        <h3 className={classes.mobile}>P.P.</h3>

        {props.isLoggedIn === false ? (
          <>
            <NavBtn>
              <NavBtnLink to="/registeruser">Register Here</NavBtnLink>
              <NavBtnLink to="/login">Login</NavBtnLink>
            </NavBtn>
            <Link className={classes.mobile_btn} to="/registeruser">
              SignUp
            </Link>
            <Link className={classes.mobile_btn} to="/login">
              SignIn
            </Link>
          </>
        ) : (
          <>
            <div className={classes.icons}>
              {displayNotificationIcons()} &nbsp;&nbsp;&nbsp;&nbsp;
              <Avatar
                onClick={HandleClick}
                alt={props.currentUser.fName}
                src="/images/user.png"
              />
              <Menu
                className="mtop"
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
              >
                <MenuItem onClick={userProfile}>Profile</MenuItem>
                <MenuItem onClick={Logout}>Logout</MenuItem>
              </Menu>
            </div>
          </>
        )}
      </ToolBar>
      <ModalPopup
        title="User Requests"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <UserRequests />
      </ModalPopup>
      {/* <EditDialog
        title="User Requests"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AddUsers />
      </EditDialog> */}
      <ModalPopup
        title="Scheduled Appointment"
        openPopup={openAppointmentPopup}
        setOpenPopup={setOpenAppointmentPopup}
      >
        <AppointmentNotifications
          title="Scheduled Appointment"
          openPopup={openAppointmentPopup}
          setOpenPopup={setOpenAppointmentPopup}
        />
      </ModalPopup>
      <ModalPopup
        title="Scheduled Appointment"
        openPopup={openPhyAppointmentPopup}
        setOpenPopup={setOpenPhyAppointmentPopup}
      >
        <PhyAppointmentNotifications />
      </ModalPopup>
    </AppBar>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(AppToolBar);
