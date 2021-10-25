import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";

const Immunization = (props) => {
  const initialValues = {
    age_category: "",
    vaccine_brand: "",
    dose_detail: "",
    general_vaccine: [
      {
        vaccine_name: "",
        vaccine_date: "",
      },
    ],
    userid: props.currentUser.id,
  };
  const [patientImmunization, setpatientImmunization] = useState(initialValues);
  const validationSchema = Yup.object().shape({
    age_category: Yup.string().required("Required"),
    vaccine_brand: Yup.string().required("Required"),
    dose_detail: Yup.string().required("Required"),
    // general_vaccine: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log(values);
    let gv = values.general_vaccine.map((v) => {
      let temp = {};
      temp.vaccine_name = v.vaccine_name;
      temp.vaccine_date = v.vaccine_date;
      return temp;
    });
    console.log("ss", gv);
    const payload = {
      age_category: values.age_category,
      vaccine_brand: values.vaccine_brand,
      dose_detail: values.dose_detail,
      general_vaccine: gv,
      userid: props.currentUser.id,
    };
    props.immunization(payload);
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
            <div className="card-header">Immunization Details</div>
            <div className="card-body">
              <Form>
                <div className="form-group">
                  <label htmlFor="covid_vaccine">
                    COVID-19 Vaccine Details
                  </label>
                  <div className="row">
                    <div className="col-12 col-md-4">
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
                    <div className="col-12 col-md-4">
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
                    <div className="col-12 col-md-4">
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
                  {/* <Field
                    type="text"
                    className="form-control"
                    placeholder="Please Enter General Vaccine Details"
                    name="general_vaccine"
                  />
                  <div className="error">
                    <ErrorMessage name="general_vaccine" />
                  </div> */}
                  <FieldArray name="general_vaccine">
                    {(fieldArrayProps) => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { general_vaccine } = values;
                      return (
                        <div>
                          {general_vaccine.map((general_vaccine, index) => (
                            <div className="row" key={index}>
                              <div className="col-12 col-md-5">
                                <label htmlFor="">Vaccine Name</label>
                                <Field
                                  type="text"
                                  className="form-control"
                                  name={`general_vaccine[${index}].vaccine_name`}
                                />
                              </div>
                              <div className="col-12 col-md-5">
                                <label htmlFor="">Vaccine Date</label>
                                <Field
                                  type="date"
                                  className="form-control"
                                  name={`general_vaccine[${index}].vaccine_date`}
                                />
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
    //immunizationDetails: state.patientImmunization.patientImmunization,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    immunization: (newuser) =>
      dispatch(actionCreator.AddImmunizationsAsync(newuser)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(Immunization);
