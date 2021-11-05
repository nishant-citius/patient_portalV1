import { useState, useEffect } from "react";
import { useHistory,useParams } from "react-router";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { adminService } from "../../services/register_user_service";
import {
  makeStyles,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "mui";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "80vw",
  },
  tablehead: {
    background: "#b7c1f7",
  },
}));

const PhyMedicationAllergies = (props) => {
  const classes = useStyles();
  const [isAvailable, setIsAvailable] = useState(false);
  const [medicationList, setMedicationList] = useState([]);
  const [medicineStrength, setmedicineStrength] = useState([]);
  const [updateMedications, setupdateMedications] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (props.isLoggedIn) {
      if (props.mediAllergyDetails) {
        setIsAvailable(true);
      }
    }
  }, []);
  useEffect(() => {
    if (props.isLoggedIn) {
      // setDoctorsList(props.physiciandata);
      patientMedication();
      
        }
  }, []);
  function patientMedication() {
    adminService.getMedication().then(
      (response) => {
        setMedicationList(response.data);
      },
      (error) => {
        return;
      }
    );
  }
  function updateMedication(userId){
    adminService.updateMedications(userId).then(
      (response) =>{
        setupdateMedications(response.data);
      },
      (error) =>{
        return;
      }
    );
  }
 
  function getStrength() {
    let medicine = document.getElementById("medication_name").value;
    let arr = medicationList.filter((item) => {
      if (item.DrugName === medicine) {
        return item;
      }
    });
    console.log("Medicine Strength", medicine);
    setmedicineStrength(arr);
    return arr;
  }

  const initialValues = {
    id: "",
    userId: "",
    current_medication: [
      {
        medicineName: "",
        dosage: "",
        directionstoconsume: "",
        frequency: "",
        physicianName: "",
        purpose: "",
        startDate: "",
        endDate: "",
      },
    ],
   
    allergies: [
      {
        allergyName: "",
        symptomsofAllergy: "",
        drugAllergy: "",
      },
    ],
  };
  const validationSchema = Yup.object().shape({});
  const onSubmit = (values) => {
   
    let cm = values.current_medication.map((v) => {
      let temp = {};
      temp.medicineName = v.medicineName;
      temp.dosage = v.dosage;
      temp.directionstoconsume = v.directionstoconsume;
      temp.physicianName = v.physicianName;
      temp.startDate = v.startDate;
      temp.endDate = v.endDate;
      return temp;
      
    });
    
    let al = values.allergies.map((v) => {
      let temp = {};
      temp.allergyName = v.allergyName;
      temp.symptomsofAllergy = v.symptomsofAllergy;
      temp.drugAllergy = v.drugAllergy;
      return temp;
    });
    const payload = {
      userid: props.currentUser.id,
      current_medication: cm,
      allergies: al,
    };
    console.log("Happpppppppp......", payload);
    //props.medication_allergies(payload);
    props.updateMedication_allergies(payload);
    props.flashNotification({
      message: "Medication and Allergy added...",
      type: "success",
    });
    //history.push("/patient");
  };
  let history = useHistory();

  function updateMed() {
    setupdateMedications(false);
  }

  return (
    <>
      {updateMedications ? (
        <div className="container">
          <div className="card shadow-lg p-10 mb-6 bg-white rounded">
            <div className="card-header text-center">
              <h3>Medication And Allergies</h3>
              <button className="btn btn-primary" onClick={() => updateMed()} >
                Update the medication
              </button>
            </div>
           
            <div className="card-body text-center">
              <h5>Current Medication</h5>
              <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                <Table>
                  <TableHead className={classes.tablehead}>
                    <TableRow>
                      <TableCell scope="col">Sr.No</TableCell>
                      <TableCell scope="col">Medicine Name</TableCell>
                      <TableCell scope="col">Dose Details</TableCell>
                      <TableCell scope="col">Direction To Consume</TableCell>
                      <TableCell scope="col">Physician Name</TableCell>
                      <TableCell scope="col">Start Date</TableCell>
                      <TableCell scope="col">End Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
              
                    {props.mediAllergyDetails.current_medication.map(function (
                      item,
                      index
                    ) {
                      
                      return (
                        
                        <TableRow key={index}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{item.medicineName}</TableCell>
                          <TableCell>{item.dosage}</TableCell>
                          <TableCell>{item.directionstoconsume}</TableCell>
                          <TableCell>{item.physicianName}</TableCell>
                          <TableCell>{item.startDate}</TableCell>
                          <TableCell>{item.endDate}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>

            
              <h5>Allergies</h5>

              <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                <Table>
                  <TableHead className={classes.tablehead}>
                    <TableRow>
                      <TableCell scope="col">Sr.No</TableCell>
                      <TableCell scope="col">Allergy Name</TableCell>
                      <TableCell scope="col">Symptoms</TableCell>
                      <TableCell scope="col">Drug Allergy</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.mediAllergyDetails.allergies.map(function (
                      item,
                      index
                    ) {
                      return (
                        <TableRow key={index}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{item.allergyName}</TableCell>
                          <TableCell>{item.symptomsofAllergy}</TableCell>
                          <TableCell>{item.drugAllergy}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="card shadow-lg p-10 mb-6 bg-white rounded">
                    <div className="card-header text-center ">
                      Medication and Allergies 
                    </div>
                    
                    <div className="card-body">
                      <Form>
                      
                        <div className="row mt-2">
                          <div className="col-12">
                            <hr />
                            <h5 className="text-center">Current Medication</h5>
                            <hr />
                            <FieldArray name="current_medication">
                              {(fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { current_medication } = values;
                                return (
                                  <div>
                                    {current_medication.map(
                                      (current_medication, index) => (
                                        <div key={index}>
                                          <div className="row">
                                            <div className="col-12 col-md-6">
                                              <label htmlFor="user name">
                                                Medicine Name
                                              </label>
                                              <Field
                                                as="select"
                                                className="form-control"
                                                name={`current_medication[${index}].medicineName`}
                                              >
                                                <option value="">Select</option>
                                                {medicationList.map(
                                                  (medicine, index) => (
                                                    <option
                                                      value={
                                                        medicine.DrugName +
                                                        medicine.Strength
                                                      }
                                                      key={index}
                                                    >
                                                      {medicine.DrugName +
                                                        medicine.Strength}
                                                    </option>
                                                  )
                                                )}
                                              </Field>
                                            </div>
                                            <div className="col-12 col-md-3">
                                              <div className="form-group">
                                                <label htmlFor="user name">
                                                  Dosages
                                                </label>
                                                <Field
                                                  type="text"
                                                  className="form-control"
                                                  name={`current_medication[${index}].dosage`}
                                                  placeholder="Please enter dosages"
                                                />
                                                <div className="error">
                                                  <ErrorMessage name="current_medication.dosage" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12 col-md-3">
                                              <div className="form-group">
                                                <label htmlFor="user name">
                                                  Direction to consume dosage
                                                </label>
                                                <Field
                                                  type="text"
                                                  className="form-control"
                                                  name={`current_medication[${index}].directionstoconsume`}
                                                  placeholder="Please enter medicine name"
                                                />
                                                <div className="error">
                                                  <ErrorMessage name="current_medication.directionstoconsume" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12 col-md-3">
                                              <div className="form-group">
                                                <label htmlFor="user name">
                                                  Physician Name
                                                </label>
                                                <Field
                                                  type="text"
                                                  className="form-control"
                                                  name={`current_medication[${index}].physicianName`}
                                                  placeholder="Please enter Physician Name"
                                                />
                                                <div className="error">
                                                  <ErrorMessage name="current_medication.physicianName" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12 col-md-3">
                                              <div className="form-group">
                                                <label htmlFor="user name">
                                                  Start Date
                                                </label>
                                                <Field
                                                  type="date"
                                                  className="form-control"
                                                  name={`current_medication[${index}].startDate`}
                                                  placeholder="Please enter frequency"
                                                />
                                                <div className="error">
                                                  <ErrorMessage name="current_medication.startDate" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12 col-md-3">
                                              <div className="form-group">
                                                <label htmlFor="user name">
                                                  End Date
                                                </label>
                                                <Field
                                                  type="date"
                                                  className="form-control"
                                                  name={`current_medication[${index}].endDate`}
                                                  placeholder="Please enter frequency"
                                                />
                                                <div className="error">
                                                  <ErrorMessage name="current_medication.endDate" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-12 col-md-2">
                                            {index > 0 && (
                                              <button
                                                className="btn btn-danger btn-number  btn_wdth"
                                                type="button"
                                                onClick={() => remove(index)}
                                              >
                                                -
                                              </button>
                                            )}

                                            <button
                                              className="btn btn-success btn-number mrg_20 btn_wdth"
                                              type="button"
                                              onClick={() => push("")}
                                            >
                                              +
                                            </button>
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </div>
                                );
                              }}
                            </FieldArray>
                          </div>
                        </div>

                       <div className="row mt-2">
                          <div className="col-12">
                            <hr />
                            <h5 className="text-center">Allerigies</h5>
                            <hr />
                            <FieldArray name="allergies">
                              {(fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { allergies } = values;
                                return (
                                  <div>
                                    {allergies.map((allergies, index) => (
                                      <div key={index}>
                                        <div className="row">
                                          <div className="col-12 col-md-3">
                                            <div className="form-group">
                                              <label htmlFor="user name">
                                                Allergy Name
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control"
                                                name={`allergies[${index}].allergyName`}
                                              />
                                              <div className="error">
                                                <ErrorMessage name="allergies.allergyName" />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-12 col-md-3">
                                            <div className="form-group">
                                              <label htmlFor="user name">
                                                Symptoms of Allergy
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control"
                                                name={`allergies[${index}].symptomsofAllergy`}
                                              />
                                              <div className="error">
                                                <ErrorMessage name="allergies.symptomsofAllergy" />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-12 col-md-3">
                                            <div className="form-group">
                                              <label htmlFor="user name">
                                                Any Drug Allergy
                                              </label>
                                              <Field
                                                type="text"
                                                className="form-control"
                                                name={`allergies[${index}].drugAllergy`}
                                              />
                                              <div className="error">
                                                <ErrorMessage name="allergies.drugAllergy" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-2">
                                          {index > 0 && (
                                            <button
                                              className="btn btn-danger btn-number  btn_wdth"
                                              type="button"
                                              onClick={() => remove(index)}
                                            >
                                              -
                                            </button>
                                          )}

                                          <button
                                            className="btn btn-success btn-number mrg_20 btn_wdth"
                                            type="button"
                                            onClick={() => push("")}
                                          >
                                            +
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                );
                              }}
                            </FieldArray>
                          </div>
                        </div>

                        <div className="col-12 text-center mt-5">
                          <button className="btn btn-primary" type="submit">
                            Submit
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Formik>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    globalMessage: state.demographics.globalmessage,
    mediAllergyDetails: state.patientMedicationAllergy.patientMedicationAllergy,
    currentUser: state.login.loggedUserInfo,
    isLoggedIn: state.login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    medication_allergies: (newuser) =>
      dispatch(actionCreator.AddMedicationAndAllergiesAsync(newuser)),
    getMedicationAllergies: (userId) =>
      dispatch(actionCreator.GetMedicationAllergies(userId)),
    updateMedication_allergies: (userId, data) =>
    dispatch(actionCreator.UpdateMedicationAndAllergies(userId, data)),  
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(PhyMedicationAllergies);
