import React, { useEffect, useState } from "react";
import "./FutureSessionsPerDayView.css";
import { SessionsPerDateContainer } from "../../components";
import { useLoading } from "../../hooks/useLoading";
import { SESSION_SERVICE } from "../../services/sessions/sessionService";
import type { TherapySession } from "../../types/TherapySession";

export const FutureSessionsPerDayView: React.FC = () => {
  const idTherapist = 1;
  const [sessions, setSessions] = useState<TherapySession[]>([]);
  const { isLoading, startLoading, stopLoading } = useLoading(false);

  useEffect(() => {
    let aborted = false;
    const load = async () => {
      try {
        startLoading();
        const data = await SESSION_SERVICE.GET_SESSIONS_BY_THERAPIST_ID_MOCK(
          idTherapist
        );
        if (!aborted) {
          console.log("sessions fetched:", data);
          setSessions(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("error fetching sessions", err);
      } finally {
        if (!aborted) stopLoading();
      }
    };
    load();
    return () => {
      aborted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idTherapist]);

  const sessionsByDate: Record<string, TherapySession[]> = {};
  sessions.forEach((s) => {
    const key = s.startDate ? new Date(s.startDate).toDateString() : "unknown";
    if (!sessionsByDate[key]) sessionsByDate[key] = [];
    sessionsByDate[key].push(s);
  });

  const list = Object.entries(sessionsByDate).map(([k, group]) => (
    <SessionsPerDateContainer
      key={k}
      date={group[0].startDate}
      sessions={group}
    />
  ));

  if (isLoading)
    return <div className="loading-message">Cargando sesiones...</div>;
  return <div className="future-sessions-container">{list}</div>;
};
