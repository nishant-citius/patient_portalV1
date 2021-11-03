import { React, link, useEffect, useState } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router";
import { adminService } from "../../services/register_user_service";

import {
  Container,
  Card,
  Grid,
  CardActionArea,
  CardContent,
  Divider,
  CardMedia,
  makeStyles,
  Typography,
} from "mui";
import CountUp from "react-countup";

const Physician_dashboard = (props) => {
  const history = useHistory();
  const [apptList, setApptList] = useState([]);

  useEffect(() => {
    if (props.isLoggedIn) {
      userAppointments(props.currentUser.id);
    }
  }, []);

  function userAppointments(physicianId) {
    adminService.getPhysicianAppointments(physicianId).then(
      (response) => {
        setApptList(response.data);
      },
      (error) => {
        return;
      }
    );
  }
  const theme = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  };

  function approvedAppts() {
    let approved = 0;
    apptList.map((appt) => {
      if (appt.status === "approved") {
        approved += 1;
      }
    });
    return approved;
  }

  function cancelledAppts() {
    let approved = 0;
    apptList.map((appt) => {
      if (appt.status === "reject") {
        approved += 1;
      }
    });
    return approved;
  }
  function pendingAppts() {
    let approved = 0;
    apptList.map((appt) => {
      if (appt.status === "Pending") {
        approved += 1;
      }
    });
    return approved;
  }

  function todaysAppts() {
    let number = 0;

    apptList.map((appt) => {
      if (appt.appointmentDate === new Date().toISOString().slice(0, 10)) {
        number += 1;
      }
    });
    return number;
  }

  function upcomingAppointments() {
    let approved = 0,
      rejected = undefined,
      pending = undefined;

    apptList.map((appt) => {
      if (appt.appointmentDate > new Date().toISOString().slice(0, 10)) {
        approved += 1;
      }
    });
    return approved;
  }

  const useStyles = makeStyles((theme) => ({
    gridcontainer: {
      background: "#fff",
      color: "#808080",
      textAlign: "center",
      paddingLeft: "15px",
    },
    innercard1: {
      maxWidth: "320px",
      maxHeight: "100px",
      margin: "4px",
      background: "rgb(72 179 226)",
    },
    innercard2: {
      minWidth: "100px",
      minHeight: "100px",
      margin: "4px",
      background: "rgb(72 179 226)",
    },
    innercard: {
      height: "185px",
    },
    innercard3: {
      background: "#D3D3D3",
    },
    innercard4: {
      width: "105px",
      textAlign: "center",
    },
    h5: {
      textAlign: "center",
      color: "blue",
    },
    height: {
      height: "150px",
    },
    textblock2: {
      backgroundColor: "#0077b6",
      height: "45px",
    },
    textblock1: {
      backgroundColor: "#fd7e14",
      height: "45px",
    },
    textblock3: {
      backgroundColor: "#dc3545",
      height: "45px",
    },
    textblock4: {
      backgroundColor: "#6f42c1",
      height: "45px",
    },
    textblock5: {
      backgroundColor: "#20c997",
      height: "45px",
    },
    textblock6: {
      backgroundColor: "#6c757d",
      height: "45px",
    },
    chartdiv: {
      padding: "40px 0 40px 0",
      margin: "auto",
      maxWidth: "700px",
    },
    imagelistbar: {
      backgroundColor: "#3f51b5",
      opacity: "50%",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={4}>
          <Grid item sm={4} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="130"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjqdo4r_VEzgKMlfJtWPEGW-u31ILuS6VMjQ&usqp=CAU"
              />
              <CardContent className={classes.textblock1}>
                <h6 className={classes.h6} style={{ color: "white" }}>
                  Total Appointments :
                  <CountUp end={apptList.length} duration={4} />
                </h6>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="130"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_Ac4EqErfBGKoDPQu_9vC-Oaf2SqODDwfw&usqp=CAU"
              />
              <CardContent className={classes.textblock2}>
                <h6 className={classes.h6} style={{ color: "white" }}>
                  Appointments Approved :
                  <CountUp end={approvedAppts()} duration={4} />
                </h6>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={4} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="130"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOlUf_MDMa7opx7h0CJMhyv2wh3ryH5PBvMg&usqp=CAU"
              />
              <CardContent className={classes.textblock3}>
                <h6 className={classes.h6} style={{ color: "white" }}>
                  Appointments Canceled:
                  <CountUp end={cancelledAppts()} duration={4} />
                </h6>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <br></br>
      <Container className={classes.container}>
        <Grid container spacing={4}>
          <Grid item sm={4} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="130"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2D1xLrARfpYmsY9mPTGkFIwm1NfZCB0IIrsoqIbEYWmR8OGE_XlX5IX8-fcSJQOnsgA&usqp=CAU"
              />
              <CardContent className={classes.textblock4}>
                <h6 className={classes.h6} style={{ color: "white" }}>
                  Today's Appointments :
                  <CountUp end={todaysAppts()} duration={4} />
                </h6>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="130"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0F0UWdyWQlY8Wc1P9aHxeD2On0Avv15uis0A63q9jKrsa6_Z0nG1yJPVcY9eR4DKY7Hc&usqp=CAU"
              />
              <CardContent className={classes.textblock5}>
                <h6 className={classes.h6} style={{ color: "white" }}>
                  Upcoming Appointments : {upcomingAppointments()}
                </h6>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={4} lg={4} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="130"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0bY54SgBxkL4k2d07qRPsNdf4IXJiSq9Oqg&usqp=CAU"
              />
              <CardContent className={classes.textblock6}>
                <h6 className={classes.h6} style={{ color: "white" }}>
                  Pending Appointments:
                  <CountUp end={pendingAppts()} duration={4} />
                </h6>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    currentUser: state.login.loggedUserInfo,
  };
};
export default connect(mapStatetoProps, null)(Physician_dashboard);
