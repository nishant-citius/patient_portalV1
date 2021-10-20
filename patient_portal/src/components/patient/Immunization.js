import { React, useState, userEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Immunization = (props) => {
  const initialValues = {
    age_category: "",
    vaccine_brand: "",
    dose_detail: "",
    general_vaccine: "",
    userid: props.currentUser.id,
  };
  const [patientImmunization, setpatientImmunization] = useState(initialValues);
  const validationSchema = Yup.object().shape({
    age_category: Yup.string().required("Required"),
    vaccine_brand: Yup.string().required("Required"),
    dose_detail: Yup.string().required("Required"),
    general_vaccine: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    const payload = {
      age_category: values.age_category,
      vaccine_brand: values.vaccine_brand,
      dose_detail: values.dose_detail,
      general_vaccine: values.general_vaccine,
      userid: props.currentUser.id,
    };
    props.addUserHandler(payload);
  };
  // const [patientImmunization, setpatientImmunization] = useState({
  //   age_category: "",
  //   vaccine_brand: "",
  //   dose_detail: "",
  //   general_vaccine: "",
  //   userid: props.currentUser.id,
  // });

  // console.log(patientImmunization);

  // const HandleChange = (e) => {
  //   setpatientImmunization({
  //     ...patientImmunization,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let newrecords = { ...patientImmunization };
  //   props.addUserHandler(newrecords);
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <div className="container">
          <div className="card shadow-lg p-10 mb-6 bg-white rounded">
            <div className="card-header">Immunization Details</div>
            <div className="card-body">
              <Form>
                <div className="form-group">
                  <label htmlFor="covid_vaccine">
                    COVID-19 Vaccine Details
                  </label>
                  <div className="row">
                    <div className="col-4">
                      <label htmlFor="age_category">Age Category</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="age_category"
                        id="age_category"
                      >
                        <option value="">Select</option>
                        <option value="18_44">18-44</option>
                        <option value="45">45+</option>
                      </Field>
                      <div className="error">
                        <ErrorMessage name="age_category" />
                      </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor="vaccine_brand">Vaccine Brand</label>
                      <Field
                        type="text"
                        className="form-control"
                        name="vaccine_brand"
                        placeholder="Please Enter Covid Vaccine Details"
                      />
                      <div className="error">
                        <ErrorMessage name="vaccine_brand" />
                      </div>
                    </div>
                    <div className="col-4">
                      <label htmlFor="dose_detail">Dose Details</label>
                      <Field
                        as="select"
                        className="form-control"
                        name="dose_detail"
                        id="dose_detail"
                      >
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </Field>
                      <div className="error">
                        <ErrorMessage name="dose_detail" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group mt-4">
                  <label htmlFor="general_vaccine">
                    Other general Vaccines
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Please Enter General Vaccine Details"
                    name="general_vaccine"
                  />
                  <div className="error">
                    <ErrorMessage name="general_vaccine" />
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
    allusers: state.immunization.Immunizationsreducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserHandler: (newuser) =>
      dispatch(actionCreator.AddImmunizationsAsync(newuser)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(Immunization);
