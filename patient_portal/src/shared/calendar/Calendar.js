import React, { useState } from "react";
// import Scheduler from "react-mui-scheduler";

function Calendar() {
  const handleCellClick = (event, row, day) => {
    console.log("Cell Clicked...");
  };

  const handleEventClick = (event, item) => {
    console.log("Event Handler...");
  };

  const handleEventsChange = (item) => {
    console.log("Event Changed.....");
  };

  const handleAlertCloseButtonClicked = (item) => {
    console.log("Alert Close Btn clicked...............");
  };

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

  const events = [
    {
      id: "event-1", //apptId
      label: "Medical consultation", //title
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy", //physiian Name
      color: "#f28f6a",
      startHour: "04:00 AM", //start Time
      endHour: "05:00 AM", //endTime
      date: "2021-09-28", //date
      createdAt: new Date(),
      createdBy: "Kristina Mayer", //patient Name
    },
    {
      id: "event-2",
      label: "Medical consultation",
      groupLabel: "Dr Claire Brown",
      user: "Dr Claire Brown",
      color: "#099ce5",
      startHour: "09:00 AM",
      endHour: "10:00 AM",
      date: "2021-09-29",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-3",
      label: "Medical consultation",
      groupLabel: "Dr Menlendez Hary",
      user: "Dr Menlendez Hary",
      color: "#263686",
      startHour: "13 PM",
      endHour: "14 PM",
      date: "2021-09-30",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
    {
      id: "event-4",
      label: "Consultation prénatale",
      groupLabel: "Dr Shaun Murphy",
      user: "Dr Shaun Murphy",
      color: "#f28f6a",
      startHour: "08:00 AM",
      endHour: "09:00 AM",
      date: "2021-10-01",
      createdAt: new Date(),
      createdBy: "Kristina Mayer",
    },
  ];

  return (
    <>
      {/* <Scheduler
        events={events}
        options={state?.options}
        alertProps={state?.alertProps}
        toolbarProps={state?.toolbarProps}
        onEventsChange={handleEventsChange}
        onCellClick={handleCellClick}
        onTaskClick={handleEventClick}
        onAlertCloseButtonClicked={handleAlertCloseButtonClicked}
      /> */}
    </>
  );
}

export default Calendar;
