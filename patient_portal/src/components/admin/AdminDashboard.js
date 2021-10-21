import { React, Link, useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./admin.css";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Container, Card, Grid, Typography, Button } from "mui";
import { CardActionArea, CardActions } from "mui";
import { CardContent } from "mui";
import { makeStyles } from "@material-ui/core";
import { Line } from "react-chartjs-2";
import {
  GroupAddIcon,
  ListAltIcon,
  SchoolIcon,
  BorderColorIcon,
  NoteAddIcon,
  TextsmsIcon,
} from "mui-icons";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "50px",
  },
  gridcontainer: {
    background: "#f50057",
    color: "#fff",
    textAlign: "center",
    minHeight: "100px",
  },
  chartdiv: {
    padding: "40px 0 40px 0",
    margin: "auto",
    maxWidth: "700px",
  },
  detaildiv: {
    minHeight: "220px",
  },
  cardsheight: {
    minHeight: "110px",
  },
}));

const AdminDashboard = (props) => {
  const history = useHistory();
  const classes = useStyles();

  // const [notify, setNotify] = useState({
  //   isOpen: false,
  //   message: "",
  //   type: "",
  // });

  useEffect(() => {
    props.getallphysiciandata();
    props.getalluserdata();
    props.getAllPatients();

    // setNotify({
    //   isOpen: true,
    //   message: "Type message here..",
    //   type: "success",
    // });
  }, []);

  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      " Thursday",
      "Friday ",
      "Saturday",
    ],
    datasets: [
      {
        label: "No of Appointments Daily",
        data: [5, 15, 8, 20, 12, 26],
        borderColor: "Red",
        backgroundColor: "Blue",
        pointBackgroundColor: "Yellow",
        pointBorderColor: "Black",
      },
      {
        label: "No of Appointments Weekly",
        data: [1, 22, 11, 25, 18, 21],
        borderColor: "Blue",
        backgroundColor: "Red",
        pointBackgroundColor: "Yellow",
        pointBorderColor: "Black",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Oppointment Report",
    },
    scales: {
      yAxes: [
        {
          tickes: {
            min: 0,
            max: 6,
          },
        },
      ],
    },
  };
  return (
    <>
      {/* <h1 className="text-success text-center fw-bold ">Admin Dashboard</h1> */}
      {/* Top 3 cards container */}
      <Container className={classes.container}>
        <Grid container spacing={4}>
          <Grid item sm={4} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                <Typography variant="subtitle1" className="fw-bold">
                  Total Users
                </Typography>
              </CardContent>
              <CardActionArea>{props.users.length}</CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                <Typography variant="subtitle1" className="fw-bold">
                  Total Patients
                </Typography>
              </CardContent>
              <CardActionArea>{props.patients.length}</CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                <Typography variant="subtitle1" className="fw-bold">
                  Total Physicians
                </Typography>
              </CardContent>
              <CardActionArea>{props.physicians.length}</CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Line Chart */}
      <div className={classes.chartdiv}>
        <Line data={data} options={options}></Line>
      </div>

      {/* Details Container */}
      <Container>
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <Card className={classes.detaildiv}>
              <CardContent>
                <Typography variant="subtitle1" className="mb-0 fw-bold">
                  Hospital Status
                </Typography>
              </CardContent>
              <CardActionArea></CardActionArea>
            </Card>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card className={classes.detaildiv}>
              <CardContent>
                <Typography variant="subtitle1" className="mb-2 fw-bold">
                  Hospital Status
                </Typography>
                <Container>
                  <Grid container spacing={4}>
                    <Grid item smd={4} xs={12} lg={4}>
                      <Card className={classes.cardsheight}>
                        <CardContent>
                          <NoteAddIcon style={{ color: "#A883BA " }} />
                          <Typography variant="body2" className="mt-3">
                            Total Appointments
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md={4} xs={12} lg={4}>
                      <Card className={classes.cardsheight}>
                        <CardContent>
                          <GroupAddIcon style={{ color: "#a7daff " }} />
                          <Typography variant="body2" className="mt-3">
                            Patients per Doctor
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md={4} xs={12} lg={4}>
                      <Card className={classes.cardsheight}>
                        <CardContent>
                          <BorderColorIcon style={{ color: "violet" }} />
                          <Typography variant="body2" className="mt-3">
                            Immunized Patients
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                  <Grid container spacing={4}>
                    <Grid item md={4} xs={12} lg={4}>
                      <Card className={classes.cardsheight}>
                        <CardContent>
                          <SchoolIcon style={{ color: "#CF9EAC " }} />
                          <Typography variant="body2" className="mt-3">
                            Total &nbsp;&nbsp;&nbsp; Nurse
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md={4} xs={12} lg={4}>
                      <Card className={classes.cardsheight}>
                        <CardContent>
                          <ListAltIcon style={{ color: "#A0D9B4 " }} />
                          <Typography variant="body2" className="mt-3">
                            Total Lab Assistance
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item md={4} xs={12} lg={4}>
                      <Card className={classes.cardsheight}>
                        <CardContent>
                          <TextsmsIcon style={{ color: "#FFAA8A " }} />
                          <Typography variant="body2" className="mt-3">
                            Total Appointments
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Container>
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
    currentUser: state.login.loggedUserInfo,
    users: state.getallusers.users,
    physicians: state.physicians.physicians,
    patients: state.patients.patients,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getallphysiciandata: () => dispatch(actionCreator.GetAllPhysicianData()),
    getalluserdata: () => dispatch(actionCreator.GetAllUserData()),
    getAllPatients: () => dispatch(actionCreator.GetAllPatientsData()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(AdminDashboard);
