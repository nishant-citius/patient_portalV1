import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as actioncreators from "../../../redux/actions/userActionCreater";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Immunization from "../ImmunizationDetails";
import Demographics from "../DemographicsDetails";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
import PhyMedicationAllergy from "components/physician/PhyMedicationAllergy";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

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

const UserDetails = (props) => {
  const { id } = useParams();
  const [value, setValue] = useState(0);

  useEffect(() => {
    loadUsers(id);
  }, [id]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const loadUsers = (_id) => {
    props.getUserDetails(id);
  };

  return (
    <>
      <div className="container py-4 mt-5">
        <h4 className="text-center fw-bold ">User Details</h4>
        {props.userDetails.role === "patient" ? (
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="User Details" {...a11yProps(0)} />
                <Tab label="Demographics" {...a11yProps(1)} />
                <Tab label="Immunization" {...a11yProps(2)} />
                <Tab label="Medication and Allergies" {...a11yProps(3)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <>
                <br></br>
                <Paper
                  sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}
                >
                  <Grid container spacing={4}>
                    <Grid item>
                      <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img
                          alt="complex"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWU5Tv-gm4fwZdFgthv_z2a5sLSbdnGIJLw&usqp=CAU"
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={4}>
                        <Grid item xs>
                          <Typography variant="body2" gutterBottom>
                            <span className="fw-bold"> Name : </span>
                            {`${props.userDetails.fName}  ${props.userDetails.lName}`}
                          </Typography>
                          <hr></hr>
                          <Typography variant="body2" gutterBottom>
                            <span className="fw-bold">DOB : </span>
                            {props.userDetails.dob}
                          </Typography>
                          <hr></hr>
                          <Typography variant="body2" gutterBottom>
                            <span className="fw-bold">Email : </span>
                            {props.userDetails.email}
                          </Typography>
                          <hr></hr>
                          <Typography variant="body2" gutterBottom>
                            <span className="fw-bold">Contact No : </span>
                            {props.userDetails.mobile}
                          </Typography>
                          <hr></hr>
                          <Typography variant="body2" gutterBottom>
                            <span className="fw-bold">Username : </span>
                            {props.userDetails.username}
                          </Typography>
                          <hr></hr>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Demographics
                patientId={props.userDetails.id}
                flashNotification={props.flashNotification}
              />
            </TabPanel>

            <TabPanel value={value} index={2}>
              <Immunization
                patientId={props.userDetails.id}
                flashNotification={props.flashNotification}
              />
            </TabPanel>

            <TabPanel value={value} index={3}>
              <PhyMedicationAllergy
                patientId={props.userDetails.id}
                fromAdmin={true}
              />
            </TabPanel>
          </Box>
        ) : (
          <>
            <br></br>
            <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
              <Grid container spacing={4}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img
                      alt="complex"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWU5Tv-gm4fwZdFgthv_z2a5sLSbdnGIJLw&usqp=CAU"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={4}>
                    <Grid item xs>
                      <Typography variant="body2" gutterBottom>
                        <span className="fw-bold"> Name : </span>
                        {`${props.userDetails.fName}  ${props.userDetails.lName}`}
                      </Typography>
                      <hr></hr>
                      <Typography variant="body2" gutterBottom>
                        <span className="fw-bold">DOB : </span>
                        {props.userDetails.dob}
                      </Typography>
                      <hr></hr>
                      <Typography variant="body2" gutterBottom>
                        <span className="fw-bold">Email : </span>
                        {props.userDetails.email}
                      </Typography>
                      <hr></hr>
                      <Typography variant="body2" gutterBottom>
                        <span className="fw-bold">Contact No : </span>
                        {props.userDetails.mobile}
                      </Typography>
                      <hr></hr>
                      <Typography variant="body2" gutterBottom>
                        <span className="fw-bold">Username : </span>
                        {props.userDetails.username}
                      </Typography>
                      <hr></hr>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (rootReducer) => {
  return {
    userDetails: rootReducer.userDetails.userDetails,
    globalmessage: rootReducer.patients.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetails: (userId) => dispatch(actioncreators.GetUserDetails(userId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
