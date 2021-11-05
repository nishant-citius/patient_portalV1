import React, { useState, useEffect } from "react";
import Calendar from "shared/calendar/Calendar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import { adminService } from "../../services/register_user_service";
import {
  makeStyles,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "mui";
import "../admin/admin.css";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "70vw",
  },
}));

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

function AppointmentList(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [appts, setAppts] = useState([]);

  useEffect(() => {
    if (props.isLoggedIn) {
      userAppointments(props.currentUser.id);
    }
  }, []);

  function userAppointments(patientId) {
    adminService.getPatientAppointments(patientId).then(
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
          <Container className={classes.root}>
            <TableContainer component={Paper} style={{ marginTop: "20px" }}>
              {/* Appointment List Start */}
              <Table>
                <TableHead className="tablehead">
                  <TableRow>
                    <TableCell className="tableCell">Sr.No</TableCell>
                    <TableCell className="tableCell">Name</TableCell>
                    <TableCell className="tableCell">Doctor Name</TableCell>
                    <TableCell className="tableCell">
                      Appointment Title
                    </TableCell>
                    <TableCell className="tableCell">Start Time</TableCell>
                    <TableCell className="tableCell">End Time</TableCell>
                    <TableCell className="tableCell">
                      Appointment Date
                    </TableCell>
                    <TableCell className="tableCell">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appts.map((user, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell scope="row">{index + 1}</TableCell>
                        <TableCell>{`${user.fName} ${user.lName}`}</TableCell>
                        <TableCell>{user.doc_name}</TableCell>
                        <TableCell>{user.appointment_title}</TableCell>
                        <TableCell>{user.appointment_start_time}</TableCell>
                        <TableCell>{user.appointment_end_time}</TableCell>
                        <TableCell>{user.appointmentDate}</TableCell>
                        <TableCell>{user.status}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
          {/* Appointment List end */}
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

export default connect(mapStatetoProps, null)(AppointmentList);
