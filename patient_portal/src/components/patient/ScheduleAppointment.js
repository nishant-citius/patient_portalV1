import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

function ScheduleAppointment(props) {
  const initialValues = {
    fName: props.currentUser.fName,
    lName: props.currentUser.lName,
    dob: props.currentUser.dob,
    mobile_no: "",
    doc_name: "",
    doc_spl: "",
    appointment_title: "",
    appointment_time: "",
    appointment_desc: "",
    vistInfo: "",
    userid: props.currentUser.id,
  };
  const validationSchema = Yup.object().shape({
    mobile_no: Yup.string()
      .required("Required")
      .min(10, "Phone number required 10 digit")
      .max(12, "Phone number required 12 digit"),
    doc_name: Yup.string().required("Required"),
    doc_spl: Yup.string().required("Required"),
    appointment_title: Yup.string().required("Required"),
    appointment_time: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    const payload = {
      fName: props.currentUser.fName,
      lName: props.currentUser.lName,
      dob: props.currentUser.dob,
      mobile_no: values.mobile_no,
      doc_name: values.doc_name,
      doc_spl: values.doc_spl,
      appointment_title: values.appointment_title,
      appointment_time: values.appointment_time,
      appointment_desc: values.appointment_desc,
      vistInfo: values.vistInfo,
      patientId: props.currentUser.id,
    };
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <div className="container">
          <div className="card shadow-lg p-10 mb-6 bg-white rounded">
            <div className="card-header text-center">Schedule Appointment</div>
            <div className="card-body">
              <Form>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <label htmlFor="age_category">First Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="fName"
                      disabled
                    />
                    <div className="error">
                      <ErrorMessage name="fName" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="age_category">Last Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="lName"
                      disabled
                    />
                    <div className="error">
                      <ErrorMessage name="lName" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="age_category">Date of Birth</label>
                    <Field
                      type="date"
                      className="form-control"
                      name="dob"
                      disabled
                    />
                    <div className="error">
                      <ErrorMessage name="dob" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="age_category">Phone Number</label>
                    <Field
                      type="number"
                      className="form-control"
                      name="mobile_no"
                    />
                    <div className="error">
                      <ErrorMessage name="mobile_no" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="age_category">Doctor's</label>
                    <Field
                      as="select"
                      type="number"
                      className="form-control"
                      name="doc_name"
                    >
                      <option value="">Select</option>
                      <option value="">Doc1</option>
                      <option value="">Doc2</option>
                    </Field>
                    <div className="error">
                      <ErrorMessage name="doc_name" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="age_category">Speciality</label>
                    <Field
                      as="select"
                      type="number"
                      className="form-control"
                      name="doc_spl"
                    >
                      <option value="">Select</option>
                      <option value="">Spc1</option>
                      <option value="">Spc2</option>
                    </Field>
                    <div className="error">
                      <ErrorMessage name="doc_spl" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="age_category">Appointment TItle</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="appointment_title"
                    />
                    <div className="error">
                      <ErrorMessage name="appointment_title" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="age_category">Appointment Time</label>
                    <Field
                      type="text"
                      className="form-control"
                      name="appointment_time"
                    />
                    <div className="error">
                      <ErrorMessage name="appointment_time" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label htmlFor="age_category">
                      Appointment Description
                    </label>
                    <Field
                      as="textarea"
                      className="form-control"
                      name="appointment_desc"
                    />
                    <div className="error">
                      <ErrorMessage name="appointment_desc" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 pt-1">
                    <label htmlFor="age_category">First Time Visit?</label>
                    <br />
                    <div class="form-check form-check-inline mt-3">
                      <Field
                        class="form-check-input"
                        type="radio"
                        name="vistInfo"
                        id="inlineRadio1"
                        value="yes"
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        Yes
                      </label>
                    </div>
                    <div class="form-check form-check-inline mt-3">
                      <Field
                        class="form-check-input"
                        type="radio"
                        name="vistInfo"
                        id="inlineRadio2"
                        value="no"
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12 col-md-4 text-center">
                      <button type="submit" className="btn btn-primary mt-3">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(ScheduleAppointment);
