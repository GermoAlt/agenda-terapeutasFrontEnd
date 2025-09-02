import { useState } from "react";
import "./SessionCard.css";

interface SessionCardProps {
    idSession: string;
    patientName: string;
    startTime: string;
    endTime: string;
    }

export const SessionCard:React.FC<SessionCardProps> = (props:SessionCardProps) => {

    const [selectedSession, setSelectedSession] = useState(false);

    const handleSelectedSession = () => {
        setSelectedSession(!selectedSession);
    }

    return (
    <div className={`session-card-container ${selectedSession ? "selectedSession" : ""}`}
        onClick={handleSelectedSession}
    >  
        <div className="patient-name"> 
            {props.patientName} 
        </div>
        <div className="session-time">
            {props.startTime} - {props.endTime}
        </div>
   
    </div>
)}
