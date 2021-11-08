import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
// import Immunization from "../patient/Immunization";
import PhyMedicationAllergies from "../physician/PhyMedicationAllergy";
import Proceduers from "./PhyProcedure";
import DietPlan from "../physician/PatientDietPlan";
import Vitals from "./PatientVitals";
import { useParams, useLocation } from "react-router";
import * as actions from "../../redux/actions/userActionCreater";
import Diagnosis from "./PhyDiagnosis";
import ImmunizationDetails from "components/admin/ImmunizationDetails";

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

  const location = useLocation(),
    patientId = useParams(),
    { appointmentDetails } = location.state;

  useEffect(() => {
    if (props.isLoggedIn) {
      props.patientData(patientId.patintId);
    }
  }, []);

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
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Record Patient Vital" {...a11yProps(0)} />
            <Tab label="Immunization" {...a11yProps(1)} />
            <Tab label="Medication Allergies" {...a11yProps(2)} />
            <Tab label="Procedures" {...a11yProps(3)} />
            <Tab label="Diagnosis" {...a11yProps(4)} />
            <Tab label="Diet Plan" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <h6 className="text-success fw-bold m-3">
          Patient Name:
          {` ${props.userDetails.fName} ${props.userDetails.lName}`}
        </h6>
        <TabPanel value={value} index={0}>
          <Vitals
            patientId={patientId}
            flashNotification={props.flashNotification}
          />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <ImmunizationDetails
            patientId={patientId}
            fromAdmin={true}
            flashNotification={props.flashNotification}
          />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <PhyMedicationAllergies
            patientId={patientId}
            flashNotification={props.flashNotification}
          />
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Proceduers
            patientId={patientId}
            flashNotification={props.flashNotification}
          />
        </TabPanel>

        <TabPanel value={value} index={4}>
          <Diagnosis
            patientId={patientId}
            flashNotification={props.flashNotification}
          />
        </TabPanel>

        <TabPanel value={value} index={5}>
          <DietPlan
            patientId={patientId}
            apptDetails={appointmentDetails}
            flashNotification={props.flashNotification}
          />
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
