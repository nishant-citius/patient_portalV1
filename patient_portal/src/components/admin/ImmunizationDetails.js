import React from "react";
import { connect } from "react-redux";
import * as actioncreators from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import "./admin.css";

export class PatientList extends React.Component {
  savedValues = {};
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      rowPerPage: 6,
      isAvailable: false,
    };
  }

  componentDidMount() {
    if (this.props.fromAdmin) {
      this.props.getPatientsImmunization(this.props.patientId.patintId);
    } else {
      this.props.getPatientsImmunization(this.props.patientId);
    }
  }

  componentDidUpdate() {
    if (this.props.pImmunnization) {
      if (Object.keys(this.props.pImmunnization).length === 0) {
      } else {
        if (this.state.isAvailable) {
          this.getSavedValues();
          return;
        } else {
          this.setState({
            isAvailable: true,
          });
        }
      }
    }
  }

  generalVaccines(_arr) {
    let vaccinesArr = _arr.map((_vac) => _vac);
    return vaccinesArr;
  }

  getSavedValues() {
    let savedValues = {
      age_category: this.props.pImmunnization.age_category,
      vaccine_brand: this.props.pImmunnization.vaccine_brand,
      dose_detail: this.props.pImmunnization.dose_detail,
      general_vaccine: this.generalVaccines(
        this.props.pImmunnization.general_vaccine
      ),
      userid: this.props.currentUser.id,
    };
    return savedValues;
  }

  onPageChange = (event, nextPage) => {
    this.setState({
      ...this.state,
      page: nextPage,
    });
  };

  onChangeRowsPerPage = (event) => {
    this.setState({
      ...this.state,
      rowPerPage: event.target.value,
    });
  };

  initialValues = {
    age_category: "",
    vaccine_brand: "",
    dose_detail: "",
    general_vaccine: [
      {
        vaccine_name: "",
        vaccine_date: "",
      },
    ],
    userid: this.props.currentUser.id,
  };

  validationSchema = Yup.object().shape({
    age_category: Yup.string().required("Required"),
    vaccine_brand: Yup.string().required("Required"),
    dose_detail: Yup.string().required("Required"),
    // general_vaccine: Yup.string().required("Required"),
  });

  onSubmit = (values) => {
    let gv = values.general_vaccine.map((v) => {
      let temp = {};
      temp.vaccine_name = v.vaccine_name;
      temp.vaccine_date = v.vaccine_date;
      return temp;
    });

    const payload = {
      first_name: this.props.currentUser.fName,
      last_name: this.props.currentUser.lName,
      age_category: values.age_category,
      vaccine_brand: values.vaccine_brand,
      dose_detail: values.dose_detail,
      general_vaccine: gv,
      id: this.props.currentUser.id,
    };

    if (this.state.isAvailable) {
      this.props.updateImmunization(this.props.pImmunnization.id, payload);
       this.props.flashNotification({
         message: "Immunization Updated Successfully...!",
         type: "success",
       });
    } else {
      this.props.immunization(payload);
        this.props.flashNotification({
          message: "Immunization Updated Successfully...!",
          type: "success",
        });
    }
  };

  render() {
    if (this.state.isAvailable) this.savedValues = this.getSavedValues();
    return (
      <>
        <Formik
          initialValues={this.savedValues || this.initialValues}
          validationSchema={this.validationSchema}
          onSubmit={this.onSubmit}
          enableReinitialize
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
                      <FieldArray name="general_vaccine">
                        {(fieldArrayProps) => {
                          const { push, remove, form } = fieldArrayProps;
                          const { values } = form;
                          const { general_vaccine } = values;

                          return (
                            <div>
                              {general_vaccine &&
                                general_vaccine.map(
                                  (general_vaccine, index) => (
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
                                  )
                                )}
                            </div>
                          );
                        }}
                      </FieldArray>
                    </div>
                    {this.state.isAvailable ? (
                      <button type="submit" className="btn btn-primary mt-3">
                        Update Details
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
      </>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    immunizationData: rootReducer.immunizations.immunizations,
    currentUser: rootReducer.login.loggedUserInfo,
    pImmunnization: rootReducer.patientImmunization.patientImmunization,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPatientsImmunization: (userId) =>
      dispatch(actioncreators.GetPatientImmunization(userId)),
    updateImmunization: (userId, data) =>
      dispatch(actioncreators.UpdatePatientImmunization(userId, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
