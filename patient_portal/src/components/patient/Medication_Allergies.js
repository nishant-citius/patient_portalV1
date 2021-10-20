import { useState } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";

const Medication_Allergies = (props) => {
  // let userId = JSON.parse(window.sessionStorage.getItem("userInfo"));

  let temp_medication_allergies = {
    id: "",
    userId: "",
    current_medication:[ {
      medicineName: "",
      dosage: "",
      directionstoconsume: "",
      frequency: "",
      physicianName: "",
      purpose: "",
      startDate: "",
      endDate: "",
    }],
      otc_medication:[
      {
        otcDrugName: "",
        strength: "",
        directiontoconsumedosage: "",
        socialDrugs: ""
      },
      ],
      pastprescribedmedication:[
      {
        pastdrugName: "",
        strength: "",
        directiontoconsumedosage: ""
      },
    ],
      allergies: [
      {
        allergyName: "",
        symptomsofAllergy: "",
        drugAllergy: ""
      },
      ],
  };

   const [medication_allergies, setmedication_allergies] = useState(
     temp_medication_allergies
   );
  //console.log(medication_allergies);
  const HandleChange = (e) => {
    // const name = e.target.name,
    //   value = e.target.value;
    //[e.target.name]: e.target.value,
    setmedication_allergies({
      ...medication_allergies,
      [e.target.name]: e.target.value,
    });

    // setmedication_allergies({
    //   //medication_allergies,
    //   [name]: value,
    // });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    props.medication_allergies(medication_allergies);
    //console.log(props.medication_allergies);
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card shadow-lg p-10 mb-6 bg-white rounded mt-5">
            <div className="card-header text-center ">
              Medication and Allergies
            </div>
            <div className="card-body">
              <form
                name="Patient Medicationandallergies"
                onSubmit={handleSubmit}
              >
                <div className="row mt-2">
                  <div className="col-12">
                    <hr />
                    <h5 className="text-center">Current Medication</h5>
                    <hr />
                    <div className="row">
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Medicine Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="medicineName"
                            placeholder="Please enter medicine name"
                            id="current_medication.medicineName"
                            value={
                              medication_allergies.current_medication
                                .medicineName
                            }
                            onChange={HandleChange}
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Dosages</label>
                          <input
                            type="text"
                            className="form-control"
                            name="dosage"
                            placeholder="Please enter dosages"
                            id="dosage"
                            value={
                              medication_allergies.current_medication.dosage
                            }
                            onChange={HandleChange}
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">
                            Direction to consume dosage
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="directionstoconsume"
                            placeholder="Please enter medicine name"
                            id="directionstoconsume"
                            value={
                              medication_allergies.current_medication
                                .directionstoconsume
                            }
                            onChange={HandleChange}
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Frequency</label>
                          <input
                            type="text"
                            className="form-control"
                            name="frequency"
                            placeholder="Please enter frequency"
                            id="frequency"
                            value={
                              medication_allergies.current_medication.frequency
                            }
                            onChange={HandleChange}
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Physician Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="physicianName "
                            placeholder="Please enter Physician Name"
                            id="physicianName "
                            value={
                              medication_allergies.current_medication
                                .physicianName
                            }
                            onChange={HandleChange}
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Purpose</label>
                          <input
                            type="text"
                            className="form-control"
                            name="purpose"
                            placeholder="Please enter purpose"
                            id="purpose"
                            value={
                              medication_allergies.current_medication.purpose
                            }
                            onChange={HandleChange}
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Start Date</label>
                          <input
                            type="date"
                            className="form-control"
                            name="startDate"
                            placeholder="Please enter frequency"
                            id="startDate"
                            value={
                              medication_allergies.current_medication.startDate
                            }
                            onChange={HandleChange}
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">End Date</label>
                          <input
                            type="date"
                            className="form-control"
                            name="endDate"
                            placeholder="Please enter frequency"
                            id="endDate"
                            value={
                              medication_allergies.current_medication.endDate
                            }
                            onChange={HandleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
                  <div className="row mt-2">
                    <div className="col-12">
                      <hr />
                      <h5 className="text-center">Otc Medication</h5>
                      <hr />

                      <div className="row">
                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="user name">Otc Drug Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="otcDrugName"
                              placeholder="Please enter medicine name"
                              id="otcDrugName"
                              value={medication_allergies.otc_medication.otcDrugName}
                              onChange={HandleChange}
                            />
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="user name">Strength</label>
                            <input
                              type="text"
                              className="form-control"
                              name="strength"
                              placeholder="Please enter strength"
                              id="strength"
                              value={medication_allergies.otc_medication.strength}
                              onChange={HandleChange}
                            />
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="user name">Direction to consume dosage</label>
                            <input
                              type="text"
                              className="form-control"
                              name="directiontoconsumedosage"
                              placeholder="Please enter medicine name"
                              id="directiontoconsumedosage"
                              value={medication_allergies.otc_medication.directiontoconsumedosage}
                              onChange={HandleChange}
                            />
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="user name">Social Drugs</label>
                            <select
                              className="form-control"
                              name="socialDrugs: "
                              id="socialDrugs"
                              value={medication_allergies.otc_medication.socialDrugs}
                              onChange={HandleChange}
                            >
                              <option value="">Select</option>
                              <option value="smoke">Smoke</option>
                              <option value="drink">Drink</option>
                              <option value="illicit">Illicit Drug</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="row mt-2">
                    <div className="col-12">
                      <hr />
                      <h5 className="text-center">Past Prescribed Medication</h5>
                      <hr />
                      <div className="row">
                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="user name">Drug Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="pastdrugName"
                              value={medication_allergies.pastprescribedmedication.pastdrugName}
                              placeholder="Please enter medicine name"
                              onChange={HandleChange}
                            />
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="user name">Strength</label>
                            <input
                              type="text"
                              className="form-control"
                              name="strength"
                              id="strength"
                              value={medication_allergies.pastprescribedmedication.strength}
                              placeholder="Please enter strength"
                              onChange={HandleChange}
                            />
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="user name">Direction to consume dosage</label>
                            <input
                              type="text"
                              className="form-control"
                              name="directiontoconsumedosage"
                              id="directiontoconsumedosage"
                              value=
                              {medication_allergies.pastprescribedmedication.directiontoconsumedosage}
                              placeholder="Please enter direction to consume"
                              onChange={HandleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="row mt-2">
                    <div className="col-12">
                      <hr />
                      <h5 className="text-center">Allerigies</h5>
                      <hr />
                      <div className="row">
                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="user name">Allergy Name</label>
                            <input
                              type="text"
                              className="form-control"
                              name="allergyName"
                              id="allergyName"
                              value={medication_allergies.allergies.allergyName}
                              placeholder="Please enter allergy name"
                              onChange={HandleChange}
                            />
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="user name">Symptoms of Allergy</label>
                            <input
                              type="text"
                              className="form-control"
                              name="symptomsofAllergy "
                              id="symptomsofAllergy "
                              value={medication_allergies.allergies.symptomsofAllergy}
                              placeholder="Please enter strength"
                              onChange={HandleChange}
                            />
                          </div>
                        </div>
                        <div className="col-3">
                          <div className="form-group">
                            <label htmlFor="user name">Drug Allergy</label>
                            <input
                              type="text"
                              className="form-control"
                              name="direction_to_consume"
                              id="drugAllergy"
                              value={medication_allergies.allergies.drugAllergy}
                              placeholder="Please enter drug allergy"
                              onChange={HandleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                <div className="col-12 text-center mt-5">
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    globalMessage: state.demographics.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {  

  return {
    medication_allergies: (newuser) => dispatch(actionCreator.AddMedicationAndAllergiesAsync(newuser)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(Medication_Allergies);



