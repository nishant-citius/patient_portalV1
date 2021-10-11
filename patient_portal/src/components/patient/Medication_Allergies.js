import { useState } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../redux/actions/userActionCreater";


const Medication_Allergies = (props) =>{
    let userId = JSON.parse(window.sessionStorage.getItem("userInfo"));
    console.log(userId)
    const[medication_allergies, setmedication_allergies] = useState({
        
       
        currentMedication:"",
        otc: "",
        herbs: "",
        socialDrugs: "",
        pastMedication: "",
        drugAllergies: "",
        otherAllergies: "",
        userId:userId.id
    })

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

  return(
   <>
   <div className="container">
    <h4 className="text-center">Medication and Allergies</h4>
      <div className="row justify-content-center">
        <div className="col-8">
          <form name="Patient Medicationandallergies" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Current Medication</label>
              <input
                type="text"
                className="form-control"
                name="currentMedication"
                id="currentMedication"
                value={medication_allergies.currentMedication}
                onChange={HandleChange}
               />

             <label>OTC(Over the Counter Medication)</label>
              <input
                type="text"
                className="form-control"
                name="otc"
                id="otc"
                value={medication_allergies.otc}
                onChange={HandleChange}
               />

              <label>Herbs/Vitamin/Minerals/Antibiotics</label>
              <input
                type="text"
                className="form-control"
                name="herbs"
                id="herbs"
                value={medication_allergies.herbs}
                onChange={HandleChange}
               /> 

              <label>Social Drugs</label>
              <input
                type="text"
                className="form-control"
                name="socialDrugs"
                id="socialDrugs"
                value={medication_allergies.socialDrugs}
                onChange={HandleChange}
               /> 

              <label>Any past prescribed medication</label>
              <input
                type="text"
                className="form-control"
                name="pastMedication"
                id="pastMedication"
                value={medication_allergies.pastMedication}
                onChange={HandleChange}
               /> 

              <label>Drug Allergies</label>
              <input
                type="text"
                className="form-control"
                name="drugAllergies"
                id="drugAllergies"
                value={medication_allergies.drugAllergies}
                onChange={HandleChange}
               /> 

              <label>Other Allergies</label>
              <input
                type="text"
                className="form-control"
                name="otherAllergies"
                id="otherAllergies"
                value={medication_allergies.otherAllergies}
                onChange={HandleChange}
               /> 
                </div>
                <br/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
   </>
  )
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