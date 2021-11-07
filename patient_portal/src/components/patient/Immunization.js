import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import "../admin/admin.css";
import {
  makeStyles,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "mui";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "80vw",
  },
}));

const Immunization = (props) => {
  const classes = useStyles();
  const [isAvailable, setIsAvailable] = useState(false);
  useEffect(() => {
    if (props.isLoggedIn) {
      if (props.immunizationDetails) {
        setIsAvailable(true);
      }
    }
  }, []);
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

  const validationSchema = Yup.object().shape({
    age_category: Yup.string().required("Required"),
    vaccine_brand: Yup.string().required("Required"),
    dose_detail: Yup.string().required("Required"),
    // general_vaccine: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    let gv = values.general_vaccine.map((v) => {
      let temp = {};
      temp.vaccine_name = v.vaccine_name;
      temp.vaccine_date = v.vaccine_date;
      return temp;
    });

    const payload = {
      first_name: props.currentUser.fName,
      last_name: props.currentUser.lName,
      age_category: values.age_category,
      vaccine_brand: values.vaccine_brand,
      dose_detail: values.dose_detail,
      general_vaccine: gv,
      id: props.currentUser.id,
    };
    props.immunization(payload);
    props.flashNotification({
      message: "Immunization added...",
      type: "success",
    });
    props.getPatientImmunization(props.currentUser.id);
    history.push("/medic_allergy");
  };

  let history = useHistory();

  // useEffect(() => {
  //   if (props.statusCode === 201) {
  //     history.push("/medic_allergy");
  //   }
  // });
  return (
    <>
      {isAvailable ? (
        <div className="container">
          <div className="card shadow-lg p-10 mb-6 bg-white rounded">
            <div className="card-header text-center">
              <h4 className="text-success">Immunization Details</h4>
            </div>
            <div className="card-body text-center">
              <h5 className="text-primary">Covid Vaccine Details</h5>

              <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                <Table>
                  <TableHead className="tablehead">
                    <TableRow>
                      <TableCell className="tableCell">Age Category</TableCell>
                      <TableCell className="tableCell">Vaccine Brand</TableCell>
                      <TableCell className="tableCell">Dose Details</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        {props.immunizationDetails.age_category}
                      </TableCell>
                      <TableCell>
                        {props.immunizationDetails.vaccine_brand}
                      </TableCell>
                      <TableCell>
                        {props.immunizationDetails.dose_detail}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <br></br>

              <h5 className="text-primary">General Vaccine Details</h5>
              <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                <Table>
                  <TableHead className="tablehead">
                    <TableRow>
                      <TableCell className="tableCell">Sr.No</TableCell>
                      <TableCell className="tableCell">Vaccine Name</TableCell>
                      <TableCell className="tableCell">Vaccine Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.immunizationDetails.general_vaccine.map(function (
                      item,
                      index
                    ) {
                      return (
                        <TableRow key={index}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{item.vaccine_name}</TableCell>
                          <TableCell>{item.vaccine_date}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
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
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
    immunizationDetails: state.patientImmunization.patientImmunization,
    isLoggedIn: state.login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    immunization: (newuser) =>
      dispatch(actionCreator.AddImmunizationsAsync(newuser)),
    getPatientImmunization: (userId) =>
      dispatch(actionCreator.GetPatientImmunization(userId)),
    updateImmunization: (userId, data) =>
      dispatch(actionCreator.UpdatePatientImmunization(userId, data)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(Immunization);
