import React, { useState, useEffect } from "react";
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

const Patient_orders = (props) => {
  const [value, setValue] = useState(0);
  const [Diet, setpDiet] = useState([]);
  const [Procedure, setProcedure] = useState([]);
  const [Diagnosis, setDiagnosis] = useState([]);
  const [Vitals, setpVitals] = useState(false);

  useEffect(() => {
    if (props.isLoggedIn) {
      userDiet(props.currentUser.id);
      userProcedure(props.currentUser.id);
      userDiagnosis(props.currentUser.id);
    }
    if (props.patientvitalsDetails.length > 0) {
      setpVitals(true);
    }
  }, []);

  function userDiet(patientId) {
    adminService.getPatientDiet(patientId).then(
      (response) => {
        setpDiet(response.data);
      },
      (error) => {
        return;
      }
    );
  }

  function userProcedure(patientId) {
    adminService.getPatientProcedures(patientId).then(
      (response) => {
        setProcedure(response.data);
      },
      (error) => {
        return;
      }
    );
  }

  function userDiagnosis(patientId) {
    adminService.getPatientDiagnosis(patientId).then(
      (response) => {
        setDiagnosis(response.data);
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
            <Tab label="Diet Plan" {...a11yProps(0)} />
            <Tab label="Patient Vital" {...a11yProps(1)} />
            <Tab label="Procedures" {...a11yProps(2)} />
            <Tab label="Daignosis" {...a11yProps(3)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <>
            {Diet.length > 0 ? (
              <div className="row">
                <div className="col-12 col-md-4">
                  <p>
                    <span className="txt_757575">Early Morning: </span>
                    <br />
                    <span classNam="txt_e0e0e0">{Diet[0].earlymorning}</span>
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <p>
                    <span className="txt_757575">Mid Morning: </span>
                    <br />
                    <span classNam="txt_e0e0e0">{Diet[0].mid_morning}</span>
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <p>
                    <span className="txt_757575">Breakfast: </span>
                    <br />
                    <span classNam="txt_e0e0e0">{Diet[0].breakfast}</span>
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <p>
                    <span className="txt_757575">Lunch: </span>
                    <br />
                    <span classNam="txt_e0e0e0">{Diet[0].lunch}</span>
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <p>
                    <span className="txt_757575">Evening: </span>
                    <br />
                    <span classNam="txt_e0e0e0">{Diet[0].evening}</span>
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <p>
                    <span className="txt_757575">Dinner: </span>
                    <br />
                    <span classNam="txt_e0e0e0">{Diet[0].dinner}</span>
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <p>
                    <span className="txt_757575">After Dinner: </span>
                    <br />
                    <span classNam="txt_e0e0e0">
                      {Diet[0].post_dinner_activity}
                    </span>
                  </p>
                </div>
                <div className="col-12 col-md-4">
                  <p>
                    <span className="txt_757575">Bed Time: </span>
                    <br />
                    <span classNam="txt_e0e0e0">{Diet[0].bedtime}</span>
                  </p>
                </div>
              </div>
            ) : (
              <p className="txt_757575">No Data Available</p>
            )}
          </>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {Vitals ? (
            <div className="row">
              <div className="col-12 col-md-4">
                <p>
                  <span className="txt_757575">Height: </span>
                  <br />
                  <span classNam="txt_e0e0e0">
                    {props.patientvitalsDetails[0].height}
                  </span>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <p>
                  <span className="txt_757575">Weight: </span>
                  <br />
                  <span classNam="txt_e0e0e0">
                    {props.patientvitalsDetails[0].weight}
                  </span>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <p>
                  <span className="txt_757575">Blood Pressure: </span>
                  <br />
                  <span classNam="txt_e0e0e0">
                    {props.patientvitalsDetails[0].blood_pressure}
                  </span>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <p>
                  <span className="txt_757575">Temperature: </span>
                  <br />
                  <span classNam="txt_e0e0e0">
                    {props.patientvitalsDetails[0].temperature}
                  </span>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <p>
                  <span className="txt_757575">Pulse: </span>
                  <br />
                  <span classNam="txt_e0e0e0">
                    {props.patientvitalsDetails[0].pulse}
                  </span>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <p>
                  <span className="txt_757575">Respiration: </span>
                  <br />
                  <span classNam="txt_e0e0e0">
                    {props.patientvitalsDetails[0].respiration}
                  </span>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <p>
                  <span className="txt_757575">Saturation: </span>
                  <br />
                  <span classNam="txt_e0e0e0">
                    {props.patientvitalsDetails[0].oxigen_saturation}
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <p className="txt_757575">No Data Available</p>
          )}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {Procedure.length > 0 ? (
            <div className="row">
              <div className="col-12">
                <p>
                  <span className="txt_757575">Procedure Name </span>
                  <br />
                  <span classNam="txt_e0e0e0">{Procedure[0].desc}</span>
                </p>
              </div>
              <div className="col-12">
                <p>
                  <span className="txt_757575">Procedure Code </span>
                  <br />
                  <span classNam="txt_e0e0e0">{Procedure[0].code}</span>
                </p>
              </div>
            </div>
          ) : (
            <p className="txt_757575">No Data Available</p>
          )}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {Diagnosis.length > 0 ? (
            <div className="row">
              <div className="col-12">
                <p>
                  <span className="txt_757575">Diagnosis Description </span>
                  <br />
                  <span classNam="txt_e0e0e0">{Diagnosis[0].description}</span>
                </p>
              </div>
              <div className="col-12">
                <p>
                  <span className="txt_757575">Diagnosis Code </span>
                  <br />
                  <span classNam="txt_e0e0e0">{Diagnosis[0].code}</span>
                </p>
              </div>
            </div>
          ) : (
            <p className="txt_757575">No Data Available</p>
          )}
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
    currentUser: state.login.loggedUserInfo,
    patientvitalsDetails: state.getPatientvitals.getPatientvitals,
  };
};

export default connect(mapStatetoProps, null)(Patient_orders);
