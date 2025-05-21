import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Stats from './pages/Stats';
import Settings from './pages/Settings';
import NavBar from './components/NavBar';
import './styles.css';
import TestDashboard from "./pages/TestDashboard";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Routes>
                    <Route path="/" element={<TestDashboard />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/settings" element={<Settings />} />
                </Routes>
                <NavBar />
            </div>
        </Router>
    );
}

export default App;
