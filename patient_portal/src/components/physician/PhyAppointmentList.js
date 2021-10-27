import React, { useState, useEffect } from "react";
import Calendar from "shared/calendar/Calendar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { adminService } from "../../services/register_user_service";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function PhyAppointmentList(props) {
  const [value, setValue] = useState(0);
  const [appts, setAppts] = useState([]);

  useEffect(() => {
    if (props.isLoggedIn) {
      userAppointments(props.currentUser.id);
    }
  }, []);

  let appointmentsList = [
    {
      id: "event-1",
      label: "Medical consultation", //aPPOINTMENT tITLE
      groupLabel: "Dr Shaun Murphy", //physician name
      user: "Dr Shaun Murphy", //physician name
      color: "#f28f6a",
      startHour: "04:00 AM",
      endHour: "05:00 AM",
      date: "2021-09-28",
      createdAt: new Date(),
      createdBy: "Kristina Mayer", //PatientName
    },
    {
      id: "event-2",
      label: "Medical consultation",
      groupLabel: "Dr Claire Brown",
      user: "Dr Claire Brown",
      color: "#099ce5",
      startHour: "09:00 AM",
      endHour: "10:00 AM",
      date: "2021-09-29",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-3",
      label: "Medical consultation",
      groupLabel: "Dr Menlendez Hary",
      user: "Dr Menlendez Hary",
      color: "#263686",
      startHour: "13 PM",
      endHour: "14 PM",
      date: "2021-09-30",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-4",
      label: "Consultation prénatale",
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy",
      color: "#f28f6a",
      startHour: "08:00 AM",
      endHour: "09:00 AM",
      date: "2021-10-01",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
  ];

  function userAppointments(physicianId) {
    adminService.getPhysicianAppointments(physicianId).then(
      (response) => {
        setAppts(response.data);
      },
      (error) => {
        return;
      }
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {/* <Calendar /> */}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Appointment List" {...a11yProps(0)} />
            <Tab label="Calender View" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Appointment List
        </TabPanel>
        <TabPanel value={value} index={1}>
          {props.isLoggedIn ? <Calendar apopointmnets={appts} /> : ""}
        </TabPanel>
      </Box>
    </>
  );
}

const mapStatetoProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    role: state.login.role,
    globalmessage: state.login.globalmessage,
    authToken: state.login.authToken,
    currentUser: state.login.loggedUserInfo,
  };
};

export default connect(mapStatetoProps, null)(PhyAppointmentList);