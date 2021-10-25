import { useState } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MedicatinAllergy2 = (props) => {
  // let userId = JSON.parse(window.sessionStorage.getItem("userInfo"));

  // let temp_medication_allergies = {
  //   id: "",
  //   userId: "",
  //   current_medication: [
  //     {
  //       medicineName: "",
  //       dosage: "",
  //       directionstoconsume: "",
  //       frequency: "",
  //       physicianName: "",
  //       purpose: "",
  //       startDate: "",
  //       endDate: "",
  //     },
  //   ],
  //   otc_medication: [
  //     {
  //       otcDrugName: "",
  //       strength: "",
  //       directiontoconsume: "",
  //       socialDrugs: "",
  //     },
  //   ],
  //   past_medication: [
  //     {
  //       pastdrugName: "",
  //       strength: "",
  //       directiontoconsume: "",
  //     },
  //   ],
  //   allergies: [
  //     {
  //       allergyName: "",
  //       symptomsofAllergy: "",
  //       drugAllergy: "",
  //     },
  //   ],
  // };

  // const [medication_allergies, setmedication_allergies] = useState(
  //   temp_medication_allergies
  // );
  // //console.log(medication_allergies);
  // const HandleChange = (e) => {
  //   // const name = e.target.name,
  //   //   value = e.target.value;
  //   //[e.target.name]: e.target.value,
  //   setmedication_allergies({
  //     ...medication_allergies,
  //     [e.target.name]: e.target.value,
  //   });

  //   // setmedication_allergies({
  //   //   //medication_allergies,
  //   //   [name]: value,
  //   // });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   props.medication_allergies(medication_allergies);
  //   //console.log(props.medication_allergies);
  // };
  const initialValues = {
    id: "",
    userId: "",
    current_medication: {
      medicineName: "",
      dosage: "",
      directionstoconsume: "",
      frequency: "",
      physicianName: "",
      purpose: "",
      startDate: "",
      endDate: "",
    },
    otc_medication: {
      otcDrugName: "",
      strength: "",
      directiontoconsume: "",
      socialDrugs: "",
    },
    past_medication: {
      pastdrugName: "",
      strength: "",
      directiontoconsume: "",
    },
    allergies: {
      allergyName: "",
      symptomsofAllergy: "",
      drugAllergy: "",
    },
  };
  const validationSchema = Yup.object().shape({});
  const onSubmit = (values) => {
    const payload = {
      userid: props.currentUser.id,
      current_medication: {
        medicineName: values.current_medication.medicineName,
        dosage: values.current_medication.dosage,
        directionstoconsume: values.current_medication.directionstoconsume,
        frequency: values.current_medication.frequency,
        physicianName: values.current_medication.physicianName,
        purpose: values.current_medication.purpose,
        startDate: values.current_medication.startDate,
        endDate: values.current_medication.endDate,
      },
      otc_medication: {
        otcDrugName: values.otc_medication.medicineName,
        strength: values.otc_medication.strength,
        directiontoconsume: values.otc_medication.directiontoconsume,
        socialDrugs: values.otc_medication.socialDrugs,
      },
      past_medication: {
        pastdrugName: values.past_medication.pastdrugName,
        strength: values.past_medication.strength,
        directiontoconsume: values.past_medication.directiontoconsume,
      },
      allergies: {
        allergyName: values.allergies.allergyName,
        symptomsofAllergy: values.allergies.symptomsofAllergy,
        drugAllergy: values.allergies.drugAllergy,
      },
    };
    props.medication_allergies(payload);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="card shadow-lg p-10 mb-6 bg-white rounded mt-5">
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
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">Medicine Name</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="current_medication.medicineName"
                                placeholder="Please enter medicine name"
                                id="current_medication.medicineName"
                              />
                              <div className="error">
                                <ErrorMessage name="current_medication.medicineName" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">Dosages</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="current_medication.dosage"
                                placeholder="Please enter dosages"
                                id="current_medication.dosage"
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
                                name="current_medication.directionstoconsume"
                                placeholder="Please enter medicine name"
                                id="current_medication.directionstoconsume"
                              />
                              <div className="error">
                                <ErrorMessage name="current_medication.directionstoconsume" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">Frequency</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="current_medication.frequency"
                                placeholder="Please enter frequency"
                                id="current_medication.frequency"
                              />
                              <div className="error">
                                <ErrorMessage name="current_medication.directionstoconsume" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">Physician Name</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="current_medication.physicianName "
                                placeholder="Please enter Physician Name"
                                id="current_medication.physicianName "
                              />
                              <div className="error">
                                <ErrorMessage name="current_medication.physicianName" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">Purpose</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="current_medication.purpose"
                                placeholder="Please enter purpose"
                                id="current_medication.purpose"
                              />
                              <div className="error">
                                <ErrorMessage name="current_medication.purpose" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">Start Date</label>
                              <Field
                                type="date"
                                className="form-control"
                                name="current_medication.startDate"
                                placeholder="Please enter frequency"
                                id="current_medication.startDate"
                              />
                              <div className="error">
                                <ErrorMessage name="current_medication.startDate" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">End Date</label>
                              <Field
                                type="date"
                                className="form-control"
                                name="current_medication.endDate"
                                placeholder="Please enter frequency"
                                id="current_medication.endDate"
                              />
                              <div className="error">
                                <ErrorMessage name="current_medication.endDate" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col-12">
                        <hr />
                        <h5 className="text-center">Otc Medication</h5>
                        <hr />

                        <div className="row">
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">Otc Drug Name</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="otc_medication.otcDrugName"
                                placeholder="Please enter medicine name"
                                id="otc_medication.otcDrugName"
                              />
                              <div className="error">
                                <ErrorMessage name="otc_medication.otcDrugName" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">Strength</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="otc_medication.strength"
                                placeholder="Please enter strength"
                                id="otc_medication.strength"
                              />
                              <div className="error">
                                <ErrorMessage name="otc_medication.strength" />
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
                                name="otc_medication.directiontoconsume"
                                placeholder="Please enter medicine name"
                                id="otc_medication.directiontoconsume"
                              />
                              <div className="error">
                                <ErrorMessage name="otc_medication.directiontoconsume" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">Social Drugs</label>
                              <Field
                                as="select"
                                className="form-control"
                                name="otc_medication.socialDrugs: "
                                id="otc_medication.socialDrugs"
                              >
                                <option value="">Select</option>
                                <option value="smoke">Smoke</option>
                                <option value="drink">Drink</option>
                                <option value="illicit">Illicit Drug</option>
                              </Field>
                              <div className="error">
                                <ErrorMessage name="otc_medication.socialDrugs" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col-12">
                        <hr />
                        <h5 className="text-center">
                          Past Prescribed Medication
                        </h5>
                        <hr />
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">Drug Name</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="past_medication.pastdrugName"
                                placeholder="Please enter medicine name"
                              />
                              <div className="error">
                                <ErrorMessage name="past_medication.pastdrugName" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">Strength</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="past_medication.strength"
                                id="past_medication.strength"
                              />
                              <div className="error">
                                <ErrorMessage name="past_medication.strength" />
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
                                name="past_medication.directiontoconsume"
                                id="past_medication.directiontoconsume"
                              />
                              <div className="error">
                                <ErrorMessage name="past_medication.directiontoconsume" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col-12">
                        <hr />
                        <h5 className="text-center">Allerigies</h5>
                        <hr />
                        <div className="row">
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">Allergy Name</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="allergies.allergyName"
                                id="allergies.allergyName"
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
                                name="allergies.symptomsofAllergy "
                                id="allergies.symptomsofAllergy"
                              />
                              <div className="error">
                                <ErrorMessage name="allergies.symptomsofAllergy" />
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-3">
                            <div className="form-group">
                              <label htmlFor="user name">Drug Allergy</label>
                              <Field
                                type="text"
                                className="form-control"
                                name="allergies.drugAllergy"
                                id="allergies.drugAllergy"
                              />
                              <div className="error">
                                <ErrorMessage name="allergies.drugAllergy" />
                              </div>
                            </div>
                          </div>
                        </div>
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
  );
};

const mapStateToProps = (state) => {
  return {
    globalMessage: state.demographics.globalmessage,
    currentUser: state.login.loggedUserInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    medication_allergies: (newuser) =>
      dispatch(actionCreator.AddMedicationAndAllergiesAsync(newuser)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(MedicatinAllergy2);
