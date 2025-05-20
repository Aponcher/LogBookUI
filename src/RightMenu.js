import React from 'react';
import LogEntryForm from "./LogEntryForm";

const RightMenu = ({ onActivitySelect, onWorkoutSelect, activityType }) => {
    const workouts = ['Run', 'Swim', 'Cycle'];

    return (
        <div>
            {!activityType ? (
                <>
                    <h4>Select Activity</h4>
                    <button onClick={() => onActivitySelect('workouts')}>Workouts</button>
                    <button onClick={() => onActivitySelect('logs')}>Logs</button>
                </>
            ) : (
                <>
                    <h4>Select Workout</h4>
                    {workouts.map((w) => (
                        <button key={w} onClick={() => onWorkoutSelect(w)}>
                            {w}
                        </button>
                    ))}
                    <LogEntryForm type={activityType} />
                </>
            )}
        </div>
    );
};

export default RightMenu;
