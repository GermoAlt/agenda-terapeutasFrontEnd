import { useEffect, useState } from "react";
import "./FutureSessionsPerDayView.css";
import { sessionService } from "../../service";
import type { TherapySession } from "../../types/TherapySession";
import { SessionsPerDateContainer } from "../../components";

export const FutureSessionsPerDayView: React.FC = () => {
  const idTherapist: number = 1; // We will get it from context in the future
  const [sessionsPerDateContainerList, setSessionsPerDateContainerList] =
    useState<React.ReactNode[]>([]);

  useEffect(() => {
    sessionService
      .getSessionsByTherapist(idTherapist)
      .then((sessions: TherapySession[]) => {
        //1) Se crea objeto donde se aloja la informacion del backend
        const sessionsByDate: { [date: string]: TherapySession[] } = {};

        sessions.forEach((session) => {
          const dateKey = session.startDate.toDateString();
          if (!sessionsByDate[dateKey]) {
            sessionsByDate[dateKey] = [];
          }
          sessionsByDate[dateKey].push(session);
        });

        const auxArray: React.ReactNode[] = Object.entries(sessionsByDate).map(
          ([dateStr, sessions]: [string, TherapySession[]]) => (
            <SessionsPerDateContainer
              key={dateStr}
              date={sessions[0].startDate}
              sessions={sessions}
            />
          )
        );

        setSessionsPerDateContainerList(auxArray);
      });
  }, [idTherapist]);

  return <div>{sessionsPerDateContainerList}</div>;
};
