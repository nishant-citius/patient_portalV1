import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";

const LabReports = (props) => {
  const initialValues = {
    blood_test: "",
    urine_test: "",
    scannings: "",
    xrays: "",
    others: "",
    doc_id: props.currentUser.id,
    patientId: props.currentUser.patientId,
  };
  const [LabReports, setLabReports] = useState(initialValues);
  const validationSchema = Yup.object().shape({
    blood_test: Yup.string().required("Required/Please enter NA"),
    urine_test: Yup.string().required("Required/Please enter NA"),
    scannings: Yup.string().required("Required/Please enter NA"),
    xrays: Yup.string().required("Required/Please enter NA"),
    others: Yup.string().required("Required/Please enter NA"),
   
  });
  const onSubmit = (values) => {
    const payload = {
      blood_test: values.blood_test,
      urine_test: values.urine_test,
      scannings: values.scannings,
      xrays: values.xrays,
      others: values.others,
      
    };
    props.LabReports(payload);
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
              <h5>Patient Daignostics</h5>
            </div>
            <div className="card-body">
              <Form>
                <div className="form-group">
                  {/* <label htmlFor="patient_vitals">
                    Patient Vitals
                  </label><br></br> */}
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="height">Blod test </label>
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
                      <label htmlFor="weight">Urine test</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="weight"
                      />
                      <div className="error">
                        <ErrorMessage name="height" />
                      </div>
                      
                    </div>
                    <div className="col-4">
                      <label htmlFor="blood_pressure">Scaninings</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="blood_pressure"
                      />
                      <div className="error">
                        <ErrorMessage name="height" />
                      </div>
                      
                    </div>
                    <div className="col-4">
                      <label htmlFor="temperature">X-rays</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="temperature"
                      />
                      <div className="error">
                        <ErrorMessage name="height" />
                      </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor="weight">other test</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="weight"
                      />
                      <div className="error">
                        <ErrorMessage name="height" />
                      </div>
                    </div>
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
export default hof(LabReports);
