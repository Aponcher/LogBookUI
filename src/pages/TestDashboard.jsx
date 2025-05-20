import React, {useState} from 'react';
import {CCol, CContainer, CRow} from '@coreui/react';
import QuickEntryWidget from '../components/QuickEntryWidget';
import TodaySummaryCard from '../components/TodaySummaryCard';
import EntryTable from '../components/EntryTable';
import TimeSeriesChartWithControls from "../components/TimeSeriesChartWithControls";

export default function TestDashboard() {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = () => {
        // simple inc to force refresh
        setRefreshKey(prev => prev + 1);
    };

    return (
        <CContainer fluid className="mt-4">
            <CRow>
                <CCol md={4} className="d-flex flex-column gap-4">
                    <TodaySummaryCard activity="pushups" />
                    <TimeSeriesChartWithControls activity="pushups" refreshKey={refreshKey} />
                    <EntryTable activity="pushups" />
                </CCol>
                <CCol md={4} className="d-flex flex-column gap-4">
                    <TodaySummaryCard activity="situps" />
                    <TimeSeriesChartWithControls activity="situps" refreshKey={refreshKey} />
                    <EntryTable activity="situps" />
                </CCol>
                <CCol md={4}>
                    <QuickEntryWidget onLogSuccess={handleRefresh} />
                </CCol>
            </CRow>

            <CRow className="mt-4">
                {/* Future widgets can go here */}
            </CRow>
        </CContainer>
    );
}
