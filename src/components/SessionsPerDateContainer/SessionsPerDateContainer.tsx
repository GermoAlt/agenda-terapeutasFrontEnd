import type { TherapySession } from "../../types/TherapySession";
import { DateComponent, SessionCard } from "../index.ts";
import "./SessionsPerDateContainer.css";

interface SessionsPerDateContainerProps {
  date: Date;
  sessions: TherapySession[];
}

export const SessionsPerDateContainer: React.FC<
  SessionsPerDateContainerProps
> = ({ date, sessions }) => {
  return (
    <div className="sessions-per-date-container">
      <DateComponent date={date} />
      <SessionsList sessions={sessions} date={date} />
    </div>
  );
};

const SessionsList = ({
  sessions,
  date,
}: {
  sessions: TherapySession[];
  date: Date;
}) => {
  return (
    <>
      {sessions.map((s) => (
        <SessionCard
          date={date}
          key={s.id}
          patient={s.patient}
          startTime={s.startDate.toLocaleTimeString()}
          endTime={s.endDate.toLocaleTimeString()}
          idSession={s.id.toString()}
        />
      ))}
    </>
  );
};
