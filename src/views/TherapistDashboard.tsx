import { NavBar } from "../components";
import { FutureSessionsPerDayView } from "./FutureSessionsPerDayView/FutureSessionsPerDayView";

const TherapistDashboard = () => {
  return (
    <section>
      <NavBar />
      <div>
        <FutureSessionsPerDayView />
      </div>
    </section>
  );
};

export default TherapistDashboard;
