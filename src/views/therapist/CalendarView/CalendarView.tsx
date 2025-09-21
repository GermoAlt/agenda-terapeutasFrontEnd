import "./CalendarView.css";
import {Calendar} from "../../../components";
import {useState} from "react";

export const CalendarView: React.FC = () => {

    const [week, ] = useState<Date>(new Date())

    const getSundayOfWeek = (date: Date): Date => {
        const dayOfWeek = date.getDay();
        const diff = date.getDate() - dayOfWeek;
        return new Date(date.setDate(diff));
    };


    return (
        <div id="calendar-view">
            <Calendar startDate={getSundayOfWeek(week)}/>
        </div>
    )
}