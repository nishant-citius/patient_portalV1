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
} from "react-icons/bs";

// const patient_id=this.props.currentUser.id;
// const loadAppointment=(_patient_id)=>{
//    this.props.getAppointments(patient_id)
// }

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
    this.state = {};
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
          this.props.getAppointments(this.props.currentUser.id); 
          
        }
      },
      (error) => {
        
       
      }
    );
  }

  reject(appointments) {
    let appointmentData = appointments,
      newData = {
        ...appointments,
        status: "reject",
      };

    adminService.editAppointment(appointmentData.id, newData).then(
      (response) => {
        if (response.status === 200) {
          alert("rejected appointmewnt");
          
        }
      },
      (error) => {
      }
    );
  }
  componentDidMount() {
    this.props.getAppointments(this.props.currentUser.id);
  }

  render() {
    return (
      <div className="container mt-5">
        <Link className="btn btn-warning" to="/admin">
          <BsFillArrowLeftSquareFill />
          <span className="m-2">Back</span>
        </Link>
        <h1 className="text-success text-center fw-bold ">Appointment List</h1>
        <table className="table table-bordered shadow mt-4">
          <thead className="table-dark">
            <tr>
              <th scope="col">Sr no </th>
              <th scope="col">Patient Name</th>

              <th scope="col">Appointment Title</th>
              <th scope="col">Appointment Date </th>
              <th scope="col">Start Time</th>
              <th scope="col">End Time</th>

              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.appointmentList.map((appointments, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{`${appointments.fName} ${appointments.lName}`}</td>
                  <td>{appointments.appointment_title}</td>
                  <td>{appointments.appointmentDate}</td>
                  <td>{appointments.appointment_start_time}</td>
                  <td>{appointments.appointment_end_time}</td>
                  <td>
                    {appointments.status === "approved" ? (
                      <p className="text text-success fw-bold">Approved</p>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => this.approve(appointments)}
                          className="btn btn-success btn-sm m-2"
                        >
                          Approve
                        </button>
                      
                        <button
                          type="button"
                          onClick={() => this.reject(appointments)}
                          className="btn btn-danger btn-sm"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentList);
