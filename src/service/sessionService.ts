import type { TherapySession } from "../types/TherapySession";

export const sessionService = {
  async getSessionsByTherapist(idTherapist: number): Promise<TherapySession[]> {
    return [
      {
        id: 1,
        startDate: new Date(),
        endDate: new Date(),
        patientName: "Juan Gomez",
      },
      {
        id: 2,
        startDate: new Date(),
        endDate: new Date(),
        patientName: "John Doe",
      },
      {
        id: 3,
        startDate: new Date(),
        endDate: new Date(),
        patientName: "Pepe Perez",
      },
    ];
  },
};
