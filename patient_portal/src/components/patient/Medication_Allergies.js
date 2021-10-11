// import { useState } from "react";
// import { connect } from "react-redux";
// import * as actionCreator from "../../redux/actions/userActionCreater";


// const Medication_Allergies = (props) =>{
//     let userId = JSON.parse(window.sessionStorage.getItem("userInfo"));
//     console.log(userId)
//     const[medication_allergies, setmedication_allergies] = useState({


//         currentMedication:"",
//         otc: "",
//         herbs: "",
//         socialDrugs: "",
//         pastMedication: "",
//         drugAllergies: "",
//         otherAllergies: "",
//         userId:userId.id
//     })

//     const HandleChange = (e) => {
//         setmedication_allergies({
//           ...medication_allergies,
//           [e.target.name]: e.target.value
//         });
//       };

//       const handleSubmit = (e) => {
//         e.preventDefault();
//         let newrecords = { ...medication_allergies };
//         props.addmedicationandallergiesrHandler(newrecords)
//       };

//   return(
//    <>
//    <div className="container">
//     <h4 className="text-center">Medication and Allergies</h4>
//       <div className="row justify-content-center">
//         <div className="col-8">
//           <form name="Patient Medicationandallergies" onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Current Medication</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="currentMedication"
//                 id="currentMedication"
//                 value={medication_allergies.currentMedication}
//                 onChange={HandleChange}
//                />

//              <label>OTC(Over the Counter Medication)</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="otc"
//                 id="otc"
//                 value={medication_allergies.otc}
//                 onChange={HandleChange}
//                />

//               <label>Herbs/Vitamin/Minerals/Antibiotics</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="herbs"
//                 id="herbs"
//                 value={medication_allergies.herbs}
//                 onChange={HandleChange}
//                /> 

//               <label>Social Drugs</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="socialDrugs"
//                 id="socialDrugs"
//                 value={medication_allergies.socialDrugs}
//                 onChange={HandleChange}
//                /> 

//               <label>Any past prescribed medication</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="pastMedication"
//                 id="pastMedication"
//                 value={medication_allergies.pastMedication}
//                 onChange={HandleChange}
//                /> 

//               <label>Drug Allergies</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="drugAllergies"
//                 id="drugAllergies"
//                 value={medication_allergies.drugAllergies}
//                 onChange={HandleChange}
//                /> 

//               <label>Other Allergies</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="otherAllergies"
//                 id="otherAllergies"
//                 value={medication_allergies.otherAllergies}
//                 onChange={HandleChange}
//                /> 
//                 </div>
//                 <br/>
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//    </>
//   )
// }
// const mapStateToProps = (state) => {
//     return {
//       allmedicationandallergies: state.medication_allergies.MedicationandAllergiesReducer,
//     };
//   };

//   const mapDispatchToProps = (dispatch) => {
//     return {
//       addmedicationandallergiesrHandler: (newuser) => dispatch(actionCreator.AddMedicationAndAllergiesAsync(newuser)),
//     };
//   };

//   let hof = connect(mapStateToProps, mapDispatchToProps);
//   export default hof(Medication_Allergies);
import React from 'react'

const Medication_Allergies = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h2 className="text-center">Medication and Allergies</h2>
          <div className="card shadow-lg p-10 mb-6 bg-white rounded mt-5">
            <div className="card-header ">Current Medication</div>
            <div className="card-body">
              <form className="login-form">
                <div className="row">
                  <div className="col-12">
                    <h2></h2>
                    <hr />
                    <div className="row">
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Medicine Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="medicine_name"
                            placeholder="Please enter medicine name"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Dosages</label>
                          <input
                            type="text"
                            className="form-control"
                            name="dosages"
                            placeholder="Please enter dosages"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Direction to consume dosage</label>
                          <input
                            type="text"
                            className="form-control"
                            name="medicine_name"
                            placeholder="Please enter medicine name"
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
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Physician Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="physician_name"
                            placeholder="Please enter Physician Name"
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
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Start Date</label>
                          <input
                            type="date"
                            className="form-control"
                            name="start_date"
                            placeholder="Please enter frequency"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">End Date</label>
                          <input
                            type="date"
                            className="form-control"
                            name="end_date"
                            placeholder="Please enter frequency"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="card shadow-lg p-10 mb-6 bg-white rounded mt-5">
            <div className="card-header ">Otc Medication</div>
            <div className="card-body">
              <form className="login-form">
                <div className="row">
                  <div className="col-12">
                    <hr />
                    <div className="row">
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Otc Drug Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="otc_drug_name"
                            placeholder="Please enter medicine name"
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
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Direction to consume dosage</label>
                          <input
                            type="text"
                            className="form-control"
                            name="direction_to_consume"
                            placeholder="Please enter medicine name"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Social Drugs</label>
                          <select
                            className="form-control"
                            name="social_drug"
                            id="social_drug"
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
                <br />
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="card shadow-lg p-10 mb-6 bg-white rounded mt-5">
            <div className="card-header ">Past Prescribed Medication</div>
            <div className="card-body">
              <form className="login-form">
                <div className="row">
                  <div className="col-12">
                    <hr />
                    <div className="row">
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Drug Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="past_drug_name"
                            placeholder="Please enter medicine name"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Strength</label>
                          <input
                            type="text"
                            className="form-control"
                            name="past_strength"
                            placeholder="Please enter strength"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Direction to consume dosage</label>
                          <input
                            type="text"
                            className="form-control"
                            name="direction_to_consume"
                            placeholder="Please enter direction to consume"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="card shadow-lg p-10 mb-6 bg-white rounded mt-5 mb-5">
            <div className="card-header ">Allerigies</div>
            <div className="card-body">
              <form className="login-form">
                <div className="row">
                  <div className="col-12">
                    <hr />
                    <div className="row">
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Allergy Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="allergy_name"
                            placeholder="Please enter allergy name"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label htmlFor="user name">Symptoms of Allergy</label>
                          <input
                            type="text"
                            className="form-control"
                            name="past_strength"
                            placeholder="Please enter strength"
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
                            placeholder="Please enter drug allergy if any"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Medication_Allergies
