import "./SessionsPerDateContainer.css";
import {DateComponent} from "../DateComponent/DateComponent.tsx";
import { SessionCard } from "../SessionCard/SessionCard.tsx";

interface SessionsPerDateContainerProps {
  sessions: object[];
}

export const SessionsPerDateContainer: React.FC<
  SessionsPerDateContainerProps
> = ({ sessions = [] }) => {
  return (
    <section className="sessions-per-date-container">
      {sessions.map((item) => (
        <div key={Math.random()}></div>
      ))}
      <DateComponent date={new Date()}/>
      <SessionCard patientName="John Doe" startTime="10:00 AM" endTime="11:00 AM" idSession="1"/>
    </section>
  );
};
