
import { NavBar } from "../../components";
import { FutureSessionsPerDayView } from "./FutureSessionsPerDayView/FutureSessionsPerDayView.tsx";
import {CalendarView} from "./CalendarView/CalendarView.tsx";
import {useSessionstorageState} from "rooks";

const TherapistDashboard = () => {
    const [view, ] = useSessionstorageState("view", "calendar")


  return (
    <section>
      <NavBar />
        {view === "calendar" ?
            <CalendarView /> : <FutureSessionsPerDayView />
        }
    </section>
  );
};

export default TherapistDashboard;
