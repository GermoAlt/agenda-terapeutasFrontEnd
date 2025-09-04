import React, { useState } from "react";
import "./SessionCard.css";

interface SessionCardProps {
    idSession: string;
    patientName: string;
    startTime: string;
    endTime: string;
    }

export const SessionCard: React.FC<SessionCardProps> = (props) => {
    const [selectedSession, setSelectedSession] = useState(false);
    const cardRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
                setSelectedSession(false);
            }
        };
        if (selectedSession) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectedSession]);

    const handleSelectedSession = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedSession(true);
    };

    return (
        <div
            ref={cardRef}
            className={`session-card-container ${selectedSession ? "selectedSession" : ""}`}
            onClick={handleSelectedSession}
        >
            <div className="patient-name">{props.patientName}</div>
            <div className="session-time">{props.startTime} - {props.endTime}</div>
        </div>
    );
};
