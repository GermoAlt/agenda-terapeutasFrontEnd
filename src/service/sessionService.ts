import type { TherapySession } from "../types/TherapySession";
import { ONE_HOUR } from "../utils/constants/Timeframes";

export const sessionService = {
  async getSessionsByTherapist(idTherapist: number): Promise<TherapySession[]> {
    const now = new Date();

    return [
      {
        id: 1,
        startDate: now,
        endDate: new Date(now.getTime() + ONE_HOUR),
        patientName: "Juan Gomez",
      },
      {
        id: 2,
        startDate: now,
        endDate: new Date(now.getTime() + ONE_HOUR),
        patientName: "John Doe",
      },
      {
        id: 3,
        startDate: now,
        endDate: new Date(now.getTime() + ONE_HOUR),
        patientName: "Pepe Perez",
      },
    ];
  },
};
