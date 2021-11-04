import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import * as actioncreators from "../../redux/actions/userActionCreater";
import { adminService } from "../../services/register_user_service";

import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsPersonFill,
  BsCheckCircleFill,
  BsFillXCircleFill,
  BsFillArrowLeftSquareFill,
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
} from "react-icons/bs";

// const patient_id=this.props.currentUser.id;
// const loadAppointment=(_patient_id)=>{
//    this.props.getAppointments(patient_id)
// }
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "80vw",
  },
  tablehead: {
    background: "#b7c1f7",
  },
}));

const mapStateToProps = (rootReducer) => {
  return {
    currentUser: rootReducer.login.loggedUserInfo,
    isLoggedIn: rootReducer.login.isLoggedIn,
    appointmentList: rootReducer.appointmentsDetails.appointmentsDetails,
    //patientData: rootReducer.patients.patients,
    // globalmessage: rootReducer.appointmentsDetails.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAppointments: (doc_id) =>
      dispatch(actioncreators.GetAppointments(doc_id)),
    //getAllPatients: () => dispatch(actioncreators.GetAllPatientsData()),
  };
};

export class AppointmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _jsx: ``,
    };
  }

  approve(appointments) {
    let appointmentData = appointments,
      newData = {
        ...appointments,
        status: "approved",
      };

    adminService.editAppointment(appointmentData.id, newData).then(
      (response) => {
        if (response.status === 200) {
          alert("Appointment Approved");
          // props.flashNotification({
          //   message: "Appointment Scheduled Succssfully...!",
          //   type: "success",
          // });
        }
      },
      (error) => {
        // props.flashNotification({
        //   message: "Appointment Can't be scheduled..!",
        //   type: "error",
        // });
      }
    );
  }

  reject(appointments) {
    let appointmentData = appointments,
      newData = {
        ...appointments,
        status: "rejected",
      };

    adminService.editAppointment(appointmentData.id, newData).then(
      (response) => {
        if (response.status === 200) {
          alert("Appointment Rejected..");
          // this.props.getAppointments(this.props.currentUser.id);
        }
      },
      (error) => {}
    );
  }

  componentDidMount() {
    this.props.getAppointments(this.props.currentUser.id);
  }

  getAppointmentStatus(status) {
    const classes = useStyles();
    let _jsx = "";

    if (status === "approved") {
      _jsx += `<p className="text text-success fw-bold">Approved</p>`;
    } else if (status === "reject") {
      _jsx += `<p className="text text-success fw-bold">Rejected</p>`;
    } else {
      _jsx = `            <button
                          type="button"
                          onClick={() => this.approve(appointments)}
                          className="btn btn-primary btn-sm"
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          onClick=""
                          className="btn btn-secondary btn-sm m-2"
                        >
                          postpone
                        </button>
                        <button
                          type="button"
                          onClick={() => this.reject(appointments)}
                          className="btn btn-danger btn-sm"
                        >
                          Reject
                        </button>`;
    }

    return _jsx;
  }

  render() {
    return (
      <Container className={classes.root}>
        <h4
          style={{ color: "yellow" }}
          className="text-success text-center fw-bold "
        >
          Appointment
        </h4>
        <Table>
          {" "}
          <TableHead className={classes.tablehead}>
            <TableRow>
              <TableCells cope="col">Sr no </TableCells>
              <TableCell scope="col">Patient Name </TableCell>
              <TableCell scope="col">Appointment Title </TableCell>
              <TableCell scope="col">Appointment Date </TableCell>
              <TableCell scope="col">Start Time </TableCell>
              <TableCell scope="col">End Time </TableCell>
              <TableCell scope="col">Actions </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.appointmentList.map((appointments, index) => {
              return (
                <TableRow key={index}>
                  <TableHead scope="row">{index + 1}</TableHead>
                  <TableCell>
                    {`${appointments.fName} ${appointments.lName}`}{" "}
                  </TableCell>
                  <TableCell>{appointments.appointment_title} </TableCell>
                  <TableCell>{appointments.appointmentDate} </TableCell>
                  <TableCell>{appointments.appointment_start_time} </TableCell>
                  <TableCell>{appointments.appointment_end_time} </TableCell>
                  <TableCell>
                    {/* {appointments.status === "approved" ? (
                      <p className="text text-success fw-bold">Approved</p>
                    ) : (
                      
                    )} */}
                    {this.getAppointmentStatus()}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentList);
