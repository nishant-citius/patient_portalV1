import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  render() {
    return (
      <div>
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <Link to="/admin" className="brand-link">
            <span className="brand-text font-weight-light">
              Admin Dashboard
            </span>
          </Link>
          {/* Sidebar */}
          <div className="sidebar2">
            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  <Link to="/patientlist" className="nav-link">
                    <i className="nav-icon fas fa-table" />
                    <p>Patient Records</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/physicianlist" className="nav-link">
                    <i className="nav-icon fas fa-edit" />
                    <p>Physician Records</p>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/appointments" className="nav-link">
                    <i className="nav-icon far fa-calendar-alt" />
                    <p>Appointments</p>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/immunizationdetails" className="nav-link">
                    <i className="nav-icon fas fa-columns" />
                    <p>Immunization</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/billing" className="nav-link">
                    <i className="nav-icon fas fa-book" />
                    <p>Billing</p>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
