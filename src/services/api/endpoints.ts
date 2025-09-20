import { BASE_URL } from "./client";

export const API_ENDPOINTS = {
  //AUTH
  //   LOGIN: `${BASE_URL}/auth/login`,
  //   REGISTER: `${BASE_URL}/auth/register`,
  //   LOG_OUT: `${BASE_URL}/auth/logout`,

  //THERAPISTS
  //   THERAPISTS: `${BASE_URL}/api/v1/therapists`,
  //   THERAPIST_BY_ID: (id: number) => `${BASE_URL}/therapists/${id}`,

  //SESSIONS
  //   SESSIONS: `${BASE_URL}/sessions`,
  //   SESSIONS_BY_THERAPIST: (idTherapist: number) =>
  //     `${BASE_URL}/therapists/${idTherapist}/sessions`,
  //   SESSIONS_BY_DATE: (idTherapist: number, date: string) =>
  //     `${BASE_URL}/therapists/${idTherapist}/sessions?date=${date}`,

  //PATIENTS
  GET_ALL_ACTIVE_PATIENTS: `${BASE_URL}/api/v1/patient/findAll`,
  GET_PATIENT_BY_ID: (id: number) => `${BASE_URL}/api/v1/patient/${id}`,
} as const;
