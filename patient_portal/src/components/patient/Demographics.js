import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { useHistory } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../common/common_style.css";

const Demographics = (props) => {
  useEffect(() => {
    if (props.isLoggedIn) {
      if (props.demographicsDetails.length) {
        setIsAvailable(true);
      }
    }
  }, []);

  const [isAvailable, setIsAvailable] = useState(false);
  let initialValues = undefined;
  if (isAvailable) {
    initialValues = {
      fName: props.currentUser.fName,
      lName: props.currentUser.lName,
      dob: props.currentUser.dob,
      gender: props.demographicsDetails[0].gender,
      ethnicity: props.demographicsDetails[0].ethnicity,
      education: props.demographicsDetails[0].education,
      employment: props.demographicsDetails[0].employment,
      address: props.demographicsDetails[0].address,
      phone_number: props.demographicsDetails[0].phone_number,
      medical_history: props.demographicsDetails[0].medical_history,
      family_medical_history:
        props.demographicsDetails[0].family_medical_history,
      surgeries: props.demographicsDetails[0].surgeries,
      insurance_provider: props.demographicsDetails[0].insurance_provider,
    };
  } else {
    initialValues = {
      fName: props.currentUser.fName,
      lName: props.currentUser.lName,
      dob: props.currentUser.dob,
      gender: "",
      ethnicity: "",
      education: "",
      employment: "",
      address: "",
      phone_number: "",
      medical_history: "",
      family_medical_history: "",
      surgeries: "",
      insurance_provider: "",
    };
  }

  const validationSchema = Yup.object().shape({
    fName: Yup.string().required("Required"),
    lName: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    ethnicity: Yup.string().required("Required"),
    education: Yup.string().required("Required"),
    employment: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    phone_number: Yup.string()
      .required("Required")
      .min(10, "Phone number required 10 digit")
      .max(12, "Phone number required 12 digit"),
    medical_history: Yup.string().required("Required"),
    family_medical_history: Yup.string().required("Required"),
    surgeries: Yup.string().required("Required"),
    insurance_provider: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    const payload = {
      fName: values.fName,
      lName: values.lName,
      dob: values.dob,
      gender: values.gender,
      ethnicity: values.ethnicity,
      education: values.education,
      employment: values.employment,
      address: values.address,
      phone_number: values.phone_number,
      medical_history: values.medical_history,
      family_medical_history: values.family_medical_history,
      surgeries: values.surgeries,
      insurance_provider: values.insurance_provider,
      userid: props.currentUser.id,
    };
    props.demographics(payload);
    props.flashNotification({
      message: "Demographics added...",
      type: "success",
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => (
          <div className="container mt-5">
            <h4 className="text-center pt-5">Patient Demographics</h4>
            <div className="row justify-content-center">
              <div className="col-8">
                <Form>
                  <div className="form-group">
                    <label>First Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="fName"
                      id="fName"
                      value={initialValues.fName}
                      disabled={isAvailable}
                    />
                    <div className="error">
                      <ErrorMessage name="fName" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="lName"
                      id="lName"
                      value={initialValues.lName}
                      disabled={isAvailable}
                    />
                    <div className="error">
                      <ErrorMessage name="lName" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>D.O.B</label>
                    <Field
                      type="date"
                      className="form-control"
                      name="dob"
                      id="dob"
                      value={initialValues.dob}
                      disabled={isAvailable}
                    />
                    <div className="error">
                      <ErrorMessage name="dob" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <Field
                      as="select"
                      className="form-control"
                      name="gender"
                      id="gender"
                      disabled={isAvailable}
                      value={initialValues.gender}
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Field>
                    <div className="error">
                      <ErrorMessage name="gender" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Ethnicity/Race</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="ethnicity"
                      id="ethnicity/race"
                      value={initialValues.ethnicity}
                      disabled={isAvailable}
                    />
                    <div className="error">
                      <ErrorMessage name="ethnicity" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Education</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="education"
                      id="education"
                      disabled={isAvailable}
                      value={initialValues.education}
                    />
                    <div className="error">
                      <ErrorMessage name="education" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Employment</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="employment"
                      id="employment"
                      disabled={isAvailable}
                      value={initialValues.employment}
                    />
                    <div className="error">
                      <ErrorMessage name="employment" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <Field
                      type="text-"
                      className="form-control"
                      name="address"
                      id="address"
                      disabled={isAvailable}
                      value={initialValues.address}
                    />
                    <div className="error">
                      <ErrorMessage name="address" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <Field
                      type="number"
                      className="form-control"
                      name="phone_number"
                      id="phone_number"
                      value={initialValues.phone_number}
                      disabled={isAvailable}
                    />
                    <div className="error">
                      <ErrorMessage name="phone_number" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Medical History</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="medical_history"
                      id="medical_history"
                      disabled={isAvailable}
                      value={initialValues.medical_history}
                    />
                    <div className="error">
                      <ErrorMessage name="medical_history" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Family Medical History </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="family_medical_history"
                      id="family_medical_history"
                      disabled={isAvailable}
                      value={initialValues.family_medical_history}
                    />
                    <div className="error">
                      <ErrorMessage name="family_medical_history" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Surgeries</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="surgeries"
                      id="surgeries"
                      disabled={isAvailable}
                      value={initialValues.surgeries}
                    />
                    <div className="error">
                      <ErrorMessage name="surgeries" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Insurance Provider</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="insurance_provider"
                      id="insurance_provider"
                      disabled={isAvailable}
                      value={initialValues.insurance_provider}
                    />
                    <div className="error">
                      <ErrorMessage name="insurance_provider" />
                    </div>
                  </div>
                  {isAvailable ? (
                    <button
                      type="submit"
                      className="btn btn-primary m-4"
                      disabled
                    >
                      Submit
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary m-4">
                      Submit
                    </button>
                  )}
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    globalMessage: state.demographics.globalmessage,
    currentUser: state.login.loggedUserInfo,
    isLoggedIn: state.login.isLoggedIn,
    demographicsDetails: state.patientDemographics.patientDemographics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    demographics: (newuser) =>
      dispatch(actionCreator.AddDemographicsAsync(newuser)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(Demographics);
