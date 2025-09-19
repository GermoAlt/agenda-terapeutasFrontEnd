import React, { useState } from "react";
import "./SessionCard.css";
import { SessionSummaryCard } from "./SessionSummaryCard/SessionSummaryCard";
import { SessionDetailsComponent } from "./SessionDetailsComponent/SessionDetailsComponent";

interface SessionCardProps {
  idSession: string;
  patient: {
    name: string;
    age: number;
    patientSince: Date;
  };
  startTime: string;
  endTime: string;
  date: Date;
}

export const SessionCard: React.FC<SessionCardProps> = ({
  patient,
  endTime,
  startTime,
  idSession,
  date,
}) => {
  const [selectedSession, setSelectedSession] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setSelectedSession(false);
      }
    };
    if (selectedSession) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedSession]);

  // const handleSelectedSession = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   setSelectedSession(true);
  // };

  return (
    <div className="session-card-container">
      <SessionSummaryCard
        patient={patient}
        startTime={startTime}
        endTime={endTime}
      />
      <SessionDetailsComponent
        patient={patient}
        date={date}
        startTime={startTime}
        endTime={endTime}
      />
    </div>
  );
};
