import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { adminService } from "../../services/register_user_service";
import { Link } from "react-router-dom";
import "../admin/admin.css";
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

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "80vw",
  },
}));

function Appointmentstoday(props) {
  const classes = useStyles();
  const [appointments, setAppointments] = useState([]);
  const [isAvaialable, setIsAvailable] = useState(false);

  useEffect(() => {
    todaysAppointments(new Date().toISOString().slice(0, 10));
  }, []);

  const todaysAppointments = (_date) => {
    adminService.appointmentsOnDate(props.currentUser.id, _date).then(
      (response) => {
        setAppointments(response.data);
        if (response.data.length > 0) setIsAvailable(true);
      },
      (error) => {
        return;
      }
    );
  };
  return (
    <Container className={classes.root}>
      <h4
        style={{ color: "#b7c1f7" }}
        className="text-primary text-center fw-bold "
      >
        Appointment List
      </h4>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        {/* <table className="table table-bordered shadow mt-4"> */}
        <Table>
          <TableHead className="tablehead">
            <TableRow>
              <TableCell className="tableCell">Sr no </TableCell>
              <TableCell className="tableCell">Patient Name </TableCell>
              <TableCell className="tableCell">Appointment Title </TableCell>
              <TableCell className="tableCell">Appointment Date </TableCell>
              <TableCell className="tableCell">Start Time </TableCell>
              <TableCell className="tableCell">End Time </TableCell>
              <TableCell className="tableCell">Action </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isAvaialable ? (
              <>
                {appointments.map((appointments, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell scope="row">{index + 1} </TableCell>
                      <TableCell>
                        {`${appointments.fName} ${appointments.lName}`}
                      </TableCell>
                      <TableCell>{appointments.appointment_title} </TableCell>
                      <TableCell>{appointments.appointmentDate} </TableCell>
                      <TableCell>
                        {appointments.appointment_start_time}
                      </TableCell>
                      <TableCell>{appointments.appointment_end_time}</TableCell>
                      <TableCell>
                        <Link
                          to={{
                            pathname: `/attendAppointment/${appointments.patientId}`,
                            state: { appointmentDetails: appointments },
                          }}
                          className="btn btn-primary btn-sm"
                        >
                          Start Appointment
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </>
            ) : (
              <TableRow>
                <TableCell className="fw-bold text-center">
                  No Appointments Scheduled For Today!!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

const mapStateToProps = (rootReducer) => {
  return {
    currentUser: rootReducer.login.loggedUserInfo,
    isLoggedIn: rootReducer.login.isLoggedIn,
    appointmentList: rootReducer.appointmentsDetails.appointmentsDetails,
  };
};

export default connect(mapStateToProps, null)(Appointmentstoday);
