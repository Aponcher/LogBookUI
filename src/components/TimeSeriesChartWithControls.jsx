import React, { useState } from 'react';
import { CCard, CCardBody, CCardHeader, CFormSelect, CRow, CCol } from '@coreui/react';
import TimeSeriesChart from './TimeSeriesChart';

const TimeSeriesChartWithControls = ({ activity, refreshKey }) => {
    const [days, setDays] = useState(7);
    const [chartType, setChartType] = useState('line');

    return (
        <CCard>
            <CCardHeader>
                <CRow>
                    <CCol md={6}>
                        <strong>{activity.toUpperCase()} Progress</strong>
                    </CCol>
                    <CCol md={3}>
                        <CFormSelect
                            size="sm"
                            value={days}
                            onChange={e => setDays(Number(e.target.value))}
                        >
                            <option value={7}>Last 7 Days</option>
                            <option value={30}>Last 30 Days</option>
                            <option value={90}>Last 90 Days</option>
                        </CFormSelect>
                    </CCol>
                    <CCol md={3}>
                        <CFormSelect
                            size="sm"
                            value={chartType}
                            onChange={e => setChartType(e.target.value)}
                        >
                            <option value="line">Line Chart</option>
                            <option value="scatter">Scatter Chart</option>
                        </CFormSelect>
                    </CCol>
                </CRow>
            </CCardHeader>
            <CCardBody>
                <TimeSeriesChart
                    activity={activity}
                    days={days}
                    chartType={chartType}
                    refreshKey={refreshKey}
                />
            </CCardBody>
        </CCard>
    );
};

export default TimeSeriesChartWithControls;
