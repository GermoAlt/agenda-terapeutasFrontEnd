import { useState, useEffect } from "react";
import { sessionService } from "../service";
import type { TherapySession } from "../types/TherapySession";

export function useSessionsByTherapist(idTherapist: number) {
  const [sessions, setSessions] = useState<TherapySession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    if (!idTherapist || idTherapist <= 0) {
      alert("ID de terapeuta inválido o vacio");
      setLoading(false);
      return;
    }
    const fetchSessions = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await sessionService.getSessionsByTherapist(idTherapist);
        const mappedSessions = data.map((session) => ({
          id: session.id,
          startDate: session.startDate,
          endDate: session.endDate,
          patient: {
            name: session.patient.name,
            age: session.patient.age,
            patientSince: session.patient.patientSince,
          },
        }));
        setSessions(mappedSessions);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, [idTherapist]);

  return { sessions, loading, error };
}
