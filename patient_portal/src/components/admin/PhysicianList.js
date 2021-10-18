// import { React, useState, useEffect } from "react";
// import { adminService } from "../../services/register_user_service";
// import { Link } from "react-router-dom";
// import {
//   BsFillTrashFill,
//   BsFillPencilFill,
//   BsPersonFill,
//   BsCheckCircleFill,
//   BsFillXCircleFill,
//   BsFillArrowLeftSquareFill,
// } from "react-icons/bs";

// import { connect } from "react-redux";
// import * as actionCreater from "../../redux/actions/userActionCreater";

// const PhysicianList = (props) => {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // loadPhysiansData();
//   }, []);

//   const loadPhysiansData = () => {
//     props.getallphysiciandata();
//     console.log(props.physiciansList);
//     setUsers(props.physiciansList)
//   };

//   // const loadUsers = () => {
//   //   adminService.getAllPhysicians().then(
//   //     (response) => {
//   //       setUsers(response.data);
//   //       setIsLoading(true);
//   //     },
//   //     (error) => {
//   //       return;
//   //     }
//   //   );
//   //   // setUsers(props.physicians);
//   // };

//   const deleteUser = (id) => {
//     //   adminService.deleteUser(id).then(
//     //     (response) => {
//     //       loadUsers();
//     //     },
//     //     (error) => {
//     //       return;
//     //     }
//     //   );
//   };

//   const toggleUserState = (user) => {};

//   function loadAll() {
//     // props.getallphysiciandata();
//     // console.log(props.physiciansList);
//   }

//   // if (isLoading) {
//   return (
//     <>
//       <div className="container mt-4">
//         <Link className="btn btn-warning" to="/admin">
//           <BsFillArrowLeftSquareFill />
//           <span className="m-2">Back</span>
//         </Link>
//         <h1 className="text-success text-center fw-bold ">Physician List</h1>
//         <button onClick={loadPhysiansData}>Load</button>
//         <table className="table table-bordered shadow mt-4">
//           <thead className="table-dark">
//             <tr>
//               <th scope="col">Sr.No</th>
//               <th scope="col">Name</th>
//               <th scope="col">D.O.B.</th>
//               <th scope="col">Email</th>
//               <th scope="col">Phone</th>
//               <th scope="col">Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => {
//               return (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>{`${user.fName} ${user.lName}`}</td>
//                   <td>{user.dob}</td>
//                   <td>{user.email}</td>
//                   <td>{user.mobile}</td>
//                   <td>
//                     {user.isActive ? (
//                       <>
//                         <BsCheckCircleFill
//                           className="hand-pointer"
//                           onClick={() => toggleUserState(user)}
//                         />
//                         <span className="p-2">Active</span>
//                       </>
//                     ) : (
//                       <>
//                         <BsFillXCircleFill
//                           className="hand-pointer"
//                           onClick={() => toggleUserState(user)}
//                         />
//                         <span className="p-2">Inactive</span>
//                       </>
//                     )}
//                   </td>
//                   <td>
//                     <span className="p-2">
//                       <Link to={`/userdetails/${user.id}`}>
//                         <BsPersonFill />
//                       </Link>
//                     </span>
//                     <span className="p-2">
//                       <Link to={`/edit/${user.id}`}>
//                         <BsFillPencilFill />
//                       </Link>
//                     </span>
//                     <span className="p-2" onClick={() => deleteUser(user.id)}>
//                       <BsFillTrashFill />
//                     </span>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
//   // } else {
//   //   return <h1 className="text-primary text-center fw-bold">Loading...</h1>;
//   // }
// };

// const mapStateToProps = (rootReducer) => {
//   return {
//     globalmessage: rootReducer.physicians.globalmessage,
//     physiciansList: rootReducer.physicians.physicians,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getallphysiciandata: () => dispatch(actionCreater.GetAllPhysicianData()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PhysicianList);

import React from "react";
import { connect } from "react-redux";
import * as actioncreators from "../../redux/actions/userActionCreater";
import { Link } from "react-router-dom";
import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsPersonFill,
  BsCheckCircleFill,
  BsFillXCircleFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

const mapStateToProps = (rootReducer) => {
  return {
    physiciandata: rootReducer.physicians.physicians,
    globalmessage: rootReducer.physicians.globalmessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getallphysiciandata: () => dispatch(actioncreators.GetAllPhysicianData()),
  };
};

export class PhysicianDataComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getallphysiciandata();
  }

  toggleUserState = (user) => {};
  render() {
    return (
      <>
        <div className="container mt-4">
          <Link className="btn btn-warning" to="/admin">
            <BsFillArrowLeftSquareFill />
            <span className="m-2">Back</span>
          </Link>
          <h1 className="text-success text-center fw-bold ">Physician List</h1>
          <table className="table table-bordered shadow mt-4">
            <thead className="table-dark">
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">D.O.B.</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.physiciandata.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{`${user.fName} ${user.lName}`}</td>
                    <td>{user.dob}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>
                      {/* {user.isActive ? (
                        <>
                          <BsCheckCircleFill
                            className="hand-pointer"
                            onClick={() => toggleUserState(user)}
                          />
                          <span className="p-2">Active</span>
                        </>
                      ) : (
                        <>
                          <BsFillXCircleFill
                            className="hand-pointer"
                            onClick={() => toggleUserState(user)}
                          />
                          <span className="p-2">Inactive</span>
                        </>
                      )} */}
                    </td>
                    <td>
                      <span className="p-2">
                        <Link to={`/userdetails/${user.id}`}>
                          <BsPersonFill />
                        </Link>
                      </span>
                      <span className="p-2">
                        <Link to={`/edit/${user.id}`}>
                          <BsFillPencilFill />
                        </Link>
                      </span>
                      <span className="p-2">
                        <BsFillTrashFill />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhysicianDataComponent);
