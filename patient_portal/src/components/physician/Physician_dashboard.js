import { React, useState } from "react";
import Calendar from "react-calendar";



const Physician_dashboard = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='m-4'>
      <div className="col-6">
      <Calendar
        onChange={onChange}
        value={value}
      />
      </div>
      <div className="col-6">
      <div className="btn-group p-3">
  <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action 
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item">Action</a></li>
    <li><a className="dropdown-item" >Another action</a></li>
    <li><a className="dropdown-item" >Something else here</a></li>
 
    <li><a className="dropdown-item" >Separated link</a></li>
  </ul>
</div>
     
      </div>
       <button className="btn btn-primary m-4">join online consultaion</button>
      </div>
  );
};

export default Physician_dashboard;
