import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import Calendar from "shared/calendar/Calendar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { adminService } from "../../services/register_user_service";

import { Link } from "react-router-dom";

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

const Appointments = (props) => {
  const [value, setValue] = useState(0);
  const [appts, setAppts] = useState([]);

  console.log("Baba Don", appts);

  useEffect(() => {
    if (props.isLoggedIn) {
      userAppointments(props.currentUser.id);
    }
  }, []);

  function userAppointments() {
    adminService.getAllAppointments().then(
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
      <Link className="btn btn-warning" to="/admin">
        <BsFillArrowLeftSquareFill />
        <span className="m-2">Back</span>
      </Link>

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
          {/* Appointment List Start */}
          <table className="table table-bordered shadow mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Patient Name</th>
                <th scope="col">Doctor Name</th>
                <th scope="col">Appointment Title</th>
                <th scope="col">Start Time</th>
                <th scope="col">ENd Time</th>
                <th scope="col">Appointment Date</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {appts.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{`${user.fName} ${user.lName}`}</td>
                    <td>{user.doc_name}</td>
                    <td>{user.appointment_title}</td>
                    <td>{user.appointment_start_time}</td>
                    <td>{user.appointment_end_time}</td>
                    <td>{user.appointmentDate}</td>
                    <td>{user.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* Appointment List end */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {props.isLoggedIn ? <Calendar apopointmnets={appts} /> : ""}
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

export default connect(mapStatetoProps, null)(Appointments);
