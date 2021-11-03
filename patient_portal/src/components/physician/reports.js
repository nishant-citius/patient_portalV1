import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Formik, Form, Field } from "formik";
import { procedureServices } from "services/procedures_service";
import { useEffect, useState } from "react";

export default function Proceduers(props) {
  const [procesduer, SetProcesduer] = useState([]);
  const [renderInput, setrenderInput] = useState("");
  const [FilteredResults, setFilteredResults] = useState("");

  const searchItems = (e, _value) => {
    if (_value !== "") {
      const filteredData = procesduer.filter((item) => {
        if (item.desc === _value) {
          return item;
        }
      });
      if (filteredData.length) {
        setFilteredResults(filteredData[0].code);
      }
    }
  };

  const getAllProcedure = () => {
    procedureServices.getAllProcedure().then(
      (response) => {
        SetProcesduer(response.data);
      },
      (error) => {
        return;
      }
    );
  };
  useEffect(() => {
    getAllProcedure();
  }, []);

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
                  options={procesduer.map((option) => option.desc)}
                  sx={{ width: 800 }}
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
                          placeholder="Search . . . . ."
                          // onChange={props.handleChange}
                          value={FilteredResults}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button type="submit" className="btn btn-primary mt-3">
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
