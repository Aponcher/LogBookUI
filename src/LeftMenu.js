import React from 'react';

const LeftMenu = ({ selectedWorkout, logData }) => {
    return (
        <div>
            <h4>Details</h4>
            {selectedWorkout ? (
                <div>
                    <p><strong>Workout:</strong> {selectedWorkout}</p>
                    <p><strong>Data Points:</strong> {logData?.entries.length}</p>
                </div>
            ) : (
                <p>Select a workout</p>
            )}
        </div>
    );
};

export default LeftMenu;
