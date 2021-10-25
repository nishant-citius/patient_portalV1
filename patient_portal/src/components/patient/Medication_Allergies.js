import { useState } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const Medication_Allergies = (props) => {
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
      temp.frequency = v.frequency;
      temp.physicianName = v.physicianName;
      temp.purpose = v.purpose;
      temp.startDate = v.startDate;
      temp.endDate = v.endDate;
      return temp;
    });
    let om = values.otc_medication.map((v) => {
      let temp = {};
      temp.otcDrugName = v.medicineName;
      temp.strength = v.strength;
      temp.directiontoconsume = v.directiontoconsume;
      temp.socialDrugs = v.socialDrugs;
      return temp;
    });
    let pm = values.past_medication.map((v) => {
      let temp = {};
      temp.pastdrugName = v.pastdrugName;
      temp.strength = v.strength;
      temp.directiontoconsume = v.directiontoconsume;
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
      otc_medication: om,
      past_medication: pm,
      allergies: al,
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
                                        <div className="col-12 col-md-3">
                                          <div className="form-group">
                                            <label htmlFor="user name">
                                              Medicine Name
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control"
                                              name={`current_medication[${index}].medicineName`}
                                              placeholder="Please enter medicine name"
                                            />
                                            <div className="error">
                                              <ErrorMessage name="current_medication.medicineName" />
                                            </div>
                                          </div>
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
                                              Frequency
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control"
                                              name={`current_medication[${index}].frequency`}
                                              placeholder="Please enter frequency"
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
                                              Purpose
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control"
                                              name={`current_medication[${index}].purpose`}
                                              placeholder="Please enter purpose"
                                            />
                                            <div className="error">
                                              <ErrorMessage name="current_medication.purpose" />
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
                                {otc_medication.map((otc_medication, index) => (
                                  <div key={index}>
                                    <div className="row">
                                      <div className="col-12 col-md-3">
                                        <div className="form-group">
                                          <label htmlFor="user name">
                                            Otc Drug Name
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-control"
                                            name={`otc_medication[${index}].otcDrugName`}
                                            placeholder="Please enter medicine name"
                                          />
                                          <div className="error">
                                            <ErrorMessage name="otc_medication.otcDrugName" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-12 col-md-3">
                                        <div className="form-group">
                                          <label htmlFor="user name">
                                            Strength
                                          </label>
                                          <Field
                                            type="text"
                                            className="form-control"
                                            name={`otc_medication[${index}].strength`}
                                            placeholder="Please enter strength"
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
                                            <option value="">Select</option>
                                            <option value="smoke">Smoke</option>
                                            <option value="drink">Drink</option>
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
                                ))}
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
                                        <div className="col-12 col-md-3">
                                          <div className="form-group">
                                            <label htmlFor="user name">
                                              Drug Name
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control"
                                              name={`past_medication[${index}].pastdrugName`}
                                              placeholder="Please enter medicine name"
                                            />
                                            <div className="error">
                                              <ErrorMessage name="past_medication.pastdrugName" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-12 col-md-3">
                                          <div className="form-group">
                                            <label htmlFor="user name">
                                              Strength
                                            </label>
                                            <Field
                                              type="text"
                                              className="form-control"
                                              name={`past_medication[${index}].strength`}
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
export default hof(Medication_Allergies);
