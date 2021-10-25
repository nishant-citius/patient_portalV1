import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { adminService } from "../../services/register_user_service";

function ScheduleAppointment(props) {
  function getSpecialDoctors() {
    props.doctoList("fever");
  }

  function scheduleAppointmentToday(appointmentData) {
    adminService.addAppointment(appointmentData).then(
      (response) => {
        if (response.status === 200) {
          props.flashNotification({
            message: "Appointment Scheduled Succssfully...!",
            type: "success",
          });
        }
      },
      (error) => {}
    );
  }

  return (
    <>
      <button onClick={getSpecialDoctors}>Special Doctors</button>
      <ul>
        {props.doctorsList.map((user) => (
          <>
            <li>{user.fName}</li>
          </>
        ))}
      </ul>
    </>
  );
}

const mapStatetoProps = (state) => {
  return {
    doctorsList: state.specilizedPhysicians.specialisedPhysicians,
    globalMessage: state.login.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doctoList: (speciality) =>
      dispatch(actionCreator.PhysiciansBySpeiciality(speciality)),
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ScheduleAppointment);
