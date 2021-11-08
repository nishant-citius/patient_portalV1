import React from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
//import "./admin.css";
import { adminService } from "../../services/register_user_service";
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
import { TrainRounded } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "80vw",
  },
  tablehead: {
    background: "#b7c1f7",
  },
}));

export class PhyMedicationAllergies extends React.Component {
  savedValues = {};

  constructor(props) {
    super(props);

    this.state = {
      isAvailable: false,
      medicationList: [],
    };
  }

  componentDidMount() {
    this.props.fromAdmin
      ? this.props.getMedicationAllergies(this.props.patientId)
      : this.props.getMedicationAllergies(this.props.patientId.patintId);
    this.patientMedication();
  }

  componentDidUpdate() {
    if (this.props.mediAllergyDetails) {
      if (Object.keys(this.props.mediAllergyDetails).length === 0) {
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

  patientMedication() {
    adminService.getMedication().then(
      (response) => {
        this.setState({
          medicationList: response.data,
        });
      },
      (error) => {
        return;
      }
    );
  }

  currentMedication(_arr) {
    let cMadicationArr = _arr.map((_cmed) => _cmed);
    return cMadicationArr;
  }
  otcMedication(_arr) {
    let otcMedicationArr = _arr.map((_otcmed) => _otcmed);
    return otcMedicationArr;
  }
  pastMedication(_arr) {
    let pastMedicationArr = _arr.map((_pastmed) => _pastmed);
    return pastMedicationArr;
  }
  allergyMedication(_arr) {
    let allergyMedicationArr = _arr.map((_alrgmed) => _alrgmed);
    return allergyMedicationArr;
  }

  generalVaccines(_arr) {
    let vaccinesArr = _arr.map((_vac) => _vac);
    return vaccinesArr;
  }

  getSavedValues() {
    let savedValues = {
      current_medication: this.currentMedication(
        this.props.mediAllergyDetails.current_medication
      ),
      otc_medication: this.otcMedication(
        this.props.mediAllergyDetails.otc_medication
      ),
      past_medication: this.pastMedication(
        this.props.mediAllergyDetails.past_medication
      ),
      allergies: this.allergyMedication(
        this.props.mediAllergyDetails.allergies
      ),
      userid: this.props.patientId,
      id: this.props.patientId,
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
    id: "",
    userId: "",
    current_medication: [
      {
        medicineName: "",
        dosage: "",
        directionstoconsume: "",
        frequency: "",
        physicianName: "",
        purpose: "",
        startDate: "",
        endDate: "",
      },
    ],
  };

  validationSchema = Yup.object().shape({});

  onSubmit = (values) => {
    let cm = values.current_medication.map((v) => {
      let temp = {};
      temp.medicineName = v.medicineName;
      temp.dosage = v.dosage;
      temp.directionstoconsume = v.directionstoconsume;
      temp.physicianName = v.physicianName;
      temp.startDate = v.startDate;
      temp.endDate = v.endDate;
      return temp;
    });
    let al = values.allergies.map((v) => {
      let temp = {};
      temp.allergyName = v.allergyName;
      temp.symptomsofAllergy = v.symptomsofAllergy;
      temp.drugAllergy = v.drugAllergy;
      return temp;
    });
    const payload = {
      userid: this.props.patientId.patintId,
      current_medication: cm,
      otc_medication: [...this.props.mediAllergyDetails.otc_medication],
      past_medication: [
        ...this.props.mediAllergyDetails.past_medication,
        ...this.props.mediAllergyDetails.current_medication,
      ],
      allergies: [...this.props.mediAllergyDetails.allergies],
    };

    if (this.state.isAvailable) {
      this.props.updateMedication_allergies(
        this.props.mediAllergyDetails.id,
        payload
      );
      this.props.flashNotification({
        message: "Medication & Allergies Updated Successfully...!",
        type: "success",
      });
    } else {
      this.props.medication_allergies(payload);
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
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="card shadow-lg p-10 mb-6 bg-white rounded">
                    <div className="card-header text-center ">
                      Medication and Allergies
                    </div>
                    <div className="card-body">
                      <Form>
                        <div className="row mt-2">
                          <div className="col-12">
                            <hr />
                            <h5 className="text-center">Current Medication</h5>
                            <hr />
                            <FieldArray name="current_medication">
                              {(fieldArrayProps) => {
                                const { push, remove, form } = fieldArrayProps;
                                const { values } = form;
                                const { current_medication } = values;
                                return (
                                  <div>
                                    {current_medication &&
                                      current_medication.map(
                                        (current_medication, index) => (
                                          <div key={index}>
                                            <div className="row">
                                              <div className="col-12 col-md-6">
                                                <label htmlFor="user name">
                                                  Medicine Name
                                                </label>
                                                <Field
                                                  as="select"
                                                  className="form-control"
                                                  name={`current_medication[${index}].medicineName`}
                                                >
                                                  <option value="">
                                                    Select
                                                  </option>
                                                  {this.state.medicationList.map(
                                                    (medicine, index) => (
                                                      <option
                                                        value={
                                                          medicine.DrugName +
                                                          medicine.Strength
                                                        }
                                                        key={index}
                                                      >
                                                        {medicine.DrugName +
                                                          medicine.Strength}
                                                      </option>
                                                    )
                                                  )}
                                                </Field>
                                              </div>
                                              <div className="col-12 col-md-3">
                                                <div className="form-group">
                                                  <label htmlFor="user name">
                                                    Dosages
                                                  </label>
                                                  <Field
                                                    type="text"
                                                    className="form-control"
                                                    name={`current_medication[${index}].dosage`}
                                                    placeholder="Please enter dosages"
                                                  />
                                                  <div className="error">
                                                    <ErrorMessage name="current_medication.dosage" />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-3">
                                                <div className="form-group">
                                                  <label htmlFor="user name">
                                                    Direction to consume dosage
                                                  </label>
                                                  <Field
                                                    type="text"
                                                    className="form-control"
                                                    name={`current_medication[${index}].directionstoconsume`}
                                                    placeholder="Please enter medicine name"
                                                  />
                                                  <div className="error">
                                                    <ErrorMessage name="current_medication.directionstoconsume" />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-3">
                                                <div className="form-group">
                                                  <label htmlFor="user name">
                                                    Physician Name
                                                  </label>
                                                  <Field
                                                    type="text"
                                                    className="form-control"
                                                    name={`current_medication[${index}].physicianName`}
                                                    placeholder="Please enter Physician Name"
                                                  />
                                                  <div className="error">
                                                    <ErrorMessage name="current_medication.physicianName" />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-3">
                                                <div className="form-group">
                                                  <label htmlFor="user name">
                                                    Start Date
                                                  </label>
                                                  <Field
                                                    type="date"
                                                    className="form-control"
                                                    name={`current_medication[${index}].startDate`}
                                                    placeholder="Please enter frequency"
                                                  />
                                                  <div className="error">
                                                    <ErrorMessage name="current_medication.startDate" />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="col-12 col-md-3">
                                                <div className="form-group">
                                                  <label htmlFor="user name">
                                                    End Date
                                                  </label>
                                                  <Field
                                                    type="date"
                                                    className="form-control"
                                                    name={`current_medication[${index}].endDate`}
                                                    placeholder="Please enter frequency"
                                                  />
                                                  <div className="error">
                                                    <ErrorMessage name="current_medication.endDate" />
                                                  </div>
                                                </div>
                                              </div>
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
                        </div>
                        <div className="col-12 text-center mt-5">
                          <button className="btn btn-primary" type="submit">
                            Submit
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
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
    globalMessage: rootReducer.demographics.globalmessage,
    mediAllergyDetails:
      rootReducer.patientMedicationAllergy.patientMedicationAllergy,
    currentUser: rootReducer.login.loggedUserInfo,
    isLoggedIn: rootReducer.login.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    getMedicationAllergies: (userId) =>
      dispatch(actionCreator.GetMedicationAllergies(userId)),
    medication_allergies: (newuser) =>
      dispatch(actionCreator.AddMedicationAndAllergiesAsync(newuser)),
    updateMedication_allergies: (userId, data) =>
      dispatch(actionCreator.UpdateMedicationAndAllergies(userId, data)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(PhyMedicationAllergies);
