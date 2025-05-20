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
                <CCol md={3} className="d-flex flex-column gap-4">
                    <TodaySummaryCard activity="pushups" />
                    <TodaySummaryCard activity="situps" />
                </CCol>

                <CCol md={6} className="d-flex flex-column gap-4">
                    <TimeSeriesChartWithControls activity="pushups" refreshKey={refreshKey} />
                    <TimeSeriesChartWithControls activity="situps" refreshKey={refreshKey} />
                </CCol>

                <CCol md={3} className="d-flex flex-column gap-4">
                    <EntryTable activity="pushups" />
                    <EntryTable activity="situps" />
                </CCol>
            </CRow>

            <CRow className="mt-4">
                <CCol md={4}>
                    <QuickEntryWidget onLogSuccess={handleRefresh} />
                </CCol>
                {/* Future widgets can go here */}
            </CRow>
        </CContainer>
    );
}
