import "./FutureSessionsPerDayView.css";

import type { TherapySession } from "../../types/TherapySession";
import { SessionsPerDateContainer } from "../../components";
import { useSessionsByTherapist } from "../../hooks/useSessions";

export const FutureSessionsPerDayView: React.FC = () => {
  const idTherapist = 1; // We will get it from context in the future
  const { sessions, loading } = useSessionsByTherapist(idTherapist);
  const sessionsByDate: { [date: string]: typeof sessions } = {};
  sessions.forEach((session: TherapySession) => {
    const dateKey = session.startDate.toDateString();
    if (!sessionsByDate[dateKey]) {
      sessionsByDate[dateKey] = [];
    }
    sessionsByDate[dateKey].push(session);
  });

  const sessionsPerDateContainerList = Object.entries(sessionsByDate).map(
    ([dateStr, sessions]) => (
      <SessionsPerDateContainer
        key={dateStr}
        date={sessions[0].startDate}
        sessions={sessions}
      />
    )
  );

  if (loading) return <div className="loading-message" >Cargando sesiones...</div>;

  return <div className="future-sessions-container" >{sessionsPerDateContainerList}</div>;
};
