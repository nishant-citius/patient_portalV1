import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Container,
  Card,
  Grid,
  CardContent,
  makeStyles,
  Typography,
} from "mui";

//  useEffect(() => {
//    if (props.isLoggedIn) {
//      if (props.mediAllergyDetails) {
//        setIsAvailable(true);
//      }
//    }
//  }, []);
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
  },
}));

const Patient_dashboard = (props) => {
  const [isImmunization, setIsImmunization] = useState(false);
  const [mediAllergy, setmediAllergy] = useState(false);
  const [pVitals, setpVitals] = useState(false);
  console.log("Nishant", props.patientvitalsDetails);
  useEffect(() => {
    if (props.isLoggedIn) {
      if (props.immunizationDetails) {
        setIsImmunization(true);
      }
      if (props.mediAllergyDetails) {
        setmediAllergy(true);
      }
      if (props.patientvitalsDetails.length > 0) {
        setpVitals(true);
      }
    }
  }, []);
  const classes = useStyles();

  useEffect(() => {
    if (props.isLoggedIn) {
      if (props.immunizationDetails) {
        setIsImmunization(true);
      }

      if (props.mediAllergyDetails) {
        setmediAllergy(true);
      }

      if (props.patientvitalsDetails) {
        setpVitals(true);
      }
    }
  }, []);

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
                    {pVitals ? (
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
                      {mediAllergy ? (
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
                        {isImmunization ? (
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
                        {mediAllergy ? (
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
        </Grid>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
    patientvitalsDetails: state.getPatientvitals.getPatientvitals,
    mediAllergyDetails: state.patientMedicationAllergy.patientMedicationAllergy,
    immunizationDetails: state.patientImmunization.patientImmunization,
    isLoggedIn: state.login.isLoggedIn,
  };
};
let hof = connect(mapStateToProps, null);
export default hof(Patient_dashboard);
