import { NavLink } from 'react-router-dom';
import "../layout.css";
import '../styles.css';

export default function NavBar() {
    const navItems = [
        { path: '/', label: 'Dashboard' },
        { path: '/Developer', label: 'Developer' },
        { path: '/history', label: 'History' },
        { path: '/stats', label: 'Stats' },
        { path: '/settings', label: 'Settings' },
    ];

    return (
        <nav className="bg-gray-800 px-2 py-2 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-center items-center">
                {/* Adjust the container to take up half the screen width */}
                <div className="w-1/2 flex justify-content-start">
                    {navItems.map(({ path, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                `${isActive ? 'border-b-2 border-blue-400 pb-1' : 'hover:text-blue-300'} px-2 px-2`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}
