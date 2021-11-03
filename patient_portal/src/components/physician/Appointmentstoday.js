import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { adminService } from "../../services/register_user_service";
import { Link } from "react-router-dom";
import Appointments from "components/admin/Appointments";

function Appointmentstoday(props) {
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
    <div className="container mt-5">
      <h4
        style={{ color: "yellow" }}
        className="text-success text-center fw-bold "
      >
        Appointment List
      </h4>
      <table className="table table-bordered shadow mt-4">
        <thead className="table-dark">
          <tr>
            <th scope="col">Sr no </th>
            <th scope="col">Patient Name</th>
            <th scope="col">Appointment Title</th>
            <th scope="col">Appointment Date </th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointments, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{`${appointments.fName} ${appointments.lName}`}</td>
                <td>{appointments.appointment_title}</td>
                <td>{appointments.appointmentDate}</td>
                <td>{appointments.appointment_start_time}</td>
                <td>{appointments.appointment_end_time}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/attendAppointment/${appointments.patientId}`,
                      state: { appointmentDetails: appointments },
                    }}
                    className="btn btn-primary btn-sm"
                  >
                    Start Appointment
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
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
