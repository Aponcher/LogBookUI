import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import History from './pages/History';
import Stats from './pages/Stats';
import Settings from './pages/Settings';
import NavBar from './components/NavBar';
import './styles.css';
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-100">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
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
