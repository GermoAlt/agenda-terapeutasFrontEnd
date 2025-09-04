import type { TherapySession } from "../../types/TherapySession";
import "./SessionsPerDateContainer.css";
import {DateComponent} from "../DateComponent/DateComponent.tsx";
import { SessionCard } from "../SessionCard/SessionCard.tsx";

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
      <DateComponent date={new Date()}/>
      <SessionCard patientName="John Doe" startTime="10:00 AM" endTime="11:00 AM" idSession="1"/>
    </div>
  );
};
