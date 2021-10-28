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
  Button,
  Grid,
  CardActionArea,
  CardContent,
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
      background: "#3f51b5",
      color: "#fff",
      textAlign: "center",
      alignItems: "center",
      width: "300px",
      minHeight: "90px",
      // border: "1px solid #f50057",
    },
    gridcontainer2: {
      background: "#ffffff",
      color: "#f50057",
      textAlign: "center",
      minHeight: "177px",
      border: "2px solid #f50057",
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
    image: {
      Width: 10,
    },
    container: {
      position: "relative",
      fontFamily: "Arial",
    },
    textblock: {
      backgroundColor: "#f50057",
      color: "white",
      textAlign: "center",
      width: "300px",
      height: "30px",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Container>
        <Grid container spacing={4}>
          <Grid item lg={4} xs={12}>
            <div className={classes.container}>
              <img
                src="https://ak.picdn.net/shutterstock/videos/1068724409/thumb/9.jpg?ip=x480"
                alt="Nature"
                style={{ width: "300px", height: "120px" }}
              />
              <div className={classes.textblock}>
                <Typography style={{ fontWeight: "bold" }}>
                  Total Appointments Approved: 30
                </Typography>
              </div>
            </div>
          </Grid>

          <Grid item lg={4} xs={12}>
            <Card className={classes.gridcontainer}>
              <CardContent>
                <Typography variant="subtitle1" className="fw-bold">
                  Number of Appointments
                </Typography>
                <Typography variant="body2" className="fw-bold">
                  20
                </Typography>
              </CardContent>
              <CardActionArea></CardActionArea>
            </Card>
          </Grid>

          <Grid item lg={4} xs={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOlUf_MDMa7opx7h0CJMhyv2wh3ryH5PBvMg&usqp=CAU"
              alt="Nature"
              style={{ width: "300px", height: "120px" }}
            />
            <div className={classes.textblock}>
              <Typography style={{ fontWeight: "bold" }}>
                Total Appointments Canceled: 30
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <BarChart />
          </Grid>
          <Grid item sm={6} xs={12}>
            <div className="col-6 mb-4">
              <table className="table mt-4">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col"># </th>
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
                      <button className="btn btn-success btn-sm" href="#">
                        {" "}
                        Approve
                      </button>
                      <button className="btn btn-warning btn-sm m-2" href="#">
                        {" "}
                        postpone
                      </button>
                      <button className="btn btn-danger btn-sm" href="#">
                        {" "}
                        Rejected
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn btn-primary mt-4" href="#">
                {" "}
                Join Online Consultaion
              </button>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className="m-4">
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
        {/* <PatientList /> */}
      </div>
    </>
  );
};

export default Physician_dashboard;
