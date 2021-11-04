import { React, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { allergyServices } from "../../services/allergiesService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const AddAllergy = (props) => {
  const initialValues = {
    AllergyType: "",
    AllergyName: "",
    AllergenSource: "",
    Isoforms_or_partial_sequences_of_allergen: "",
    Allerginicity: "",
  };

  const [allergy, setAllergy] = useState(initialValues);

  let history = useHistory();

  const validationSchema = Yup.object().shape({
    AllergyType: Yup.string().required("Required"),
    AllergyName: Yup.string().required("Required"),
    AllergenSource: Yup.string().required("Required"),
  });

  const onSubmit = (values, actions) => {
    const payload = {
      AllergyType: values.AllergyType,
      AllergyName: values.AllergyName,
      AllergenSource: values.AllergenSource,
      Isoforms_or_partial_sequences_of_allergen:
        values.Isoforms_or_partial_sequences_of_allergen,
      Allerginicity: values.Allerginicity,
    };
    addNewAllergy(payload);
    actions.resetForm();
  };

  function addNewAllergy(newdata) {
    allergyServices.addNewAllergy(newdata).then(
      (response) => {
        console.log(response);
        if (response.status === 201) {
          props.flashNotification({
            message: "New Data Added Succssfully...!",
            type: "success",
          });
        }
      },
      (error) => {
        props.flashNotification({
          message: "Data Not Added..!",
          type: "error",
        });
      }
    );
  }

  return (
    <div className="container py-4 border-secondary  mt-5">
      <Link className="btn btn-warning" to="/admin">
        <BsFillArrowLeftSquareFill />
        <span className="m-2">Back</span>
      </Link>
      <h3 className="text-center fw-bold ">Add New Allergy Data</h3>
      <div className="row justify-content-center">
        <div className="col-8">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {(props) => (
              <Form>
                <div className="form-group">
                  <label>Allergy Type</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="AllergyType"
                    id="AllergyType"
                    placeholder="Enter Allergy Type"
                  />
                  <div className="error">
                    <ErrorMessage name="AllergyType" />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <label>Allergy Name</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="AllergyName"
                    id="AllergyName"
                    placeholder="Enter Allergy Name"
                  />
                  <div className="error">
                    <ErrorMessage name="AllergyName" />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <label>Allergen Source</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="AllergenSource"
                    id="AllergenSource"
                    placeholder="Enter Your Dob"
                  />
                  <div className="error">
                    <ErrorMessage name="Enter Allergen Source" />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <label>Isoforms_or_partial_sequences_of_allergen</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="Isoforms_or_partial_sequences_of_allergen"
                    id="Isoforms_or_partial_sequences_of_allergen"
                    placeholder="Enter "
                  />
                  <div className="error">
                    <ErrorMessage name="Isoforms_or_partial_sequences_of_allergen" />
                  </div>
                </div>
                <br />
                <div className="form-group">
                  <label>Allerginicity</label>
                  <Field
                    type="Allerginicity"
                    className="form-control"
                    id="Allerginicity"
                    name="Allerginicity"
                    placeholder="Enter Allerginicity"
                  />
                  <div className="error">
                    <ErrorMessage name="Allerginicity" />
                  </div>
                </div>
                <br />
                <button type="submit" className="btn btn-primary mt-4">
                  Save Details
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddAllergy;
