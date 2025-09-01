import type { TherapySession } from "../../types/TherapySession";
import "./SessionsPerDateContainer.css";

interface SessionsPerDateContainerProps {
  date: Date;
  sessions: TherapySession[];
}

export const SessionsPerDateContainer: React.FC<
  SessionsPerDateContainerProps
> = ({ date, sessions }) => {
  console.log({ tipoDatoDate: typeof date });
  console.log({ date });
  return (
    // <section className="sessions-per-date-container">

    // </section>
    <div>
      <div>{date.toString()} </div>
      {sessions.map((s) => (
        <div key={s.id}>{s.patientName} </div>
      ))}
    </div>
  );
};
