import { React, link, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.css";
import BarChart from "./chart";
import { useHistory } from "react-router";
import * as actionCreator from "../../redux/actions/userActionCreater";
import AppointmentList from "../physician/PhyAppointmentList";
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
    let approved = 0,
      rejected = undefined,
      pending = undefined;

    apptList.map((appt) => {
      if (appt.status === "approved") {
        approved += 1;
      }

      if (appt.status === "rejected") {
        rejected += 1;
      }

      if (appt.status === "pending") {
        rejected += 1;
      }
    });
    return approved;
  }

  function todaysAppts() {
    let approved = 0,
      rejected = undefined,
      pending = undefined;

    apptList.map((appt) => {
      if (appt.date === "approved") {
        approved += 1;
      }

      if (appt.status === "rejected") {
        rejected += 1;
      }

      if (appt.status === "pending") {
        rejected += 1;
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
      backgroundColor: "#0077b6",
      height: "45px",
    },
    textblock3: {
      backgroundColor: "#dc3545",
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
              {/* <h6 className={classes.h6}>Details</h6> */}
              <CardContent className={classes.textblock1}>
                <h6 className={classes.h6} style={{ color: "white" }}>
                  Total Appointments :{apptList.length}
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
                  Appointments Approved: {approvedAppts()}
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
                  Appointments Canceled: 15
                </h6>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container spacing={0}>
          <Grid item sm={12} lg={12} md={12}>
            <AppointmentList />
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
