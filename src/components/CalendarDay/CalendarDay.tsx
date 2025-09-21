import {CalendarEvents, DateBadge} from "../";
import "./CalendarDay.css";

interface CalendarDayProps {
    date: Date;
}

export const CalendarDay:React.FC<CalendarDayProps> = (props:CalendarDayProps) => {
    return <div className="calendar-day">
        <DateBadge date={props.date} />
        <CalendarEvents events={[]} />
    </div>
}