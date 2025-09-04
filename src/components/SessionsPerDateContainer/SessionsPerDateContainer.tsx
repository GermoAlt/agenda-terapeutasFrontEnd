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
    <div>
      <DateComponent date={date} />
      {sessions.map((s) => (
        <SessionCard
          key={s.id}
          patientName={s.patientName.toString()}
          startTime={s.startDate.toLocaleTimeString()}
          endTime={s.endDate.toLocaleTimeString()}
          idSession={s.id.toString()}
        />
      ))}
    </div>
  );
};
