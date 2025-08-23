import "./SessionsPerDateContainer.css";

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
    </section>
  );
};
