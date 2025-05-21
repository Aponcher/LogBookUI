import { useState, useEffect } from 'react';

const activityOptions = [
  { type: 'pushups', label: 'Push-ups', unit: 'reps' },
  { type: 'situps', label: 'Sit-ups', unit: 'reps' },
  { type: 'squats', label: 'Squats', unit: 'reps' },
];

export function ExerciseEntryWidget() {
    const [activity, setActivity] = useState('pushups');
    const [count, setCount] = useState(10);
    const [unit, setUnit] = useState('reps');

    useEffect(() => {
        const selected = activityOptions.find(opt => opt.type === activity);
        setUnit(selected.unit);
    }, [activity]);

    const handleSubmit = () => {
        console.log(`Activity: ${activity}, Count: ${count} ${unit}`);
    };

    return (
        <div className="card">
            <h2>Quick Exercise Entry</h2>

            <div>
                <label>Activity</label>
                <select value={activity} onChange={(e) => setActivity(e.target.value)}>
                    {activityOptions.map(opt => (
                        <option key={opt.type} value={opt.type}>{opt.label}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Count</label>
                <input
                    type="number"
                    min={1}
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                />
            </div>

            <div>
                <span>Units: </span><span>{unit}</span>
            </div>

            <button onClick={handleSubmit} className="button">
                Save Entry
            </button>
        </div>
    );
}
