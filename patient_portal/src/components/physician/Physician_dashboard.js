import { React, useState } from "react";
import Calendar from "react-calendar";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';




const Physician_dashboard = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='m-4'>
      <div className="row ">
      <div className="col-6">
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
              </tr>
         </thead>
           <tbody>
               <tr>
               <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
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
      </div>
      </div>
      
      
      </div>
  );
};

export default Physician_dashboard;
