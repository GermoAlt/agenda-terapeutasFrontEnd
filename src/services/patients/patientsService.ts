import { getApiClient } from "../api/client";
import { API_ENDPOINTS } from "../api/endpoints";

const apiClient = getApiClient();

export const PATIENT_SERVICE = {
  GET_PATIENT_BY_ID: async (id: number) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.GET_PATIENT_BY_ID(id));
      return response.data;
    } catch (error) {
      console.error(`Error fetching patient with ID ${id}:`, error);
    }
  },

  GET_ALL_ACTIVE_PATIENTS: async () => {
    try {
      const { data } = await apiClient.get(
        API_ENDPOINTS.GET_ALL_ACTIVE_PATIENTS
      );
      return data;
    } catch (error) {
      console.error("Error fetching all active patients:", error);
    }
  },
};
