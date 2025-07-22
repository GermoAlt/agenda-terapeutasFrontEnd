import './App.css'
import {useUser} from "../context/userContext.tsx";
import TherapistDashboard from "./TherapistDashboard.tsx";
import AdminDashboard from "./AdminDashboard.tsx";
import Login from "./Login.tsx";

function App() {
    const user = useUser();
    if(!user.isAuthenticated) {
        return <Login/>
    }
    return user ?
        <TherapistDashboard/>
        : <AdminDashboard/>
}

export default App
