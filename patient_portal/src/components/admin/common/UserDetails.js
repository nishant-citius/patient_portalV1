import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as actioncreators from "../../../redux/actions/userActionCreater";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Immunization from "../../patient/Immunization";

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
        <h3 className="text-success text-center fw-bold ">User Details</h3>
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
                <Tab label="Lab Reports" {...a11yProps(4)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <>
                <div className="d-flex">
                  <ul className="list-group w-50">
                    <li className="list-group-item">
                      <span className="fw-bold">Name:</span>
                      {`${props.userDetails.fName}  ${props.userDetails.lName}`}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">DOB:</span>
                      {props.userDetails.dob}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Email:</span>
                      {props.userDetails.email}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Contact No:</span>
                      {props.userDetails.mobile}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Username:</span>
                      {props.userDetails.username}
                    </li>
                  </ul>
                </div>
              </>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <h1>Demogrphics</h1>
            </TabPanel>

            <TabPanel value={value} index={2}>
              <Immunization />
            </TabPanel>

            <TabPanel value={value} index={3}>
              <h1>Medication and Allergies</h1>
            </TabPanel>

            <TabPanel value={value} index={4}>
              <h1>Lab Reports</h1>
            </TabPanel>
          </Box>
        ) : (
          <div className="d-flex justify-content-center">
            <ul className="list-group w-50">
              <li className="list-group-item">
                <span className="fw-bold">Name:</span>
                {`${props.userDetails.fName}  ${props.userDetails.lName}`}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">DOB:</span> {props.userDetails.dob}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Email:</span>
                {props.userDetails.email}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Contact No:</span>
                {props.userDetails.mobile}
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Username:</span>
                {props.userDetails.username}
              </li>
            </ul>
          </div>
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
