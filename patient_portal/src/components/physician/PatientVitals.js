import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";

const Vitals = (props) => {
  const initialValues = {
    height: "",
    weight: "",
    blood_pressure: "",
    temperature: "",
    pulse: "",
    respiration: "",
    oxigen_saturation: "",
    userid: props.currentUser.id,
  };
  const [patientVitals, setpatientVitals] = useState(initialValues);
  const validationSchema = Yup.object().shape({
    height: Yup.string().required("Required"),
    weight: Yup.string().required("Required"),
    blood_pressure: Yup.string().required("Required"),
    temperature: Yup.string().required("Required"),
    pulse: Yup.string().required("Required"),
    respiration: Yup.string().required("Required"),
    oxigen_saturation: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    const payload = {
      height: values.height,
      weight: values.weight,
      blood_pressure: values.blood_pressure,
      temperature: values.temperature,
      pulse: values.pulse,
      respiration: values.respiration,
      oxigen_saturation: values.oxigen_saturation,
      userid: props.currentUser.id,
    };
    props.vitals(payload);
  };

  let history = useHistory();
  useEffect(() => {
    if (props.statusCode === 201) {
      history.push("/patient");
    }
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <div className="container">
          <div className="card shadow-lg p-10 mb-6 bg-white rounded">
            <div className="card-header">
              <h5>Patient Vitals Details</h5>
            </div>
            <div className="card-body">
              <Form>
                <div className="form-group">
                  {/* <label htmlFor="patient_vitals">
                    Patient Vitals
                  </label><br></br> */}
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="height">Patient Height</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="height"
                      />
                      <div className="error">
                        <ErrorMessage name="height" />
                      </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor="weight">Patient weight</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="weight"
                      />
                      <div className="error">
                        <ErrorMessage name="weight" />
                      </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor="blood_pressure">Blood Pressure</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="blood_pressure"
                      />
                      <div className="error">
                        <ErrorMessage name="blood_pressure" />
                      </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor="temperature">Temperature</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="temperature"
                      />
                      <div className="error">
                        <ErrorMessage name="temperature" />
                      </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor="pulse">Pulse</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="pulse"
                      />
                      <div className="error">
                        <ErrorMessage name="pulse" />
                      </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor="oxigen_saturation">
                        Oxygen Saturation
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        placeholder="respiration"
                        name="oxigen_saturation"
                      />
                      <div className="error">
                        <ErrorMessage name="oxigen_saturation" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-4">
                  <label htmlFor="respiration">respiration</label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="respiration"
                    name="respiration"
                  />
                  <div className="error">
                    <ErrorMessage name="respiration" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
    allusers: state.vitals.Vitalsreducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    vitals: (newuser) => dispatch(actionCreator.AddVitalsAsync(newuser)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(Vitals);
