export interface TherapySession {
  id: number;
  startDate: Date;
  endDate: Date;
  patient: {
    name: string;
    age: number;
    patientSince: Date;
  };
}
