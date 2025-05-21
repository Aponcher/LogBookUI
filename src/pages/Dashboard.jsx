import React, {useState} from 'react';
import {CCol, CContainer, CRow} from '@coreui/react';
import QuickEntryWidget from '../components/QuickEntryWidget';
import TodaySummaryCard from '../components/TodaySummaryCard';
import EntryTable from '../components/EntryTable';
import TimeSeriesChartWithControls from "../components/TimeSeriesChartWithControls";

export default function Dashboard() {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = () => {
        // simple inc to force refresh
        setRefreshKey(prev => prev + 1);
    };

    const readyActivities = ['pushups', 'situps'];

    return (
        <CContainer fluid className="mt-4">
            {readyActivities.map((activity) => (
                <CRow>
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
            <CRow>
                <CCol md={12}>

                </CCol>
            </CRow>
            <CRow>
                {/* Future widgets can go here */}
            </CRow>
        </CContainer>
    );
}
