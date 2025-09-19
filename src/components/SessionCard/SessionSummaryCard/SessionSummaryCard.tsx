import { formatTimeToAmPm } from "../../../utils/Helpers/formatTimeToAmPm";
import "./SessionSummaryCard.css";

interface SessionSummaryCardProps {
  patient: {
    name: string;
    age: number;
  };
  startTime: string;
  endTime: string;
}

export const SessionSummaryCard: React.FC<SessionSummaryCardProps> = ({
  patient,
  startTime,
  endTime,
}) => {
  return (
    <div className="session-summary-container">
      <p className="patient-name"> {patient.name} </p>
      <p className="session-time">
        {formatTimeToAmPm(startTime)} - {formatTimeToAmPm(endTime)}{" "}
      </p>
    </div>
  );
};
