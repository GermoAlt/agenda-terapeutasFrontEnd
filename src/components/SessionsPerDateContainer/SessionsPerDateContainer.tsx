import { DateComponent } from "..";
import type { TherapySession } from "../../types/TherapySession";
import "./SessionsPerDateContainer.css";

interface SessionsPerDateContainerProps {
  date: Date;
  sessions: TherapySession[];
}

export const SessionsPerDateContainer: React.FC<
  SessionsPerDateContainerProps
> = ({ date, sessions }) => {
  return (
    // <section className="sessions-per-date-container">

    // </section>
    <div>
      <DateComponent date={date} />
      {sessions.map((s) => (
        <div key={s.id}>{s.patientName} </div>
      ))}
    </div>
  );
};
