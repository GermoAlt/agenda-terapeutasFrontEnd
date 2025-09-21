import React from "react";
import { EventDataContainer } from "../EventDataContainer/EventDataContainer";
import { PatientDataCard } from "../PatientDataCard/PatientDataCard";
import "./SessionDetailsComponent.css";

interface SessionDetailsComponentProps {
  patient: {
    name: string;
    age: number;
    patientSince: Date;
  };
  startTime: string;
  endTime: string;
  date: Date;
}

export const SessionDetailsComponent: React.FC<
  SessionDetailsComponentProps
> = ({ patient, date, startTime, endTime }) => {
  return (
    <div className="session-details-container">
      <PatientDataCard patient={patient} />
      <EventDataContainer date={date} startTime={startTime} endTime={endTime} />
      <div className="option-buttons-container">
        <button>View patient notes</button>
        <button className="cannot-attend-button">I cannot attend</button>
      </div>
    </div>
  );
};
