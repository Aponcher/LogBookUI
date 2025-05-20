import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const navItems = [
        { path: '/', label: 'Dashboard' },
        { path: '/history', label: 'History' },
        { path: '/stats', label: 'Stats' },
        { path: '/settings', label: 'Settings' },
    ];

    return (
        <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold tracking-wide">Personal Log</h1>
                <div className="flex space-x-6">
                    {navItems.map(({ path, label }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'border-b-2 border-blue-400 pb-1'
                                    : 'hover:text-blue-300'
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
