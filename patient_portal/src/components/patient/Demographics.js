import { React, useState, useEffect } from "react";
// import Card from "../../shared/Card";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { useHistory } from "react-router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../common/common_style.css";

const Demographics = (props) => {
  // let userId = JSON.parse(window.sessionStorage.getItem("userInfo"));
  // setpatientDemographics({
  //   ...patientDemographics,
  //   [userId]: userId.id
  // });

  // const [patientDemographics, setpatientDemographics] = useState({
  //   fName: "",
  //   lName: "",
  //   dob: "",
  //   gender: "",
  //   ethnicity: "",
  //   race: "",
  //   education: "",
  //   employment: "",
  //   address: "",
  //   phone_number: "",
  //   medical_history: "",
  //   family_medical_history: "",
  //   surgeries: "",
  //   insurance_provider: "",

  // });

  // let history = useHistory();
  // const HandleChange = (e) => {
  //   setpatientDemographics({
  //     ...patientDemographics,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const logOutUser = () => {
  //   const session = window.sessionStorage;
  //   session.removeItem("userInfo");
  //   history.push("/");
  // };

  // useEffect(() => {
  //   if (props.statusCode === 201) {
  //     history.push("/immunization");
  //   }
  // });
  const initialValues = {
    fName: "",
    lName: "",
    dob: "",
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
  const [patientDemographics, setpatientDemographics] = useState(initialValues);

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
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let newrecords = { ...patientDemographics };
  //   // props.addUserHandler(newrecords);
  //   console.log(newrecords)
  //   //props.demographics(newrecords);
  // };
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
    // props.getdemographics(payload);
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
                    />
                    <div className="error">
                      <ErrorMessage name="insurance_provider" />
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary m-4">
                    Submit
                  </button>
                </Form>
                <h4 className="text-danger">{props.globalMessage}</h4>
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
    // demographics: state.demographics.demographics,
    // currentUser: state.demographics,
    currentUser: state.login.loggedUserInfo,
    // statusCode: state.demographics.statusCode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    demographics: (newuser) =>
      dispatch(actionCreator.AddDemographicsAsync(newuser)),
      // getdemographics: (userId) => dispatch(actionCreator.GetPatientDemographics(userId))
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(Demographics);
