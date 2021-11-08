import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { adminService } from "../../services/register_user_service";
import { useHistory } from "react-router";

const DietPlan = (props) => {
  const [patientId, setPatientId] = useState(0);
  const [dietAdded, setDietAdded] = useState(false);
  const [patientDiet, addPatientDiet] = useState({});
  let savedValues = {};
  const history = useHistory();

  useEffect(() => {
    setPatientId(props.patientId.patintId);
    if (patientId) {
      getPatientDiet(patientId);
    }
  }, [props.patientId.patientId, patientId]);

  function getPatientDiet(patientId) {
    adminService.getPatientDiet(patientId).then(
      (response) => {
        if (response.data.length > 0) {
          addPatientDiet(response.data);
          setDietAdded(true);
          props.flashNotification({
            message: "Patient Diet Plan Added Successfully...!",
            type: "success",
          });
        }
      },
      (error) => {
        return;
      }
    );
  }

  function updatePatientDiet(patientId, newData) {
    adminService.updatePatientDiet(patientId, newData).then(
      (response) => {
        if (response.status === 201) {
          props.flashNotification({
            message: "Patient Diet Plan Updated Successfully...!",
            type: "success",
          });
        }
      },
      (error) => {}
    );
  }

  const finishAppointment = () => {
    let appointmentData = props.apptDetails,
      newData = {
        ...appointmentData,
        status: "completed",
      };

    adminService.editAppointment(appointmentData.id, newData).then(
      (response) => {
        if (response.status === 200) {
          //alert("Appointment Completed");
          props.flashNotification({
            message: "Appointment Completed Successfully...!",
            type: "success",
          });
          history.push("/physician_appointments");
        }
      },
      (error) => {}
    );
  };

  const initialValues = {
    earlymorning: "",
    breakfast: "",
    mid_morning: "",
    lunch: "",
    evening: "",
    dinner: "",
    post_dinner_activity: "",
    bedtime: "",
    doc_id: props.currentUser.id,
    patientId: Number(props.patientId.patintId),
  };

  if (dietAdded) {
    savedValues = {
      earlymorning: patientDiet[0].earlymorning,
      breakfast: patientDiet[0].breakfast,
      mid_morning: patientDiet[0].mid_morning,
      lunch: patientDiet[0].lunch,
      evening: patientDiet[0].evening,
      dinner: patientDiet[0].dinner,
      post_dinner_activity: patientDiet[0].post_dinner_activity,
      bedtime: patientDiet[0].bedtime,
    };
  }

  const validationSchema = Yup.object().shape({
    earlymorning: Yup.string().required("Required"),
    breakfast: Yup.string().required("Required"),
    mid_morning: Yup.string().required("Required"),
    lunch: Yup.string().required("Required"),
    evening: Yup.string().required("Required"),
    dinner: Yup.string().required("Required"),
    post_dinner_activity: Yup.string().required("Required"),
    bedtime: Yup.string().required("Required"),
  });

  const onSubmit = (values, actions) => {
    const payload = {
      earlymorning: values.earlymorning,
      breakfast: values.breakfast,
      mid_morning: values.mid_morning,
      lunch: values.lunch,
      evening: values.evening,
      dinner: values.dinner,
      post_dinner_activity: values.post_dinner_activity,
      bedtime: values.bedtime,
      physicianId: props.currentUser.id,
      patientId: patientId,
    };
    if (dietAdded) {
      updatePatientDiet(patientDiet[0].id, payload);
      props.flashNotification({
        message: "Patient Diet Plan Updated Successfully...!",
        type: "success",
      });
    } else {
      props.dietplan(payload);
      props.flashNotification({
        message: "Patient Diet Plan Added Successfully...!",
        type: "success",
      });
    }
  };

  return (
    <>
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
                <h5 style={{ color: "#198754" }}>
                  Patient DietPlan Details(Day Wise)
                </h5>
              </div>
              <div className="card-body">
                <Form>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-4">
                        <label htmlFor="earlymorning">
                          <h6 style={{ color: "#3f51b5" }}>Early Morning</h6>
                          (6:00 A.M-7:00 A.M)
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          name="earlymorning"
                        />
                        <div className="error">
                          <ErrorMessage name="earlymorning" />
                        </div>
                        <br></br>
                      </div>
                      <div className="col-4">
                        <label htmlFor="breakfast">
                          <h6 style={{ color: "#3f51b5" }}> Break fast</h6>(8:00
                          A.M-9:00 A.M)
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          name="breakfast"
                        />

                        <div className="error">
                          <ErrorMessage name="breakfast" />
                        </div>
                        <br></br>
                      </div>
                      <div className="col-4">
                        <label htmlFor="mid_morning">
                          <h6 style={{ color: "#3f51b5" }}> Mid-Morning</h6>
                          (10:30 A.M-11:00 A.M)
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          name="mid_morning"
                        />
                        <div className="error">
                          <ErrorMessage name="mid_morning" />
                        </div>
                        <br></br>
                      </div>
                      <div className="col-4">
                        <label htmlFor="lunch">
                          <h6 style={{ color: "#3f51b5" }}>Lunch</h6>(10:30
                          A.M-11:00 A.M)
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          name="lunch"
                        />
                        <div className="error">
                          <ErrorMessage name="lunch" />
                        </div>
                        <br></br>
                      </div>
                      <div className="col-4">
                        <label htmlFor="evening">
                          <h6 style={{ color: "#3f51b5" }}>Evening</h6>(4:00 P.M
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          name="evening"
                        />
                        <div className="error">
                          <ErrorMessage name="evening" />
                        </div>
                        <br></br>
                      </div>
                      <div className="col-4">
                        <label htmlFor="dinner">
                          <h6 style={{ color: "#3f51b5" }}> Dinner</h6>(10:30
                          A.M-11:00 A.M)
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="dinner"
                          name="dinner"
                        />
                        <div className="error">
                          <ErrorMessage name="dinner" />
                        </div>
                        <br></br>
                      </div>
                      <div className="col-4">
                        <label htmlFor="post_dinner_activity">
                          <h6 style={{ color: "#3f51b5" }}>
                            {" "}
                            Post-Dinner-Activity{" "}
                          </h6>
                          (10:30 A.M-11:00 A.M)
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="post_dinner_activity"
                          name="post_dinner_activity"
                        />
                        <div className="error">
                          <ErrorMessage name="post_dinner_activity" />
                        </div>
                        <br></br>
                      </div>
                      <div className="col-4">
                        <label htmlFor="bedtime">
                          <h6 style={{ color: "#3f51b5" }}>Bed-Time </h6>(10:00
                          P.M-11:00 P.M)
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          placeholder="dinner"
                          name="bedtime"
                        />
                        <div className="error">
                          <ErrorMessage name="bedtime" />
                        </div>
                        <br></br>
                      </div>
                    </div>
                  </div>
                  {dietAdded ? (
                    <button type="submit" className="btn btn-primary mt-3">
                      Update Diet
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
      <button
        onClick={() => finishAppointment()}
        className="btn btn-primary mt-3"
      >
        Finish Appointment
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
    dietplans: state.dietplan.dietplan,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dietplan: (newuser) => dispatch(actionCreator.AddDietPlanAsync(newuser)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(DietPlan);
