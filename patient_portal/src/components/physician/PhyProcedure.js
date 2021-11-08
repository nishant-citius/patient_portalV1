import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Formik, Form, Field } from "formik";
import { procedureServices } from "services/procedures_service";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function Proceduers(props) {
  const [procedures, Setprocedures] = useState([]);
  const [procedureCode, setProcedureCode] = useState("");
  const [patientId, setPatientId] = useState(0);
  const [procedureDesc, setProcedureDesc] = useState(0);
  const [disable, setDisable] = useState(false);

  const searchItems = (e, _value) => {
    if (_value !== "") {
      const filteredData = procedures.filter((item) => {
        if (item.desc === _value) {
          return item;
        }
      });
      if (filteredData.length) {
        setProcedureCode(filteredData[0].code);
        setProcedureDesc(filteredData[0].desc);
      }
    }
  };

  const getAllProcedure = () => {
    procedureServices.getAllProcedure().then(
      (response) => {
        Setprocedures(response.data);
      },
      (error) => {
        return;
      }
    );
  };

  useEffect(() => {
    getAllProcedure();
    setPatientId(props.patientId.patintId);
  }, [patientId]);

  function onSubmit() {
    let obj = {
      doc_id: props.currentUser.id,
      patientId: Number(patientId),
      desc: procedureDesc,
      code: procedureCode,
    };
    addPatientProcedure(obj);
    setDisable(true);
  }

  function addPatientProcedure(_procedure) {
    procedureServices.addPatientProcedure(_procedure).then(
      (response) => {
        if (response.status === 201) {
          props.flashNotification({
            message: "Procedure Added Successfully...!",
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
                <h5>Procedures </h5>
              </div>
              <div className="card-body mb-2">
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={procedures.map((option) => option.desc)}
                  // sx={{ width: 800 }}
                  renderInput={(params) => (
                    <TextField {...params} label="procedures" />
                  )}
                  onChange={(e, v) => searchItems(e, v)}
                />
                <Form>
                  <div className="form-group mt-2">
                    <div className="row">
                      <div className="col-4">
                        <label htmlFor="code">Procedures code</label>
                        <Field
                          className="form-control"
                          name="query"
                          placeholder="Search......"
                          value={procedureCode}
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
export default hof(Proceduers);
