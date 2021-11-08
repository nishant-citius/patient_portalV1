import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Formik, Form, Field } from "formik";
import { diagnosisService } from "services/diagnosisService";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function Diagnosis(props) {
  const [diagnosis, SetDiagnosis] = useState([]);
  const [diagnosisCode, setDiagnosisCode] = useState("");
  const [patientId, setPatientId] = useState(0);
  const [diagnosisDesc, setDiagnosisDesc] = useState(0);
  const [disable, setDisable] = useState(false);

  const searchItems = (e, _value) => {
    if (_value !== "") {
      const filteredData = diagnosis.filter((item) => {
        if (item.description === _value) {
          return item;
        }
      });
      console.log(filteredData);

      if (filteredData.length) {
        setDiagnosisCode(filteredData[0].code);
        setDiagnosisDesc(filteredData[0].description);
      }
    }
  };

  const getDiagnosis = () => {
    diagnosisService.getDiagnosis().then(
      (response) => {
        SetDiagnosis(response.data);
      },
      (error) => {
        return;
      }
    );
  };

  useEffect(() => {
    getDiagnosis();
    setPatientId(props.patientId.patintId);
  }, [patientId]);

  function onSubmit() {
    let obj = {
      doc_id: props.currentUser.id,
      patientId: patientId,
      description: diagnosisDesc,
      code: diagnosisCode,
    };

    console.log(obj);
    addPatientDiagnosis(obj);
    setDisable(true);
  }

  function addPatientDiagnosis(_diagnosis) {
    diagnosisService.addPatientDiagnosis(_diagnosis).then(
      (response) => {
        if (response.status === 201) {
          props.flashNotification({
            message: "Diagnosis Added Successfully...!",
            type: "success",
          });
        }
      },
      (error) => {}
    );
  }

  return (
    <div>
      <Formik>
        {(props) => (
          <div className="container">
            <div className="card shadow-lg p-6 mb-6 bg-white rounded">
              <div className="card-header">
                <h5>Diagnosis</h5>
              </div>
              <div className="card-body mb-2">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  // options={diagnosis.map((option) => option.description)}
                  options={[
                    ...new Set(
                      diagnosis.map((option) => {
                        return option.description;
                      })
                    ),
                  ]}
                  renderInput={(params) => (
                    <TextField {...params} label="diagnosis" />
                  )}
                  onChange={(e, v) => searchItems(e, v)}
                />
                <Form>
                  <div className="form-group mt-2">
                    <div className="row">
                      <div className="col-4">
                        <label htmlFor="code">diagnosis code</label>
                        <Field
                          className="form-control"
                          name="query"
                          placeholder="Search......"
                          value={diagnosisCode}
                        />
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
      <div className="mt-3">
        <button
          disabled={disable}
          className="btn btn-primary mt-3"
          onClick={() => onSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.login.loggedUserInfo,
    dietplans: state.dietplan.dietplan,
  };
};

//  const mapDispatchToProps = (dispatch) => {
//    return {
//      dietplan: (newuser) => dispatch(actionCreator.AddDietPlanAsync(newuser)),
//    };
//  };

let hof = connect(mapStateToProps, null);
export default hof(Diagnosis);
