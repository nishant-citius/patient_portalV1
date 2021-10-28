import { React, link, useEffect, useState } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.css";
import BarChart from "./chart";
import { useHistory } from "react-router";
import * as actionCreator from "../../redux/actions/userActionCreater";

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

const Physician_dashboard = () => {
  const [value, onChange] = useState(new Date());
  const history = useHistory();

  const logOutUser = () => {
    const session = window.sessionStorage;
    session.removeItem("userInfo");
    history.push("/");
  };

  const theme = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  };

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
      backgroundColor: "#9480c9",
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
                  Total Appointments : 30
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
              {/* <h6 className={classes.h6}>Details</h6> */}
              <CardContent className={classes.textblock2}>
                <h6 className={classes.h6} style={{ color: "white" }}>
                  Appointments Approved: 15
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
              {/* <h6 className={classes.h6}>Details</h6> */}
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
        <Grid container spacing={4}>
          <Grid item sm={12} lg={6} md={6}>
            <BarChart />
          </Grid>
          <Grid item sm={12} lg={6} md={6}>
            <div className="col-6 mb-4">
              <table className="table mt-4">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">S. no </th>
                    <th scope="col">Patient id</th>
                    <th scope="col">Patient Name</th>
                    <th scope="col">catagory</th>
                    <th scope="col">Appointments status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row m-2">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <button className="btn btn-success btn-sm m-2" href="#">
                        {" "}
                        Approved
                      </button>
                      <button className="btn btn-warning btn-sm m-2" href="#">
                        {" "}
                        postpone
                      </button>
                      <button className="btn btn-danger btn-sm m-2" href="#">
                        {" "}
                        Rejected
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Grid>
        </Grid>
      </Container>
      {/* //calendar start// */}
      {/* <div className="m-4">
        <div className="row ">
          <div className="col-4">
            <Calendar onChange={onChange} value={value} className="mb-4" />
            <Dropdown>
              <Dropdown.Toggle variant="success">
                Select Appointments
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Day</Dropdown.Item>
                <Dropdown.Item href="#">Week</Dropdown.Item>
                <Dropdown.Item href="#">Month</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        calendar end /> */}
    </>
  );
};

export default Physician_dashboard;
