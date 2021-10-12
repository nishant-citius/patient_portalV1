import { React, useState, userEffect } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";

const Immunization = (props) => {
  let userId = JSON.parse(window.sessionStorage.getItem("userInfo"));

  const [patientImmunization, setpatientImmunization] = useState({
    age_category: "",
    vaccine_brand: "",
    dose_detail: "",
    general_vaccine: "",
    userId: userId.id,
  });

  console.log(patientImmunization);

  const HandleChange = (e) => {
    setpatientImmunization({
      ...patientImmunization,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newrecords = { ...patientImmunization };
    props.addUserHandler(newrecords);
  };

  return (
    <div className="container">
      <div className="card shadow-lg p-10 mb-6 bg-white rounded">
        <div className="card-header">Immunization Details</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="covid_vaccine">COVID-19 Vaccine Details</label>
              <div className="row">
                <div className="col-4">
                  <label htmlFor="age_category">Age Category</label>
                  <select
                    className="form-control"
                    name="age_category"
                    id="age_category"
                    value={patientImmunization.age_category}
                    onChange={HandleChange}
                  >
                    <option value="">Select</option>
                    <option value="18_44">18-44</option>
                    <option value="45">45+</option>
                  </select>
                </div>
                <div className="col-4">
                  <label htmlFor="vaccine_brand">Vaccine Brand</label>
                  <input
                    type="text"
                    className="form-control"
                    name="vaccine_brand"
                    placeholder="Please Enter Covid Vaccine Details"
                    value={patientImmunization.vaccine_brand}
                    onChange={HandleChange}
                  />
                </div>
                <div className="col-4">
                  <label htmlFor="vaccine_brand">Dose Details</label>
                  <select
                    className="form-control"
                    name="dose_detail"
                    id="dose_detail"
                    value={patientImmunization.dose_detail}
                    onChange={HandleChange}
                  >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group mt-4">
              <label htmlFor="general_vaccine">Other general Vaccines</label>
              <input
                type="text"
                className="form-control"
                placeholder="Please Enter General Vaccine Details"
                name="general_vaccine"
                value={patientImmunization.general_vaccine}
                onChange={HandleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3"
              // onClick={submitUserData}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
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
