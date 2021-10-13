import { React, useState } from "react";
import Calendar from "react-calendar";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';
import Chart from "./chart";




const Physician_dashboard = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='m-4'>
      <div className="row ">
      <div className="col-4">
      <Calendar
        onChange={onChange}
        value={value}
        className="mb-4"
      />
      <Dropdown>
        <Dropdown.Toggle variant="success">
        Select Appointments
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
          Day
          </Dropdown.Item>
          <Dropdown.Item href="#">
          Week
          </Dropdown.Item>
          <Dropdown.Item href="#">
          Month
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <div className="col-6 mb-4">
      <table className="table mt-4">
        <thead class="thead-dark">
             <tr>
                  <th scope="col"># </th>
                  <th scope="col">Patient id</th>
                  <th scope="col">Patient Name</th>
                  <th scope="col">catagory</th>
                  <th scope="col">Appointments status</th>
              </tr>
         </thead>
           <tbody>
               <tr>
               <th scope="row m-2">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><button className="btn btn-success btn-sm" href="#"> Approve</button>
                <button className="btn btn-warning btn-sm m-2" href="#"> postpone</button>
                <button className="btn btn-danger btn-sm" href="#"> Rejected</button>
                </td>
                
     
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      </tr>
            </tbody>
        </table>
      <button className="btn btn-primary mt-4" href="#"> join online consultaion</button>
      <Chart />
      </div>
      </div>
      
      
      </div>
  );
};

export default Physician_dashboard;
