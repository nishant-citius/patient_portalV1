import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  DirectionsWalkIcon,
  DirectionsBikeIcon,
  DirectionsRunIcon,
} from "mui-icons";
import {
  Container,
  Card,
  Grid,
  CardContent,
  Divider,
  CardMedia,
  makeStyles,
  Typography,
} from "mui";

const useStyles = makeStyles((theme) => ({
  gridcontainer: {
    background: "#fff",
    color: "#808080",
    textAlign: "center",
  },
  innercard2: {
    minWidth: "100px",
    minHeight: "100px",
    margin: "4px",
    // background:"rgb(72 179 226)"
  },
}));

const Patient_dashboard = (props) => {
  // useEffect(() => {
  //   if (props.isLoggedIn) {
  //     if (
  //       props.patientvitalsDetails
  //     ) {
  //       setIsAvailable(true);
  //     }
  //   }
  // }, []);
  // useEffect(() => {
  //   if (props.isLoggedIn) {
  //     if (

  //       props.mediAllergyDetails

  //     ) {
  //       setIsAvailable(true);
  //     }
  //   }
  // }, []);

  //  useEffect(() => {
  //   if (props.isLoggedIn) {
  //     if (!props.mediAllergyDetails) {
  //       return;
  //     } else {
  //       console.log("<---AAAAAAAAA--->", props.mediAllergyDetails);
  //     }
  //   }
  // }, [props.mediAllergyDetails, props.isLoggedIn]);

  const classes = useStyles();
  console.log(props.mediAllergyDetails, "after useeffect");
  console.log("pooja", props.patientvitalsDetails);
  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={1}>
          <Grid item sm={12} lg={6} md={6}>
            <Card className={classes.gridcontainer}>
              <div className="showcard-header">
                <p className="prem-1">Vitals</p>
              </div>
              <CardContent>
                <table className="dashboard-table tbwd ">
                  <thead>
                    <tr>
                      <th scope="col">Height</th>
                      <th scope="col">Weight</th>
                      <th scope="col">Blood Pressure</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.patientvitalsDetails ? (
                      <tr>
                        <td>{props.patientvitalsDetails[0].height}</td>
                        <td>{props.patientvitalsDetails[0].weight}</td>
                        <td>{props.patientvitalsDetails[0].blood_pressure}</td>
                      </tr>
                    ) : (
                      <tr>
                        <td>No data Available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={12} md={6} lg={6}>
            <Card className={classes.gridcontainer}>
              <div className="showcard-header">
                <p className="prem-1">Current Medication</p>
              </div>
              <CardContent>
                <Typography variant="subtitle1"></Typography>
                <div className={classes.display}>
                  <table className="dashboard-table tbwd ">
                    <thead>
                      <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Medicine</th>
                        <th scope="col">Dose</th>
                        <th scope="col">Physician</th>
                      </tr>
                    </thead>
                    <tbody>
                      {props.mediAllergyDetails ? (
                        props.mediAllergyDetails.current_medication.map(
                          function (item, index) {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.medicineName}</td>
                                <td>{item.dosage}</td>
                                <td>{item.physicianName}</td>
                              </tr>
                            );
                          }
                        )
                      ) : (
                        <tr>
                          <td textAlign="center">No data available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container className={classes.container} className="mt-2">
        <Grid container spacing={1}>
          <Grid item sm={12} lg={6} md={6}>
            <Card className={classes.gridcontainer}>
              <div className="showcard-header">
                <p className="prem-1">Immunization</p>
              </div>
              <CardContent>
                <div className={classes.display}>
                  <Typography variant="subtitle1">
                    <table className="dashboard-table tbwd ">
                      <thead>
                        <tr>
                          <th scope="col">Age</th>
                          <th scope="col">Vaccine Brand</th>
                          <th scope="col">Dose Detail</th>
                          {/* <th scope="col">Dose Details</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {props.immunizationDetails ? (
                          <tr>
                            <td>{props.immunizationDetails.age_category}</td>
                            <td>{props.immunizationDetails.vaccine_brand}</td>
                            <td>{props.immunizationDetails.dose_detail}</td>
                          </tr>
                        ) : (
                          <tr>
                            <td>No data Available</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={12} lg={6} md={6}>
            <Card className={classes.gridcontainer}>
              <div className="showcard-header">
                <p className="prem-1">Past Medication</p>
              </div>
              <CardContent>
                <div className={classes.display}>
                  <Typography variant="subtitle1">
                    <table className="dashboard-table tbwd ">
                      <thead>
                        <tr>
                          <th scope="col">Sr.No</th>
                          <th scope="col">Drug Name</th>
                          <th scope="col">Strength</th>
                        </tr>
                      </thead>
                      <tbody>
                        {props.mediAllergyDetails ? (
                          props.mediAllergyDetails.past_medication.map(
                            function (item, index) {
                              return (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{item.pastdrugName}</td>
                                  <td>{item.strength}</td>
                                </tr>
                              );
                            }
                          )
                        ) : (
                          <tr>
                            <td>No data Available</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>

          {/* <Grid item sm={6} lg={6} md={6}>
            <h5 className={classes.h5}>Activities</h5>
            <Card>
              <CardContent>
                <Container>
                  <Grid container spacing={6}>
                    <Grid item>
                      <Card
                        style={{ backgroundColor: "rgb(62 222 182)" }}
                        className={classes.innercard4}
                      >
                        <CardContent>
                          <DirectionsWalkIcon></DirectionsWalkIcon>
                          <Typography variant="subtitle1" color="black">
                            Walk
                            <br />
                            2 hours <br />
                            daily
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item>
                      <Card
                        style={{ backgroundColor: "rgb(62 222 182)" }}
                        className={classes.innercard4}
                      >
                        <CardContent>
                          <DirectionsBikeIcon></DirectionsBikeIcon>
                          <Typography variant="subtitle1" color="black">
                            Cycling
                            <br />
                            30 mins
                            <br /> daily
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item>
                      <Card
                        style={{ backgroundColor: "rgb(62 222 182)" }}
                        className={classes.innercard4}
                      >
                        <CardContent>
                          <DirectionsRunIcon></DirectionsRunIcon>
                          <Typography variant="subtitle1" color="black">
                            Running
                            <br />
                            20 mins <br />
                            daily
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Container>
              </CardContent>
            </Card>
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
    //allusers: state.immunization.Immunizationsreducer,
    patientvitalsDetails: state.getPatientvitals.getPatientvitals,
    mediAllergyDetails: state.patientMedicationAllergy.patientMedicationAllergy,
    immunizationDetails: state.patientImmunization.patientImmunization,
    isLoggedIn: state.login.isLoggedIn,
  };
};
let hof = connect(mapStateToProps, null);
export default hof(Patient_dashboard);
