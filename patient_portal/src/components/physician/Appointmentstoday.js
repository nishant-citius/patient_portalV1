import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { adminService } from "../../services/register_user_service";
import { Link } from "react-router-dom";
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
import { BsFillTrashFill } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "80vw",
  },
  tablehead: {
    background: "#b7c1f7",
  },
}));

function Appointmentstoday(props) {
  const classes = useStyles();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    todaysAppointments(new Date().toISOString().slice(0, 10));
  }, []);

  const todaysAppointments = (_date) => {
    adminService.appointmentsOnDate(props.currentUser.id, _date).then(
      (response) => {
        setAppointments(response.data);
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
        className="text-success text-center fw-bold "
      >
        Appointment List
      </h4>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        {/* <table className="table table-bordered shadow mt-4"> */}
        <Table>
          <TableHead className={classes.tablehead}>
            <TableRow>
              <TableCell scope="col">Sr no </TableCell>
              <TableCell scope="col">Patient Name </TableCell>
              <TableCell scope="col">Appointment Title </TableCell>
              <TableCell scope="col">Appointment Date </TableCell>
              <TableCell scope="col">Start Time </TableCell>
              <TableCell scope="col">End Time </TableCell>
              <TableCell scope="col">Action </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointments, index) => {
              return (
                <TableRow key={index}>
                  <TableCell scope="row">{index + 1} </TableCell>
                  <TableCell>
                    {`${appointments.fName} ${appointments.lName}`}{" "}
                  </TableCell>
                  <TableCell>{appointments.appointment_title} </TableCell>
                  <TableCell>{appointments.appointmentDate} </TableCell>
                  <TableCell>{appointments.appointment_start_time} </TableCell>
                  <TableCell>{appointments.appointment_end_time} </TableCell>
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
