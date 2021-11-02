import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { adminService } from "../../services/register_user_service";

function ScheduleAppointment(props) {
  const [doctorsList, setDoctorsList] = useState([]);
  const [doctorName, setDcotorName] = useState("");
  const [specialities, setSpecialities] = useState([]);
  const [dayAppointments, setDayAppointments] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    if (props.isLoggedIn) {
      // setDoctorsList(props.physiciandata);
      doctorSpeciality();
    }
  }, []);

  const initialValues = {
    fName: props.currentUser.fName,
    lName: props.currentUser.lName,
    dob: props.currentUser.dob,
    mobile_no: "",
    doc_name: "",
    appointment_title: "",
    appointment_start_time: "",
    appointment_end_time: "",
    appointmentDate: "",
    appointment_desc: "",
    userid: props.currentUser.id,
  };

  function doctorSpeciality() {
    adminService.getDoctorSpeciality().then(
      (response) => {
        setSpecialities(response.data);
      },
      (error) => {
        return;
      }
    );
  }

  function getDoc() {
    let speciality = document.getElementById("spl").value;
    if (!speciality) speciality = "cancer";

    let arr = props.physiciandata.filter((item) => {
      if (item.speciality.toLowerCase() === speciality.toLowerCase()) {
        return item;
      }
    });
    setDoctorsList(arr);
    return arr;
  }

  function getAppointmentsForDate(pid, _date) {
    adminService.getAppointmentsForDate(pid, _date).then(
      (response) => {
        setDayAppointments(response.data);
      },
      (error) => {
        return;
      }
    );
  }

  const validationSchema = Yup.object().shape({
    mobile_no: Yup.string()
      .required("Required")
      .min(10, "Phone number required 10 digit")
      .max(12, "Phone number required 12 digit"),
    doc_name: Yup.string().required("Required"),
    appointmentDate: Yup.string().required("Required"),
    appointment_title: Yup.string().required("Required"),
    appointment_start_time: Yup.string().required("Required"),
    appointment_end_time: Yup.string().required("Required"),
  });

  const onSubmit = (values, actions) => {
    const payload = {
      fName: props.currentUser.fName,
      lName: props.currentUser.lName,
      dob: props.currentUser.dob,
      mobile_no: values.mobile_no,
      doc_id: Number(values.doc_name),
      doc_name: doctorName,
      appointment_title: values.appointment_title,
      appointment_start_time: values.appointment_start_time,
      appointment_end_time: values.appointment_end_time,
      appointmentDate: values.appointmentDate,
      appointment_desc: values.appointment_desc,
      createdBy: props.currentUser.fName + props.currentUser.lName,
      createdDate: new Date(),
      // vistInfo: values.vistInfo,
      patientId: props.currentUser.id,
      status: "Pending",
    };
    scheduleAppointmentToday(payload);
    actions.resetForm();
  };

  function getAppts() {
    let _date = document.getElementById("appointment-date").value;
    setDate(_date);
    // getAppointmentsForDate(props.currentUser.id, _date);
  }

  function scheduleAppointmentToday(appointmentData) {
    adminService.addNewAppointment(appointmentData).then(
      (response) => {
        if (response.status === 201) {
          props.flashNotification({
            message: "Appointment Scheduled Succssfully...!",
            type: "success",
          });
        }
      },
      (error) => {
        props.flashNotification({
          message: "Appointment Can't be scheduled..!",
          type: "error",
        });
      }
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(props) => (
        <div className="container">
          <div className="card shadow-lg p-10 mb-6 bg-white rounded">
            <div className="card-header text-center">Schedule Appointment</div>
            <div className="card-body">
              <Form>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <label>First Name</label>
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
                    <label>Last Name</label>
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
                    <label>Date of Birth</label>
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
                    <label>Phone Number</label>
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
                    <label>Speciality</label>
                    <Field
                      as="select"
                      className="form-control"
                      id="spl"
                      name="doc_spl"
                      onChange={getDoc}
                    >
                      <option value="">Select</option>
                      {specialities.map((specility, index) => (
                        <option value={specility.value} key={index}>
                          {specility.name}
                        </option>
                      ))}
                    </Field>
                    <div className="error">
                      <ErrorMessage name="doc_spl" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label>Doctor's</label>
                    <Field as="select" className="form-control" name="doc_name">
                      <option value="">Select</option>
                      {doctorsList.map((doctor) => (
                        <option value={doctor.id} key={doctor.id}>
                          {setDcotorName(`${doctor.fName} ${doctor.lName}`)}
                          {`${doctor.fName} ${doctor.lName}`}
                        </option>
                      ))}
                    </Field>
                    <div className="error">
                      <ErrorMessage name="doc_name" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label>Appointment Title</label>
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
                    <label>Appointment Date </label>
                    <Field
                      type="date"
                      className="form-control"
                      name="appointmentDate"
                      id="appointment-date"
                      // value={date}
                      // onChange={getAppts}
                    />
                    <div className="error">
                      <ErrorMessage name="appointmentDate" />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label>Appointment Start Time</label>
                    <Field
                      type="time"
                      className="form-control"
                      name="appointment_start_time"
                    />
                    <div className="error">
                      <ErrorMessage name="appointment_start_time" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label>Appointment End Time</label>
                    <Field
                      type="time"
                      className="form-control"
                      name="appointment_end_time"
                    />
                    <div className="error">
                      <ErrorMessage name="appointment_end_time" />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <label>Appointment Description</label>
                    <Field
                      as="textarea"
                      className="form-control"
                      name="appointment_desc"
                    />
                    <div className="error">
                      <ErrorMessage name="appointment_desc" />
                    </div>
                  </div>
                  {/* <div className="col-12 col-md-6 pt-1">
                    <label>First Time Visit?</label>
                    <br />
                    <div class="form-check form-check-inline mt-3">
                      <Field
                        class="form-check-input"
                        type="radio"
                        name="vistInfo"
                        id="inlineRadio1"
                        value="yes"
                      />
                      <label class="form-check-label" htmlFor="inlineRadio1">
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
                      <label class="form-check-label" htmlFor="inlineRadio2">
                        No
                      </label>
                    </div>
                  </div> */}
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
    isLoggedIn: state.login.isLoggedIn,
    currentUser: state.login.loggedUserInfo,
    doctorsList: state.specilizedPhysicians.specialisedPhysicians,
    physiciandata: state.physicians.physicians,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDoctorsList: (speciality) =>
      dispatch(actionCreator.PhysiciansBySpeiciality(speciality)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(ScheduleAppointment);
