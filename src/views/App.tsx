import './App.css'
import {useUser} from "../context/userContext.tsx";
import TherapistDashboard from "./therapist/TherapistDashboard.tsx";
import AdminDashboard from "./admin/AdminDashboard.tsx";

function App() {
    const user = useUser();
    // if(!user.isAuthenticated) {
    //     return <Login/>
    // }
    return user ?
        <TherapistDashboard/>
        : <AdminDashboard/>
}

export default App
