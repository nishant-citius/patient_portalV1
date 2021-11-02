import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { adminService } from "../../services/register_user_service";
import Immunization from "../patient/Immunization";
import PhyMedicationAllergies from "../physician/PhyMedicationAllergy";
import LabReports from "../physician/reports";
import DietPlan from "../physician/PatientDietPlan";
import Vitals from "./PatientVitals";
import { useParams } from "react-router";
import * as actions from "../../redux/actions/userActionCreater";

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

  const patientId = useParams();

  useEffect(() => {
    if (props.isLoggedIn) {
      userAppointments(props.currentUser.id);
      props.patientData(patientId.patintId);
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
            <Tab label="Medication Allergies" {...a11yProps(2)} />
            <Tab label="Diagnosis/Lab Reports" {...a11yProps(3)} />
            <Tab label="Diet Plan" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <h6 className="text-success fw-bold m-3">
          Patient Name:
          {` ${props.userDetails.fName} ${props.userDetails.lName}`}
        </h6>
        <TabPanel value={value} index={0}>
          <Vitals patientId={patientId} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Immunization />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <PhyMedicationAllergies />
        </TabPanel>

        <TabPanel value={value} index={3}>
          <LabReports />
        </TabPanel>

        <TabPanel value={value} index={4}>
          <DietPlan />
        </TabPanel>
      </Box>
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    currentUser: state.login.loggedUserInfo,
    userDetails: state.userDetails.userDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    patientData: (userId) => dispatch(actions.GetUserDetails(userId)),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(AttendAppointment);
