import React from "react";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">{/* <img src="" alt="logo" /> */}</NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/registeruser">Register Here</NavBtnLink>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
