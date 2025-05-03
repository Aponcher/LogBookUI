import React, { useState, useEffect } from 'react';
import './layout.css';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import MainContent from './MainContent';

// const [breadcrumb, setBreadcrumb] = useState<string[]>([]);
//
// const currentMenu = breadcrumb[breadcrumb.length - 1] || null;
//
// const goBack = () => {
//     setBreadcrumb((prev) => prev.slice(0, -1));
// };
//
// const goForward = (selection: string) => {
//     setBreadcrumb((prev) => [...prev, selection]);
// };

// Mock API function
const fetchLogData = async (activityType) => {
    // Simulate API call delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                type: activityType,
                entries: [
                    { date: '2025-04-01', value: 30 },
                    { date: '2025-04-02', value: 45 },
                    { date: '2025-04-03', value: 60 },
                ],
            });
        }, 500);
    });
};

const Layout = () => {
    const [activityType, setActivityType] = useState(null);
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [logData, setLogData] = useState(null);

    // TODO setLogData should handle response from API per type

    useEffect(() => {
        if (activityType) {
            fetchLogData(activityType).then(setLogData);
        }
    }, [activityType]);

    return (
        <div className="layout-container">
            <div className="sidebar left-menu">
                <LeftMenu
                    selectedWorkout={selectedWorkout}
                    logData={logData}
                />
            </div>

            <div className="main-content">
                <MainContent
                    activityType={activityType}
                    selectedWorkout={selectedWorkout}
                    logData={logData}
                />
            </div>

            <div className="sidebar right-menu">
                <RightMenu
                    onActivitySelect={setActivityType}
                    onWorkoutSelect={setSelectedWorkout}
                    activityType={activityType}
                />
            </div>
        </div>
    );
};

export default Layout;
