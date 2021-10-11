import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Quick links</h4>
            <h6 className="list-unstyled">
              <li>Home</li>
              <li>Our Doctors</li>
              <li>Patient Services</li>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h5>Stuff</h5>
            <ui className="list-unstyled">
              <li>About us</li>
              <li>Departments</li>
              <li>Contact us</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h5>Contact us</h5>
            <ui className="list-unstyled">
              <li>+91-406-789-51433</li>
              <li>24 hours open</li>
              <li>contactus@abc.com</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} abc | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
