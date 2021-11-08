export const BASE_URL = "http://localhost:9999";
export const IMAGE_URL = "http://localhost:3000/src/components/";

export const REGISTER_USER = "http://localhost:9999/register";
export const LOGIN_USER = "http://localhost:9999/login";
export const IMMUNIZATION = "http://localhost:9999/immunization";
export const DEMOGRAPHICS = "http://localhost:9999/demographics";
export const MED_ALLERGIES = "http://localhost:9999/medic_allergy";

export const ALL_USERS = "http://localhost:9999/users";
export const GET_PHYSICIANS = "http://localhost:9999/users?role=physician";
export const ADD_USER = "http://localhost:9999/register";
export const USER = "http://localhost:9999/users/";
export const GET_PATIENTS = "http://localhost:9999/users?role=patient";
export const GET_NURSE = "http://localhost:9999/users?role=nurse";
export const GET_USER_DETAILS = "http://localhost:9999/users";
export const GET_PATIENT_DEMOGRAPHICS =
  "http://localhost:9999/demographics?userid=";

export const GET_PATIENT_IMMUNIZATION =
  "http://localhost:9999/immunization?id=";

export const UPDATE_PATIENT_IMMUNIZATION = "http://localhost:9999/immunization";

export const GET_PATIENT_MEDICATION_ALLERGY =
  "http://localhost:9999/medic_allergy?userid=";

export const GET_DEMOGRAPHICS = "http://localhost:9999/demographics";
export const INACTIVE_USERS = "http://localhost:9999/users?isActive=false";
export const SPECILISED_PHYSICIANS = "http://localhost:9999/users?speciality=";
export const PHYSICIAN_BY_NAME = "http://localhost:9999/users?fName=";
export const PATIENT_VITALS = "http://localhost:9999/patientvitals";
export const PATIENT_DIETPLAN = "http://localhost:9999/patientdietplan";

export const GET_APPOINTMENT_DETAILS =
  "http://localhost:9999/appointments?doc_id=";
export const GET_PATIENT_VITALS =
  "http://localhost:9999/patientvitals?patientId=";
export const GET_PATIENT_DIETPLAN =
  "http://localhost:9999/patientdietplan?userid=";

export const LAB_REPORTS = "http://localhost:9999/labreports";
export const GET_LAB_REPORTS = "http://localhost:9999/labreports?patientId=";
export const GET_ALL_PROCEDURES = "http://localhost:9999/procedures";

export const APPROVED_APPOINTMETS =
  "http://localhost:9999/appointments?status=approved";

export const UPDATE_PATIENT_MEDICATIONANDALLERGIES="http://localhost:9999/medic_allergy";

export const PENDING_APPOINTMETS =
  "http://localhost:9999/appointments?status=pending";