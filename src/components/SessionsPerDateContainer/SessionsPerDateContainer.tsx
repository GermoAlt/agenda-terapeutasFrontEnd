import type { TherapySession } from "../../types/TherapySession";
import { DateComponent } from "../DateComponent/DateComponent";
import { SessionCard } from "../SessionCard/SessionCard";

interface SessionsPerDateContainerProps {
  date: Date;
  sessions: TherapySession[];
}

export const SessionsPerDateContainer: React.FC<
  SessionsPerDateContainerProps
> = ({ date, sessions }) => {

  const renderSessions = () =>
    sessions.map((s: TherapySession) => (
      <SessionCard
        date={date}
        key={s.id}
        patient={s.patient}
        startTime={s.startDate.toLocaleTimeString()}
        endTime={s.endDate.toLocaleTimeString()}
        idSession={s.id.toString()}
      />
    ));

  return (
    <div className="sessions-per-date-container">
      <DateComponent date={date} />
      {renderSessions()}
    </div>
  );
};
