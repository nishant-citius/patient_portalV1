import React, { useState, useEffect } from "react";
import Scheduler from "react-mui-scheduler";

function Calendar(props) {
  const events = mapApiResponse(props.apopointmnets);

  function pickRandomColor() {
    let colorsArray = ["#f28f6a", "#099ce5", "#263686", "#f28f6a"],
      randomNum = Math.round(Math.random() * (3 - 0) + 0);
    return colorsArray[randomNum];
  }

  function mapApiResponse(_arr) {
    let newEvents = _arr.map((appt) => {
      let colorArr = pickRandomColor();
      return {
        id: appt.id,
        label: appt.appointment_title,
        groupLabel: appt.doc_name,
        user: appt.doc_name,
        color: colorArr,
        startHour: appt.appointment_start_time,
        endHour: appt.appointment_end_time,
        date: appt.appointmentDate,
        createdAt: new Date(),
        createdBy: appt.createdBy,
      };
    });
    return newEvents;
  }

  const [state, setState] = useState({
    options: {
      transitionMode: "zoom", // or fade
      startWeekOn: "Mon", // or Sun
      defaultMode: "month", // or week | day | timeline
      minWidth: 340,
      maxWidth: 340,
      minHeight: 340,
      maxHeight: 340,
    },
    alertProps: {
      open: true,
      color: "info", // info | success | warning | error
      severity: "info", // info | success | warning | error
      message: "Calendar display.",
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

  const handleCellClick = (event, row, day) => {};

  const handleEventClick = (event, item) => {};

  const handleEventsChange = (item) => {};

  const handleAlertCloseButtonClicked = (item) => {};
  return (
    <Scheduler
      events={events}
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
