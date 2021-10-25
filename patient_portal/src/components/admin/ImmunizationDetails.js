import React from "react";
import { Link } from "react-router-dom";

import {
  BsFillTrashFill,
  BsFillPencilFill,
  BsPersonFill,
  BsCheckCircleFill,
  BsFillXCircleFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

const ImmunizationDetails = () => {
  return (
    <>
      <Link className="btn btn-warning" to="/admin">
        <BsFillArrowLeftSquareFill />
        <span className="m-2">Back</span>
      </Link>
      <h1 className="text-primary text-center fw-bold ">
        Immunization Details
      </h1>
      <table className="table table-bordered shadow mt-4">
        <thead className="table-dark">
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Vaccine Name</th>
            <th scope="col">Vaccine Brand</th>
            <th scope="col">Dose Details</th>
            <th scope="col">Vaccine Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="p-2">
                <Link>
                  <BsPersonFill />
                </Link>
              </span>
              <span className="p-2">
                <Link>
                  <BsFillPencilFill />
                </Link>
              </span>
              <span className="p-2">
                <BsFillTrashFill />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ImmunizationDetails;
