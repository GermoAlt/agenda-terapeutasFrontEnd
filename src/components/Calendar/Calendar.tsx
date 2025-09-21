import { CalendarDay } from "../";
import "./Calendar.css";

interface CalendarProps {
    startDate: Date;
}

export const Calendar:React.FC<CalendarProps> = (props:CalendarProps) => {
    const addDays = (date: Date, days: number): Date => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    return (
        <div id="calendar">
            <CalendarDay date={addDays(props.startDate, 0)}/>
            <CalendarDay date={addDays(props.startDate, 1)}/>
            <CalendarDay date={addDays(props.startDate, 2)}/>
            <CalendarDay date={addDays(props.startDate, 3)}/>
            <CalendarDay date={addDays(props.startDate, 4)}/>
            <CalendarDay date={addDays(props.startDate, 5)}/>
            <CalendarDay date={addDays(props.startDate, 6)}/>
        </div>
    )
}

