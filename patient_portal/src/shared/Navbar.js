import React from 'react'
import { PatientSidebarData } from './PatientSidebarData';
import * as BellIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {
// sidebar collapse code---------------------------------------
    $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });
 // sidebar collapse code---------------------------------------   

    return (
        <div className="wrapper">
        
        <nav id="sidebar">
            <ul className="list-unstyled components">
                
                {PatientSidebarData.map((item, index) => {
                    return (
                        <li key={index} classNameName={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>

        {/* <!-- Page Content Holder --> */}
        <div id="content">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className="navbar-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>
                    <button className="btn btn-primary float-right">Logout</button>
                </div>
            </nav>
            <div className="row m-0">
                <div className="col-12">
                    <p>Hello</p>
                </div>
            </div>
            
        </div>
    </div>
    )
}


export default Navbar
