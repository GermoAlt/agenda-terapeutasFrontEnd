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
