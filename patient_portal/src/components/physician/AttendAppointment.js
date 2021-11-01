import React, { useState, useEffect } from "react";
import Calendar from "shared/calendar/Calendar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { adminService } from "../../services/register_user_service";
import PhyAppointmentList from "./PhyAppointmentList";

import Vitals from "./PatientVitals";
import Immunization from "../patient/Immunization";
import Medication_Allergies from "../patient/Medication_Allergies";

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

const AttendAppointment = (props) => {
  const [value, setValue] = useState(0);
  const [appts, setAppts] = useState([]);

  useEffect(() => {
    if (props.isLoggedIn) {
      userAppointments(props.currentUser.id);
    }
  }, []);

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
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Record Patient Vital" {...a11yProps(0)} />
            <Tab label="Immunization" {...a11yProps(1)} />
            <Tab label="Medication Allergies" {...a11yProps(0)} />
            <Tab label="Diagnosis/Lab Reports" {...a11yProps(1)} />
            <Tab label="Diet Plan" {...a11yProps(0)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Vitals patientId={props.apptDetails} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Immunization />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Vitals />
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Vitals />
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Vitals />
        </TabPanel>
      </Box>
    </>
  );
};
const mapStatetoProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    role: state.login.role,
    globalmessage: state.login.globalmessage,
    authToken: state.login.authToken,
    currentUser: state.login.loggedUserInfo,
  };
};

export default connect(mapStatetoProps, null)(AttendAppointment);
