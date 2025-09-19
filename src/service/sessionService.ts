import type { TherapySession } from "../types/TherapySession";
import { ONE_HOUR } from "../utils/constants/Timeframes";

export const sessionService = {
  async getSessionsByTherapist(idTherapist: number): Promise<TherapySession[]> {
    return [
      {
        id: 1,
        startDate: new Date("2024-09-06T10:00:00"),
        endDate: new Date(new Date("2024-09-06T10:00:00").getTime() + ONE_HOUR),
        patient: {
          name: "Tommy Lee Jones",
          age: 30,
          patientSince: new Date("2020-01-01"),
        },
      },
      {
        id: 2,
        startDate: new Date("2024-09-06T11:30:00"),
        endDate: new Date(new Date("2024-09-06T11:30:00").getTime() + ONE_HOUR),
        patient: {
          name: "Ana López",
          age: 28,
          patientSince: new Date("2021-03-15"),
        },
      },
      {
        id: 3,
        startDate: new Date("2024-09-06T13:00:00"),
        endDate: new Date(new Date("2024-09-06T13:00:00").getTime() + ONE_HOUR),
        patient: {
          name: "Carlos Pérez",
          age: 35,
          patientSince: new Date("2019-07-22"),
        },
      },
      {
        id: 4,
        startDate: new Date("2024-09-06T04:00:00"),
        endDate: new Date(new Date("2024-09-06T04:00:00").getTime() + ONE_HOUR),
        patient: {
          name: "Pepe Perez",
          age: 25,
          patientSince: new Date("1328-04-03"),
        },
      },
      {
        id: 4,
        startDate: new Date("2024-09-07T09:00:00"),
        endDate: new Date(new Date("2024-09-07T09:00:00").getTime() + ONE_HOUR),
        patient: {
          name: "Lucía Fernández",
          age: 40,
          patientSince: new Date("2018-11-10"),
        },
      },
      {
        id: 5,
        startDate: new Date("2024-09-07T10:30:00"),
        endDate: new Date(new Date("2024-09-07T10:30:00").getTime() + ONE_HOUR),
        patient: {
          name: "Miguel Torres",
          age: 32,
          patientSince: new Date("2022-02-05"),
        },
      },
      {
        id: 6,
        startDate: new Date("2024-09-07T12:00:00"),
        endDate: new Date(new Date("2024-09-07T12:00:00").getTime() + ONE_HOUR),
        patient: {
          name: "Sofía Ramírez",
          age: 27,
          patientSince: new Date("2023-06-18"),
        },
      },
      {
        id: 7,
        startDate: new Date("2024-09-08T08:30:00"),
        endDate: new Date(new Date("2024-09-08T08:30:00").getTime() + ONE_HOUR),
        patient: {
          name: "Pedro Sánchez",
          age: 45,
          patientSince: new Date("2017-09-30"),
        },
      },
      {
        id: 8,
        startDate: new Date("2024-09-08T10:00:00"),
        endDate: new Date(new Date("2024-09-08T10:00:00").getTime() + ONE_HOUR),
        patient: {
          name: "María Ruiz",
          age: 38,
          patientSince: new Date("2020-12-12"),
        },
      },
      {
        id: 9,
        startDate: new Date("2024-09-08T11:30:00"),
        endDate: new Date(new Date("2024-09-08T11:30:00").getTime() + ONE_HOUR),
        patient: {
          name: "Diego Castro",
          age: 29,
          patientSince: new Date("2021-08-03"),
        },
      },
      {
        id: 10,
        startDate: new Date("2024-09-10T11:30:00"),
        endDate: new Date(new Date("2024-09-08T11:30:00").getTime() + ONE_HOUR),
        patient: {
          name: "Juan Rodriguez",
          age: 1784238,
          patientSince: new Date("0001-01-01"),
        },
      },
    ];
  },
};
