
import './App.css'
import BringSessions from "./components/BringSessions.tsx";
import Navbar from './components/NavBar.tsx';

function App() {
    return (
        <div>
            <Navbar />
            <h1>Agenda de Terapeutas</h1>
            <BringSessions />
        </div>
    );
}

export default App
