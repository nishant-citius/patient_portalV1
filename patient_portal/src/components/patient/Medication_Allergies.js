import { useState } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";


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

// const Medication_Allergies = (props) => {
//   let userId = JSON.parse(window.sessionStorage.getItem("userInfo"));
//   //     console.log(userId)
const Medication_Allergies = (props) => {

  // let userId = JSON.parse(window.sessionStorage.getItem("userInfo"));
 
  let  temp_medication_allergies = {
    id: "",
    patient_id: "",
    current_medication:[
      {
      medicineName: "",
      dosage: "",
      directionstoconsume: "",
      frequency: "",
      physicianName: "",
      purpose: "",
      startDate: "",
      endDate: ""
     },
    ],
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
      drugName: "",
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

}

  
    const [medication_allergies, setmedication_allergies] = useState(temp_medication_allergies)
    const HandleChange = (e) => {
      setmedication_allergies({
        ...medication_allergies,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      let newrecords = { ...medication_allergies };
      props.addmedicationandallergiesrHandler(newrecords)
    };
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="card shadow-lg p-10 mb-6 bg-white rounded mt-5">
              <div className="card-header text-center ">Medication and Allergies</div>
              <div className="card-body">
                <form name="Patient Medicationandallergies" onSubmit={handleSubmit}>

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
                              id="medicineName"
                              value={medication_allergies.current_medication.medicineName}
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
                              value={medication_allergies.current_medication.dosage}
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
                              name="directionstoconsume"
                              placeholder="Please enter medicine name"
                              id="directionstoconsume"
                              value={medication_allergies.current_medication.directionstoconsume}
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
                              value={medication_allergies.current_medication.frequency}
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
                              value={medication_allergies.current_medication.physicianName}
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
                              value={medication_allergies.current_medication.purpose}
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
                              value={medication_allergies.current_medication.startDate}
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
                              value={medication_allergies.current_medication.endDate}
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
                              name="drugName"
                              id="drugName"
                              value={medication_allergies.pastprescribedmedication.drugName}
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
                    <button className="btn btn-primary" type="submit">Submit</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    allmedicationandallergies: state.medication_allergies.MedicationandAllergiesReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addmedicationandallergiesrHandler: (newuser) => dispatch(actionCreator.AddMedicationAndAllergiesAsync(newuser)),
  };
};

let hof = connect(mapStateToProps, mapDispatchToProps);
export default hof(Medication_Allergies);

