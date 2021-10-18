import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./Navbardata";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header fw-bold text-success">
          <h4>Patient Portal</h4>
        </div>
        <div className="links-container"></div>
      </div>
    </nav>
  );
};

export default Navbar;
