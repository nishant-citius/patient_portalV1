import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* Left navbar links */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                href="#"
                role="button"
              >
                <i className="fas fa-bars" />
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <NavLink to="/admin" className="nav-link">
                Home
              </NavLink>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul className="navbar-nav ml-auto">
            {/* Notifications Dropdown Menu */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown">
                <i className="fa fa-bell" />
                <span className="badge badge-warning navbar-badge">1</span>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="fas fa-user-circle x-large" />
              </a>
              <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                <NavLink to="/" className="dropdown-item">
                  <i className="fas fa-sign-out-alt mr-2" /> Logout
                </NavLink>
              </div>
            </li>
          </ul>
        </nav>
        {/* /.navbar */}
      </div>
    );
  }
}
