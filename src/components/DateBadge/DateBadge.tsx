import "./DateBadge.css";

interface DateBadgeProps {
    date: Date;
}

export const DateBadge:React.FC<DateBadgeProps> = (props:DateBadgeProps) => {

    return <div className="date-badge">
        <div className={"day"}>
            <span>{['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][props.date.getDay()]}</span>
        </div>
        <div className={"date"}>
            <span>{props.date.getDate()}</span>
        </div>
    </div>
}