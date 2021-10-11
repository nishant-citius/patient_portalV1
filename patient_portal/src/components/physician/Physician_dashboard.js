import { React, useState } from "react";
import Calendar from "react-calendar";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';




const Physician_dashboard = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='m-4'>
      <div className="col-6">
      <Calendar
        onChange={onChange}
        value={value}
        className="mb-4"
      />
      </div>
      <div className="col-6">
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
       <button className="btn btn-primary m-4">join online consultaion</button>
      </div>
  );
};

export default Physician_dashboard;
