import React from "react";

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import { useHistory } from "react-router";

const Navbar = () => {
  const history = useHistory();

  const logOutUser = () => {
    const session = window.sessionStorage;
    session.removeItem("userInfo");
    history.push("/");
  };

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src="src/assets/logo.png" alt="logo" />
        </NavLink>
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
      <button onClick={logOutUser} className="btn btn-primary float-end">
        Logout
      </button>
    </>
  );
};

export default Navbar;
