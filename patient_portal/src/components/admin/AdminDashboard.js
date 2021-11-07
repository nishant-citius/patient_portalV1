import { React, useState, useEffect } from "react";
import "./admin.css";
import { connect } from "react-redux";
import {
  Container,
  Card,
  Grid,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "mui";
import { Line } from "react-chartjs-2";
import {
  GroupAddIcon,
  ListAltIcon,
  SchoolIcon,
  BorderColorIcon,
  NoteAddIcon,
  TextsmsIcon,
} from "mui-icons";

import CountUp from "react-countup";
import Preloader from "../../shared/preloder/Preloder";

const useStyles = makeStyles((theme) => ({
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
  imagelistbar: {
    backgroundColor: "#3f51b5",
    opacity: "50%",
  },
}));

const AdminDashboard = (props) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading && props.users) {
      setLoading(true);
    }
  });

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

  const itemData = [
    {
      img: "https://www.seekpng.com/png/detail/266-2667175_goqii-doctor-is-a-qualified-physician-mbbs-md.png",
      title: "Dr. ABC",
      author: "Surgen",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThpybZHlYukfV1VjLMx-99iYSoPPEM97jKgMCMNIDcAUKto59hV2xVk543gQVmt6pD70&usqp=CAU",
      title: "Dr. XYZ",
      author: "Artho",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScczgCgAPZvEptLueOQi9yXba2aWXyfNNsvYoqxfc9cEOj9ktM2NGP-z3zc4MfZv9j7E4&usqp=CAU",
      title: "Dr. MNO",
      author: "General Doctor",
    },
    {
      img: "https://www.nicepng.com/png/detail/363-3638676_1-medical-student-image-png.png",
      title: "Dr. PQR",
      author: "Cancer Specialist",
      cols: 2,
    },
  ];
  return (
    <>
      {/* Top 3 cards container */}
      {!loading ? (
        <Preloader />
      ) : (
        <>
          <Container className={classes.container}>
            <Grid container spacing={4}>
              <Grid item sm={4} xs={12}>
                <Card className={classes.gridcontainer}>
                  <CardContent>
                    <Typography variant="subtitle1" className="fw-bold">
                      Total Users
                    </Typography>
                  </CardContent>
                  <CardActionArea>
                    <CountUp end={props.users.length} duration={4} />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Card className={classes.gridcontainer}>
                  <CardContent>
                    <Typography variant="subtitle1" className="fw-bold">
                      Total Patients
                    </Typography>
                  </CardContent>
                  <CardActionArea>
                    <CountUp end={props.patients.length} duration={4} />
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item sm={4} xs={12}>
                <Card className={classes.gridcontainer}>
                  <CardContent>
                    <Typography variant="subtitle1" className="fw-bold">
                      Total Physicians
                    </Typography>
                  </CardContent>
                  <CardActionArea>
                    {" "}
                    <CountUp end={props.physicians.length} duration={4} />
                  </CardActionArea>
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
                <Card>
                  <CardContent>
                    <ImageList sx={{ width: 300, height: 450 }}>
                      {props.physicians.map((item, ind) =>
                        ind < 4 ? (
                          <ImageListItem key={itemData[ind].img}>
                            <img
                              src={`${itemData[ind].img}?w=248&fit=crop&auto=format`}
                              srcSet={`${itemData[ind].img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                              alt={itemData[ind].title}
                              loading="lazy"
                            />
                            <ImageListItemBar
                              className={classes.imagelistbar}
                              title={`${item.fName} ${item.lName}`}
                              subtitle={item.speciality}
                            />
                          </ImageListItem>
                        ) : (
                          ""
                        )
                      )}
                    </ImageList>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle1" className="mb-2 fw-bold">
                      Hospital Status
                    </Typography>
                    <Container>
                      <Grid container spacing={4}>
                        <Grid item smd={4} xs={12} lg={4}>
                          <Card>
                            <CardContent>
                              <NoteAddIcon style={{ color: "#A883BA " }} />
                              <Typography variant="body2" className="mt-3">
                                Total Appointments
                              </Typography>
                              <Typography variant="body2" className="fw-bold">
                                <CountUp
                                  end={props.users.length}
                                  duration={4}
                                />
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
                              <Typography variant="body2" className="fw-bold">
                                <CountUp end={30} duration={4} />
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
                              <Typography variant="body2" className="fw-bold">
                                <CountUp end={30} duration={4} />
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
                              <Typography variant="body2" className="fw-bold">
                                <CountUp
                                  end={props.nurses.length}
                                  duration={4}
                                />
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
                              <Typography variant="body2" className="fw-bold">
                                <CountUp end={30} duration={4} />
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
                              <Typography variant="body2" className="fw-bold">
                                <CountUp end={30} duration={4} />
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
      )}
    </>
  );
};

const mapStatetoProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
    users: state.getallusers.users,
    physicians: state.physicians.physicians,
    nurses: state.nurses.nurses,
    patients: state.patients.patients,
    inactiveUsers: state.inactiveUsers.inactiveUsers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // getallphysiciandata: () => dispatch(actionCreator.GetAllPhysicianData()),
    // getalluserdata: () => dispatch(actionCreator.GetAllUserData()),
    // getAllPatients: () => dispatch(actionCreator.GetAllPatientsData()),
    // getInactiveUsers: () => dispatch(actionCreator.GetInactiveUsers()),
    // getallNursedata: () => dispatch(actionCreator.GetAllNurseData()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(AdminDashboard);
