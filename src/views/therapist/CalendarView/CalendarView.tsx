import "./CalendarView.css";
import {useState} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!

export const CalendarView: React.FC = () => {

    const [week, ] = useState<Date>(new Date())

    const getSundayOfWeek = (date: Date): Date => {
        const dayOfWeek = date.getDay();
        const diff = date.getDate() - dayOfWeek;
        return new Date(date.setDate(diff));
    };


    return (
        <div id="calendar-view">
            {/*<Calendar startDate={getSundayOfWeek(week)}/>*/}
            <FullCalendar plugins={[dayGridPlugin, timeGridPlugin]}
                          initialDate={getSundayOfWeek(week)}
                          headerToolbar={{
                            end: 'today timeGrid prev,next'
                          }}
            />
        </div>
    )
}