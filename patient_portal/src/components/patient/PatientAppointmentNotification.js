import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import "../admin/admin.css";
import { adminService } from "../../services/register_user_service";
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "../../mui";

const PatientAppointmentNotification = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    todaysAppointments(
      new Date().toISOString().slice(0, 10),
      props.currentUser.id
    );
  }, []);

  const todaysAppointments = (_id) => {
    adminService.getPatientApprovedAppointments(_id).then(
      (response) => {
        setUsers(response.data);
      },
      (error) => {
        return;
      }
    );
  };

  return (
    <>
      <List>
        {users.length === 0 ? (
          <p>No pending Appointments for Today...</p>
        ) : (
          users.map((user) => {
            return (
              <ListItem alignItems="flex-start" key={user.id}>
                <ListItemAvatar>
                  <Avatar alt={`${user.fName} ${user.lName}`} src="" />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <span className="text-success fw-bold">
                      {user.fName} {user.lName}
                    </span>
                  }
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        <span className="text-primary fw-bold">
                          Appointment Date:
                        </span>
                        &nbsp;&nbsp; {user.appointmentDate}
                        <br />
                        <span className="text-primary fw-bold">
                          Booked Time Slot:
                        </span>
                        &nbsp;&nbsp; {user.appointment_start_time} -
                        {user.appointment_start_time}
                        <br />
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            );
          })
        )}
      </List>
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
    appointments: state.appointmentsDetails.appointmentsDetails,
    approveApt: state.approvedAppointments.approvedAppointments,
    count: state.approvedAppointments.approvedAppointmentCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getApprovedAppointmentData: () =>
      dispatch(actionCreator.GetApprovedAppointment()),
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(PatientAppointmentNotification);
