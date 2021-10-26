import React, { useState, useEffect } from "react";
import Scheduler from "react-mui-scheduler";

function Calendar(props) {
  // function mapApiResponse(_arr) {
  //   let newEvents = _arr.map((appt) => {
  //     return {
  //       id: appt.id,
  //       label: appt.appointment_title,
  //       groupLabel: appt.doc_name,
  //       user: appt.doc_name,
  //       color: "#f28f6a",
  //       startHour: appt.appointment_start_time,
  //       endHour: appt.appointment_end_time,
  //       date: appt.appointmentDate,
  //       createdAt: new Date(),
  //       createdBy: appt.createdBy,
  //     };
  //   });
  //   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~", newEvents);
  // }

  // useEffect(() => {
  //   if (props.apopointmnets.length) {
  //     mapApiResponse(props.apopointmnets);
  //   }
  // }, []);

  const [state, setState] = useState({
    options: {
      transitionMode: "zoom", // or fade
      startWeekOn: "Mon", // or Sun
      defaultMode: "month", // or week | day | timeline
      minWidth: 540,
      maxWidth: 540,
      minHeight: 540,
      maxHeight: 540,
    },
    alertProps: {
      open: true,
      color: "info", // info | success | warning | error
      severity: "info", // info | success | warning | error
      message: "🚀 Let's start with awesome react-mui-scheduler 🔥 🔥 🔥",
      showActionButton: true,
      showNotification: true,
      delay: 1500,
    },
    toolbarProps: {
      showSearchBar: true,
      showSwitchModeButtons: true,
      showDatePicker: true,
    },
  });

  const handleCellClick = (event, row, day) => {
    // Do something...
  };

  const handleEventClick = (event, item) => {
    // Do something...
  };

  const handleEventsChange = (item) => {
    // Do something...
  };

  const handleAlertCloseButtonClicked = (item) => {
    // Do something...
  };
  return (
    <Scheduler
      events={props.apopointmnets}
      options={state?.options}
      alertProps={state?.alertProps}
      toolbarProps={state?.toolbarProps}
      onEventsChange={handleEventsChange}
      onCellClick={handleCellClick}
      onTaskClick={handleEventClick}
      onAlertCloseButtonClicked={handleAlertCloseButtonClicked}
    />
  );
}
export default Calendar;
