import { React, useState, useEffect } from "react";
// import Card from "../../shared/Card";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";


const Demographics = (props) => {
    let userId = JSON.parse(window.sessionStorage.getItem("userInfo"))
    // setpatientDemographics({
    //   ...patientDemographics,
    //   [userId]: userId.id
    // });

  const [patientDemographics, setpatientDemographics] = useState({
    fName: "",
    lName: "",
    dob: "",
    gender: "",
    ethnicity: "",
    race: "",
    education: "",
    employment: "",
    address: "",
    phone_number: "",
    medical_history: "",
    family_medical_history: "",
    surgeries: "",
    insurance_provider: "",
    userId: userId.id
  });


  const HandleChange = (e) => {
    setpatientDemographics({
      ...patientDemographics,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newrecords = { ...patientDemographics };
    props.addUserHandler(newrecords)
  };

  return (
    <>
      <div className="container">
        <h4 className="text-center">Patient Demographics</h4>
        <div className="row justify-content-center">
          <div className="col-8">
            <form name="Patient Demographics" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fName"
                  id="fName"
                  value={patientDemographics.fName}
                  onChange={HandleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lName"
                  id="lName"
                  value={patientDemographics.lName}
                  onChange={HandleChange}
                />
              </div>
              <div className="form-group">
                <label>D.O.B</label>
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  id="dob"
                  value={patientDemographics.dob}
                  onChange={HandleChange}
                />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select
                  className="form-control"
                  name="gender"
                  id="gender"
                  value={patientDemographics.gender}
                  onChange={HandleChange}
                >
                  <option value="select">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="form-group">
                <label>Ethnicity/Race</label>
                <input
                  type="text"
                  className="form-control"
                  name="ethnicity"
                  id="ethnicity/race"
                  value={patientDemographics.ethinicity}
                  onChange={HandleChange}
                />
              </div>
              <div className="form-group">
                <label>Education</label>
                <input
                  type="text"
                  className="form-control"
                  name="education"
                  id="education"
                  value={patientDemographics.education}
                  onChange={HandleChange}
                />
              </div>

              <div className="form-group">
                <label>Employment</label>
                <input
                  type="text"
                  className="form-control"
                  name="employment"
                  id="employment"
                  value={patientDemographics.employment}
                  onChange={HandleChange}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text-"
                  className="form-control"
                  name="address"
                  id="address"
                  value={patientDemographics.address}
                  onChange={HandleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  name="phone_number"
                  id="phone_number"
                  value={patientDemographics.phone_number}
                  onChange={HandleChange}
                />
              </div>

              <div className="form-group">
                <label>Medical History</label>
                <input
                  type="text"
                  className="form-control"
                  name="medical_history"
                  id="medical_history"
                  value={patientDemographics.medical_history}
                  onChange={HandleChange}
                />
              </div>
              <div className="form-group">
                <label>Family Medical History </label>
                <input
                  type="text"
                  className="form-control"
                  name="family_medical_history"
                  id="family_medical_history"
                  value={patientDemographics.family_medical_history}
                  onChange={HandleChange}
                />
              </div>
              <div className="form-group">
                <label>Surgeries</label>
                <input
                  type="text"
                  className="form-control"
                  name="surgeries"
                  id="surgeries"
                  value={patientDemographics.surgeries}
                  onChange={HandleChange}
                />
              </div>

              <div className="form-group">
                <label>Insurance Provider</label>
                <input
                  type="text"
                  className="form-control"
                  name="insurance_provider"
                  id="insurance_provider"
                  value={patientDemographics.insurance_provider}
                  onChange={HandleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary m-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    allusers: state.demographics.Demographicsreducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserHandler: (newuser) => dispatch(actionCreator.AddDemographicsAsync(newuser)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(Demographics);