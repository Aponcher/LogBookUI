import React, {useState} from 'react';
import {CCol, CContainer, CRow} from '@coreui/react';
import QuickEntryWidget from '../components/QuickEntryWidget';
import TodaySummaryCard from '../components/TodaySummaryCard';
import EntryTable from '../components/EntryTable';
import TimeSeriesChartWithControls from "../components/TimeSeriesChartWithControls";
import '../styles.css';
import {useAuth} from "../AuthContext";
import {Navigate} from "react-router-dom";

export default function Dashboard() {
    const [refreshKey, setRefreshKey] = useState(0);
    const { isAuthenticated } = useAuth();

    const handleRefresh = () => {
        // simple inc to force refresh
        setRefreshKey(prev => prev + 1);
    };

    const readyActivities = ['pushups', 'situps'];

    if (!isAuthenticated) {
        console.log('No token, redirecting to login page');
        return <Navigate to="/login"/>
    }

    return (
        <CContainer fluid className="mt-1">
            {readyActivities.map((activity) => (
                <CRow key={activity}>
                    <CCol md={3}>
                        <TodaySummaryCard activity={activity} refreshKey={refreshKey}  />
                        <QuickEntryWidget activity={activity} onLogSuccess={handleRefresh} />
                    </CCol>
                    <CCol md={6}>
                        <TimeSeriesChartWithControls activity={activity} refreshKey={refreshKey} />
                    </CCol>
                    <CCol md={3}>
                        <EntryTable activity={activity} refreshKey={refreshKey}  />
                    </CCol>
                </CRow>
            ))}
        </CContainer>
    );
}
