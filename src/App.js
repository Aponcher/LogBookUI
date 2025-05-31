import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import './styles.css';
import Dashboard from "./pages/Dashboard";
import {AuthProvider, useAuth} from "./AuthContext";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegistrationPage";
import DeveloperResume from "./pages/DeveloperResume";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, token } = useAuth();
    console.log('isAuthenticated:', isAuthenticated);
    console.log('token:', token);
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes = () => (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/developer" element={<DeveloperResume />} />
        <Route
            path="/"
            element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            }
        />
    </Routes>
);

const App = () => (
    <AuthProvider>
        <Router>
            <Header />
            <AppRoutes />
            <NavBar />
        </Router>
    </AuthProvider>
);

export default App;
