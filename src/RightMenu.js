import React from 'react';

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
                </>
            )}
        </div>
    );
};

export default RightMenu;
