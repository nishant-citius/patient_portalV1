import { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { set } from "date-fns";

const PhyMedicationAllergies = (props) => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [updateMedication,setupdateMedication]=useState(true);
  useEffect(() => {
    if (props.isLoggedIn) {
      if (props.mediAllergyDetails) {
        setIsAvailable(true);
      }
    }
  }, []);
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
      temp.otcDrugName = v.otcDrugName;
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
    props.flashNotification({
      message: "Medication and Allergy added...",
      type: "success",
    });
  };
  function updateMed() {
    setupdateMedication(false);
  }
  return (
    <>
      {updateMedication ? (
        <div className="container">
          <div className="card shadow-lg p-10 mb-6 bg-white rounded">
            <div className="card-header text-center">Immunization Details</div>
            <div className="card-body text-center">
              <h4>Current Medication</h4> 
              <button className="btn btn-primary" onClick={()=> updateMed()}>Update the medication</button>
              
              <table className="table table-bordered shadow mt-4">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">Medicine Name</th>
                    <th scope="col">Direction To Consume</th>
                    <th scope="col">Dose Details</th>
                    <th scope="col">Frequency</th>
                    <th scope="col">Physician Name</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                  </tr>
                </thead>
                <tbody>
                  {props.mediAllergyDetails.current_medication.map(function (
                    item,
                    index
                  ) {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.medicineName}</td>
                        <td>{item.dosage}</td>
                        <td>{item.directionstoconsume}</td>
                        <td>{item.frequency}</td>
                        <td>{item.physicianName}</td>
                        <td>{item.purpose}</td>
                        <td>{item.startDate}</td>
                        <td>{item.endDate}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <h4>OTC Medication</h4>
              <table className="table table-bordered shadow mt-4">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">Otc Drug Name</th>
                    <th scope="col">Strength</th>
                    <th scope="col">Direction To Consume</th>
                    <th scope="col">Social Drug</th>
                  </tr>
                </thead>
                <tbody>
                  {props.mediAllergyDetails.otc_medication.map(function (
                    item,
                    index
                  ) {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.otcDrugName}</td>
                        <td>{item.strength}</td>
                        <td>{item.directiontoconsume}</td>
                        <td>{item.socialDrugs}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <h4>Past Medication</h4>
              <table className="table table-bordered shadow mt-4">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">Drug Name</th>
                    <th scope="col">Strength</th>
                    <th scope="col">Direction To Consume</th>
                  </tr>
                </thead>
                <tbody>
                  {props.mediAllergyDetails.past_medication.map(function (
                    item,
                    index
                  ) {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.pastdrugName}</td>
                        <td>{item.strength}</td>
                        <td>{item.directiontoconsume}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <h4>Allergies</h4>
              <table className="table table-bordered shadow mt-4">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Sr.No</th>
                    <th scope="col">Allergy Name</th>
                    <th scope="col">Symptoms</th>
                    <th scope="col">Drug Allergy</th>
                  </tr>
                </thead>
                <tbody>
                  {props.mediAllergyDetails.allergies.map(function (
                    item,
                    index
                  ) {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.allergyName}</td>
                        <td>{item.symptomsofAllergy}</td>
                        <td>{item.drugAllergy}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(PhyMedicationAllergies);
