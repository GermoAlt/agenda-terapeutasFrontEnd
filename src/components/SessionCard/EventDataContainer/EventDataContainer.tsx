import { formatTimeToAmPm } from "../../../utils/Helpers/formatTimeToAmPm";
import "./EventDataContainer.css";

interface EventDataContainerProps {
  date: Date;
  startTime: string;
  endTime: string;
}

export const EventDataContainer: React.FC<EventDataContainerProps> = ({
  date,
  startTime,
  endTime,
}) => {
  return (
    <div className="event-data-container">
      <p>Event date: {date.toDateString()} </p>
      <p>Start time: {formatTimeToAmPm(startTime)} </p>
      <p>End time: {formatTimeToAmPm(endTime)} </p>
    </div>
  );
};
