import ExerciseEntryWidget from '../components/ExerciseEntryWidget';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-8">
            <h1 className="text-3xl font-bold mb-6 border-b border-gray-700 pb-2">Personal Log Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ExerciseEntryWidget />

                {/* Placeholder widgets for future expansion */}
                <div className="bg-gray-800 p-4 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-600 pb-1">Personal Log</h2>
                    <p className="text-gray-400 text-sm">Free-form entry widget goes here</p>
                </div>

                <div className="bg-gray-800 p-4 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-600 pb-1">Health Score</h2>
                    <p className="text-gray-400 text-sm">Health data or score display</p>
                </div>

                <div className="bg-gray-800 p-4 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold mb-2 border-b border-gray-600 pb-1">Weather</h2>
                    <p className="text-gray-400 text-sm">Weather widget placeholder</p>
                </div>
            </div>
        </div>
    );
}
