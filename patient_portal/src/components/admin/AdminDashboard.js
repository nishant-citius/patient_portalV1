import { React, Link, useEffect } from "react";
import { useHistory } from "react-router";
import "./admin.css";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Container, Card, Grid, Typography } from "mui";
import { CardActionArea } from "mui";
import { CardContent } from "mui";
import { makeStyles } from "@material-ui/core";
import { Bar, Line } from "react-chartjs-2";
import { red } from "@material-ui/core/colors";

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
}));

const AdminDashboard = (props) => {
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    props.getallphysiciandata();
    props.getalluserdata();
    props.getAllPatients();
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
      <h1 className="text-success text-center fw-bold ">Admin Dashboard</h1>
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

      <div className={classes.chartdiv}>
        <Line data={data} options={options}></Line>
      </div>

      {/* <div className={classes.chartdiv}>
        <Bar
          data={{
            labels: [
              "Monday",
              "Tuesday",
              "Wednesday",
              " Thursday",
              "Friday ",
              "Saturday",
              "Sunday",
            ],
            datasets: [
              {
                label: "No of patients visited",
                data: [12, 19, 13, 5, 2, 4],
                backgroundColor: [
                  "Red",
                  "Blue",
                  "Yellow",
                  "Green",
                  "Purple",
                  "Orange",
                ],
              },
              {
                label: "No of patients per month",
                labels: [
                  "Janu",
                  "Tuesday",
                  "Wednesday",
                  " Thursday",
                  "Friday ",
                  "Saturday",
                  "Sunday",
                ],
                data: [102, 109, 130, 105, 210, 40],
                backgroundColor: "orange",
              },
            ],
            borderWidth: 1,
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div> */}
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
