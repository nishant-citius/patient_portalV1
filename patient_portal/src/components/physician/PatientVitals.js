import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { adminService } from "../../services/register_user_service";

const Vitals = (props) => {
  const [patientId, setPatientId] = useState(0);
  const [patientVitals, setPatientVitals] = useState({});
  const [available, setAvailable] = useState(false);

  let savedValues = {};

  useEffect(() => {
    setPatientId(props.patientId.patintId);
    if (patientId) {
      getPatientVitals(patientId);
    }
  }, [props.patientId.patientId, patientId]);

  function getPatientVitals(patientId) {
    adminService.getPatientVitals(patientId).then(
      (response) => {
        if (response.data.length > 0) {
          setPatientVitals(response.data);
          setAvailable(true);
        }
      },
      (error) => {
        return;
      }
    );
  }

  function updatePatientVitals(patientId, newData) {
    adminService.updatePatientVitals(patientId, newData).then(
      (response) => {
        if (response.status === 200) {
          // alert("Patient Vitals Updated Successfully...");
          props.flashNotification({
            message: "Patient Vitals Updated Successfully...!",
            type: "success",
          });
        }
      },
      (error) => {}
    );
  }

  const initialValues = {
    patient: "",
    height: "",
    weight: "",
    blood_pressure: "",
    temperature: "",
    pulse: "",
    respiration: "",
    oxigen_saturation: "",
    userid: props.currentUser.id,
  };

  if (available) {
    savedValues = {
      height: patientVitals[0].height,
      weight: patientVitals[0].weight,
      blood_pressure: patientVitals[0].blood_pressure,
      temperature: patientVitals[0].temperature,
      pulse: patientVitals[0].pulse,
      respiration: patientVitals[0].respiration,
      oxigen_saturation: patientVitals[0].oxigen_saturation,
      userid: props.currentUser.id,
    };
  }

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
      physicianId: props.currentUser.id,
      patientId: patientId,
    };
    if (available) {
      updatePatientVitals(patientVitals[0].id, payload);
      props.flashNotification({
        message: "Patient Vitals Updated Successfully...!",
        type: "success",
      });
    } else {
      props.vitals(payload);
      props.flashNotification({
        message: "Patient Vitals Added Successfully...!",
        type: "success",
      });
    }
  };

  return (
    <Formik
      initialValues={savedValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
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
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="height">Patient Height (cm)*</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="height"
                        id="height"
                      />
                      <div className="error">
                        <ErrorMessage name="height" />
                      </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor="weight">Weight (Kg)*</label>
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
                      <label htmlFor="blood_pressure">
                        Blood Pressure (mm/hg)*
                      </label>
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
                      <label htmlFor="temperature">Temperature (C)*</label>
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
                      <label htmlFor="pulse">Pulse (/min)*</label>
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
                        Oxygen Saturation (%)
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
                  <label htmlFor="respiration">Respiration (/min)*</label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Respiration"
                    name="respiration"
                  />
                  <div className="error">
                    <ErrorMessage name="respiration" />
                  </div>
                </div>
                {available ? (
                  <button type="submit" className="btn btn-primary mt-3">
                    Update Patient Vitals
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary mt-3">
                    Submit
                  </button>
                )}
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
    patientvitals: state.getPatientvitals.getPatientvitals,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    vitals: (newuser) => dispatch(actionCreator.AddVitalsAsync(newuser)),
    getPatientVitals: (patientId) =>
      dispatch(actionCreator.GetVitals(patientId)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(Vitals);
