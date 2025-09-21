import type {Session} from "react-router-dom";
import "./CalendarEvents.css";

interface CalendarEventsProps {
    events: Session[]
}

export const CalendarEvents: React.FC<CalendarEventsProps> = (props:CalendarEventsProps) => {
    return (
        <div className={"calendar-events"}>

        </div>
    )
}