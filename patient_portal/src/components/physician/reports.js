import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { procedureServices } from 'services/procedures_service';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react';



export default function Proceduers(props) {
const [procesduer ,SetProcesduer]=useState([]);
const [renderInput, setrenderInput] = useState('');
const [FilteredResults, setFilteredResults] = useState([]);


const searchItems = (searchValue) => {
  
  let val=document.getElementById('combo-box-demo').value;
  console.log("dshubflhsbdifbuhsd",val);
  // setrenderInput(searchValue)
  if (val !== '') {
      const filteredData = procesduer.filter((item) => {
          //return Object.values(item).join('').toLowerCase().includes(renderInput.toLowerCase())
          if(item.desc === val){    
            debugger
          return item.code
          }
      })
      console.log(filteredData)
      // setFilteredResults(filteredData)
  }
  // else{
  //     setFilteredResults(procesduer)
  // }
}


const filteredData = procesduer.filter((item) => {
  return Object.values(item).join('').toLowerCase().includes(renderInput.toLowerCase())
  })

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
 useEffect(()=>{
  getAllProcedure();
 })


  return (
<div>

    <Formik >
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
              options={procesduer.map((option)=>option.desc)}
              sx={{ width: 800 }}
              onChange={(e) => searchItems()}
              renderInput={(params) => <TextField {...params} label="procedures" />}
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
                        onChange={props.handleChange}
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


