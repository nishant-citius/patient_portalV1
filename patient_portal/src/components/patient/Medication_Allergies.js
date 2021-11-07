import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { adminService } from "../../services/register_user_service";
import { allergyServices } from "../../services/allergiesService";
import "../admin/admin.css";
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
}));

const Medication_Allergies = (props) => {
  const classes = useStyles();
  const [isAvailable, setIsAvailable] = useState(false);
  const [medicationList, setMedicationList] = useState([]);
  const [allergyList, setAllergyList] = useState([]);
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
      patientAllergy();
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
  function patientAllergy() {
    allergyServices.getAllAllergies().then(
      (response) => {
        setAllergyList(response.data);
      },
      (error) => {
        return;
      }
    );
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
    otc_medication: [
      {
        otcDrugName: "",
        strength: "",
        directiontoconsume: "",
        socialDrugs: "",
      },
    ],
    past_medication: [
      {
        pastdrugName: "",
        strength: "",
        directiontoconsume: "",
      },
    ],
    allergies: [
      {
        allergyType: "",
        allergyName: "",
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
    let om = values.otc_medication.map((v) => {
      let temp = {};
      temp.otcDrugName = v.otcDrugName;
      temp.directiontoconsume = v.directiontoconsume;
      temp.socialDrugs = v.socialDrugs;
      return temp;
    });
    let pm = values.past_medication.map((v) => {
      let temp = {};
      temp.pastdrugName = v.pastdrugName;
      temp.directiontoconsume = v.directiontoconsume;
      return temp;
    });

    let al = values.allergies.map((v) => {
      let temp = {};
      temp.allergyType = v.allergyType;
      temp.allergyName = v.allergyName;
      temp.drugAllergy = v.drugAllergy;
      return temp;
    });

    const payload = {
      userid: props.currentUser.id,
      current_medication: cm,
      otc_medication: om,
      past_medication: pm,
      allergies: al,
    };

    props.medication_allergies(payload);
    props.flashNotification({
      message: "Medication and Allergy added...",
      type: "success",
    });

    history.push("/patient");
    props.getMedicationAllergies(props.currentUser.id);
  };

  let history = useHistory();
  return (
    <>
      {isAvailable ? (
        <div className="container">
          <div className="card shadow-lg p-10 mb-6 bg-white rounded">
            <div className="card-header text-center">
              <h4 className="text-success">Medication And Allergies</h4>
            </div>
            <div className="card-body text-center">
              <h5 className="text-primary">Current Medication</h5>
              <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                <Table>
                  <TableHead className="tablehead">
                    <TableRow>
                      <TableCell className="tableCell">Sr.No</TableCell>
                      <TableCell className="tableCell">Medicine Name</TableCell>
                      <TableCell className="tableCell">Dose Details</TableCell>
                      <TableCell className="tableCell">
                        Direction To Consumeghh
                      </TableCell>

                      <TableCell className="tableCell">
                        Physician Name
                      </TableCell>

                      <TableCell className="tableCell">Start Date</TableCell>
                      <TableCell className="tableCell">End Date</TableCell>
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
              <br></br>
              <h5 className="text-primary">OTC Medication</h5>
              <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                <Table>
                  <TableHead className="tablehead">
                    <TableRow>
                      <TableCell className="tableCell">Sr.No</TableCell>
                      <TableCell className="tableCell">Otc Drug Name</TableCell>

                      <TableCell className="tableCell">
                        Direction To Consume
                      </TableCell>
                      <TableCell className="tableCell">Social Drug</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.mediAllergyDetails.otc_medication.map(function (
                      item,
                      index
                    ) {
                      return (
                        <TableRow key={index}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{item.otcDrugName}</TableCell>
                          <TableCell>{item.directiontoconsume}</TableCell>
                          <TableCell>{item.socialDrugs}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>{" "}
              <br></br>
              <h5 className="text-primary">Past Medication</h5>
              <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                <Table>
                  <TableHead className="tablehead">
                    <TableRow>
                      <TableCell className="tableCell">Sr.No</TableCell>
                      <TableCell className="tableCell">Drug Name</TableCell>

                      <TableCell className="tableCell">
                        Direction To Consume
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.mediAllergyDetails.past_medication.map(function (
                      item,
                      index
                    ) {
                      return (
                        <TableRow key={index}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{item.pastdrugName}</TableCell>
                          <TableCell>{item.directiontoconsume}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <br></br>
              <h5 className="text-primary">Allergies</h5>
              <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                <Table>
                  <TableHead className="tablehead">
                    <TableRow>
                      <TableCell className="tableCell">Sr.No</TableCell>
                      <TableCell className="tableCell">Allergy Name</TableCell>
                      <TableCell className="tableCell">Symptoms</TableCell>
                      <TableCell className="tableCell">Drug Allergy</TableCell>
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
                                                  placeholder="Please enter directions to consume"
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
                            <h5 className="text-center">Otc Medication</h5>
                            <hr />
                            <FieldArray name="otc_medication">
                              {(fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { otc_medication } = values;
                                return (
                                  <div>
                                    {otc_medication.map(
                                      (otc_medication, index) => (
                                        <div key={index}>
                                          <div className="row">
                                            <div className="col-12 col-md-6">
                                              <div className="form-group">
                                                <label htmlFor="user name">
                                                  Otc Drug Name
                                                </label>
                                                {/* <Field
                                                  type="text"
                                                  className="form-control"
                                                  name={`otc_medication[${index}].otcDrugName`}
                                                  placeholder="Please enter medicine name"
                                                /> */}
                                                <Field
                                                  as="select"
                                                  className="form-control"
                                                  name={`otc_medication[${index}].otcDrugName`}
                                                >
                                                  <option value="">
                                                    Select
                                                  </option>
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
                                                <div className="error">
                                                  <ErrorMessage name="otc_medication.otcDrugName" />
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
                                                  name={`otc_medication[${index}].directiontoconsume`}
                                                  placeholder="Please enter medicine name"
                                                />
                                                <div className="error">
                                                  <ErrorMessage name="otc_medication.directiontoconsume" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="col-12 col-md-3">
                                              <div className="form-group">
                                                <label htmlFor="user name">
                                                  Social Drugs
                                                </label>
                                                <Field
                                                  as="select"
                                                  className="form-control"
                                                  name={`otc_medication[${index}].socialDrugs`}
                                                  id="otc_medication.socialDrugs"
                                                >
                                                  <option value="">
                                                    Select
                                                  </option>
                                                  <option value="smoke">
                                                    Smoke
                                                  </option>
                                                  <option value="drink">
                                                    Drink
                                                  </option>
                                                  <option value="illicit">
                                                    Illicit Drug
                                                  </option>
                                                </Field>
                                                <div className="error">
                                                  <ErrorMessage name="otc_medication.socialDrugs" />
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
                            <h5 className="text-center">
                              Past Prescribed Medication
                            </h5>
                            <hr />
                            <FieldArray name="past_medication">
                              {(fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { past_medication } = values;
                                return (
                                  <div>
                                    {past_medication.map(
                                      (past_medication, index) => (
                                        <div key={index}>
                                          <div className="row">
                                            <div className="col-12 col-md-6">
                                              <div className="form-group">
                                                <label htmlFor="user name">
                                                  Drug Name
                                                </label>
                                                {/* <Field
                                                  type="text"
                                                  className="form-control"
                                                  name={`past_medication[${index}].pastdrugName`}
                                                  placeholder="Please enter medicine name"
                                                /> */}
                                                <Field
                                                  as="select"
                                                  className="form-control"
                                                  name={`past_medication[${index}].pastdrugName`}
                                                >
                                                  <option value="">
                                                    Select
                                                  </option>
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
                                                <div className="error">
                                                  <ErrorMessage name="past_medication.pastdrugName" />
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
                                                  name={`past_medication[${index}].directiontoconsume`}
                                                />
                                                <div className="error">
                                                  <ErrorMessage name="past_medication.directiontoconsume" />
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
                                              {/* <Field
                                                type="text"
                                                className="form-control"
                                                name={`allergies[${index}].allergyName`}
                                              /> */}
                                              <Field
                                                as="select"
                                                className="form-control"
                                                name={`allergies[${index}].allergyType`}
                                              >
                                                <option value="">Select</option>
                                                {Array.from(
                                                  new Set(
                                                    allergyList.map(
                                                      (obj) => obj.AllergyType
                                                    )
                                                  )
                                                ).map((AllergyType) => {
                                                  return (
                                                    <option value={AllergyType}>
                                                      {AllergyType}
                                                    </option>
                                                  );
                                                })}
                                                {/* {allergyList.map(
                                                  (allergy, index) => (
                                                    <option
                                                      value={
                                                        allergy.AllergyType
                                                      }
                                                      key={index}
                                                    >
                                                      {allergy.AllergyType}
                                                    </option>
                                                  )
                                                )} */}
                                              </Field>
                                              <div className="error">
                                                <ErrorMessage name="allergies.allergyType" />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="col-12 col-md-3">
                                            <div className="form-group">
                                              <label htmlFor="user name">
                                                Symptoms of Allergy
                                              </label>
                                              <Field
                                                as="select"
                                                className="form-control"
                                                name={`allergies[${index}].allergyName`}
                                              >
                                                <option value="">Select</option>
                                                {Array.from(
                                                  new Set(
                                                    allergyList.map(
                                                      (obj) => obj.AllergyName
                                                    )
                                                  )
                                                ).map((AllergyName) => {
                                                  return (
                                                    <option value={AllergyName}>
                                                      {AllergyName}
                                                    </option>
                                                  );
                                                })}
                                                {/* {allergyList.map(
                                                  (allergy, index) => (
                                                    <option
                                                      value={
                                                        allergy.AllergyName
                                                      }
                                                      key={index}
                                                    >
                                                      {allergy.AllergyName +
                                                        "   " +
                                                        allergy.AllergenSource}
                                                    </option>
                                                  )
                                                )} */}
                                              </Field>
                                              <div className="error">
                                                <ErrorMessage name="allergies.allergyName" />
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
    globalMessage: state.medication_allergies.globalmessage,
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
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(Medication_Allergies);
