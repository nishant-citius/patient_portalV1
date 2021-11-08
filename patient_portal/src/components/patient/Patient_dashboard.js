import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import { adminService } from "../../services/register_user_service";

import {
  Container,
  Card,
  Grid,
  CardContent,
  makeStyles,
  Typography,
} from "mui";
import "../admin/admin.css";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "mui";
import * as actionCreator from "../../redux/actions/userActionCreater";

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
  root: {
    height: "100vh",
    width: "80vw",
  },
}));

const Patient_dashboard = (props) => {
  const classes = useStyles();
  const [isImmunization, setIsImmunization] = useState(false);
  const [mediAllergy, setmediAllergy] = useState(false);
  const [pVitals, setpVitals] = useState(false);

  useEffect(() => {
    if (props.isLoggedIn) {
      loadInitialData();
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

  function getPatientVitals(userId) {
    adminService.getPatientVitals(userId).then(
      (response) => {},
      (error) => {
        return;
      }
    );
  }

  function loadInitialData() {
    getPatientVitals(props.currentUser.id);
    props.getMedicationAllergies(props.currentUser.id);
  }

  return (
    <>
      <Container className={classes.container}>
        <Grid container spacing={1}>
          <Grid item sm={12} lg={6} md={6}>
            <Card className={classes.gridcontainer}>
              <div className="showcard-header">
                <h5 className="text-primary">Vitals</h5>
              </div>
              <CardContent>
                <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                  <Table>
                    <TableHead className="tablehead">
                      <TableRow>
                        <TableCell className="tableCell">Height</TableCell>
                        <TableCell className="tableCell">Weight</TableCell>
                        <TableCell className="tableCell">
                          Blood Pressure
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {pVitals ? (
                        <TableRow>
                          <TableCell>
                            {props.patientvitalsDetails[0].height}
                          </TableCell>
                          <TableCell>
                            {props.patientvitalsDetails[0].weight}
                          </TableCell>
                          <TableCell>
                            {props.patientvitalsDetails[0].blood_pressure}
                          </TableCell>
                        </TableRow>
                      ) : (
                        <TableRow>
                          <TableCell>No data Available</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={12} md={6} lg={6}>
            <Card className={classes.gridcontainer}>
              <div className="showcard-header">
                <h5 className="text-primary">Current Medication </h5>
              </div>
              <CardContent>
                <Typography variant="subtitle1"></Typography>
                <div className={classes.display}>
                  <TableContainer
                    component={Paper}
                    style={{ marginTop: "20px" }}
                  >
                    <Table>
                      {/* <TableBody> */}
                      <TableHead className="tablehead">
                        <TableRow>
                          <TableCell className="tableCell"> Sr.No</TableCell>
                          <TableCell className="tableCell"> Medicine</TableCell>
                          <TableCell className="tableCell"> Dose</TableCell>
                          <TableCell className="tableCell">
                            {" "}
                            Physician
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      {/* </TableBody> */}
                      {mediAllergy ? (
                        props.mediAllergyDetails.current_medication.map(
                          function (item, index) {
                            return (
                              <TableBody>
                                <TableRow key={index}>
                                  <TableCell>{index + 1}</TableCell>
                                  <TableCell>{item.medicineName}</TableCell>
                                  <TableCell>{item.dosage}</TableCell>
                                  <TableCell>{item.physicianName}</TableCell>
                                </TableRow>
                              </TableBody>
                            );
                          }
                        )
                      ) : (
                        <TableRow>
                          <TableCell>No data available</TableCell>
                        </TableRow>
                      )}
                    </Table>
                  </TableContainer>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container className={`${classes.container} mt-2`}>
        <Grid container spacing={1}>
          <Grid item sm={12} lg={6} md={6}>
            <Card className={classes.gridcontainer}>
              <div className="showcard-header">
                <h5 className="text-primary">Immunization</h5>
              </div>
              <CardContent>
                <div className={classes.display}>
                  <Typography variant="subtitle1">
                    <TableContainer
                      component={Paper}
                      style={{ marginTop: "20px" }}
                    >
                      <Table>
                        <TableHead className="tablehead">
                          <TableRow>
                            <TableCell className="tableCell">Age</TableCell>
                            <TableCell className="tableCell">
                              Vaccine Brand
                            </TableCell>
                            <TableCell className="tableCell">
                              Dose Detail
                            </TableCell>
                            {/* <TableCell> scope="col">Dose Details</TableCell> */}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {isImmunization ? (
                            <TableRow>
                              <TableCell className="tableCell">
                                {props.immunizationDetails.age_category}
                              </TableCell>
                              <TableCell className="tableCell">
                                {props.immunizationDetails.vaccine_brand}
                              </TableCell>
                              <TableCell className="tableCell">
                                {props.immunizationDetails.dose_detail}
                              </TableCell>
                            </TableRow>
                          ) : (
                            <TableRow>
                              <TableCell>No data Available</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={12} lg={6} md={6}>
            <Card className={classes.gridcontainer}>
              <div className="showcard-header">
                <h5 className="text-primary">Past Medication</h5>
              </div>
              <CardContent>
                <div className={classes.display}>
                  <Typography variant="subtitle1">
                    <TableContainer
                      component={Paper}
                      style={{ marginTop: "20px" }}
                    >
                      <Table>
                        <TableHead className="tablehead">
                          <TableRow>
                            <TableCell className="tableCell">Sr.No</TableCell>
                            <TableCell className="tableCell">
                              {" "}
                              Drug Name
                            </TableCell>
                            <TableCell className="tableCell">
                              {" "}
                              Strength
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {mediAllergy ? (
                            props.mediAllergyDetails.past_medication.map(
                              function (item, index) {
                                return (
                                  <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{item.pastdrugName}</TableCell>
                                    <TableCell>{item.strength}</TableCell>
                                  </TableRow>
                                );
                              }
                            )
                          ) : (
                            <TableRow>
                              <TableCell>No data Available</TableCell>
                            </TableRow>
                          )}
                        </TableBody>
                      </Table>
                    </TableContainer>
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
const mapDispatchToProps = (dispatch) => {
  return {
    getMedicationAllergies: (userId) =>
      dispatch(actionCreator.GetMedicationAllergies(userId)),
    getImmunization: (userId) =>
      dispatch(actionCreator.GetPatientImmunization(userId)),
  };
};
let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(Patient_dashboard);
