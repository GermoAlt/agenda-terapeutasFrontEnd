import { apiClient } from "../api/client";
import { API_ENDPOINTS } from "../api/endpoints";

export const patientsService = {
    
  getById: async (id: number) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.GET_PATIENT_BY_ID(id));
      return response.data;
    } catch (error) {
      console.error(`Error fetching patient with ID ${id}:`, error);
    }
  },

  getAllActive: async () => {
    try {
      const response = await apiClient.get(
        API_ENDPOINTS.GET_ALL_ACTIVE_PATIENTS
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching all active patients:", error);
    }
  },
};
