import React from 'react';
import Chart from './Chart';
import { HighchartsOptions } from 'highcharts';

interface LogData {
    entries: any[]; // shape optional here if unused
    chartOptions: HighchartsOptions;
}

interface MainContentProps {
    activityType: string | null;
    selectedWorkout: string | null;
    logData: LogData | null;
}

const MainContent = ({ activityType, selectedWorkout, logData }): MainContentProps => {
    return (
        <div>
            <h2>Main View</h2>
            {activityType ? <p>Activity: {activityType}</p> : <p>Select an activity</p>}
            {selectedWorkout && logData ? (
                <div>
                    <h3>{selectedWorkout} Data</h3>
                    <ul>
                        {logData.entries.map((entry, i) => (
                            <li key={i}>
                                {entry.date}: {entry.value}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Select a workout to view chart data.</p>
            )}
            {activityType && selectedWorkout && logData && (<Chart entries={logData.entries} options={logData.chartOptions} />)}
        </div>
    );
};

export default MainContent;
