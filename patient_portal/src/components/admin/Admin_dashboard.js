import React from "react";
import { useHistory } from "react-router";

const Admin_dashboard = () => {
  const history = useHistory();

  const logOut = () => {
    const session = window.sessionStorage;
    session.removeItem("userInfo");
    history.push("/");
  };

  return (
    <>
      <h1>Admin Dashboard</h1>
      <button onClick={logOut}>Logout</button>
    </>
  );
};

export default Admin_dashboard;
