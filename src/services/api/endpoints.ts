export const API_ENDPOINTS = {
  //AUTH
  AUTH: {
    LOGIN: `/api/v1/auth/login`,
    REGISTER: `/api/v1/auth/register`,
    LOG_OUT: `/api/v1/auth/logout`,
  },

  //THERAPISTS
  THERAPISTS: {
    GET_THERAPISTS: `/api/v1/therapist`,
    GET_THERAPIST_BY_ID: (id: number) => `/api/v1/therapist/${id}`,
  },

  // SESSIONS
  SESSIONS: {
    GET_ALL_SESSIONS: `/sessions`,
    GET_SESSIONS_BY_THERAPIST: (idTherapist: number) =>
      `/api/v1/therapists/${idTherapist}/session`,
    GET_SESSIONS_BY_DATE: (idTherapist: number, date: string) =>
      `/api/v1/therapists/${idTherapist}/session?date=${date}`,
  },

  //PATIENTS
  PATIENTS: {
    GET_ALL_ACTIVE_PATIENTS: `/api/v1/patient/findAll`,
    GET_PATIENT_BY_ID: (id: number) => `/api/v1/patient/${id}`,
  },
} as const;
