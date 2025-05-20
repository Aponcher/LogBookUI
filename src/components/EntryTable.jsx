import React, { useEffect, useState } from 'react';
import {
    CCard,
    CCardHeader,
    CCardBody,
    CFormSelect,
    CTable,
    CTableBody,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CTableDataCell,
    CSpinner
} from '@coreui/react';

const activityOptions = ['pushups', 'situps', 'squats'];

export default function EntryTab({activity}) {
    const [activityType, setActivityType] = useState(activity);
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchEntries = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://logbook-alb-1951812183.us-east-2.elb.amazonaws.com/log/list/${activityType}`);
            const data = await response.json();
            setEntries(data);
        } catch (err) {
            console.error('Failed to fetch log entries:', err);
            setEntries([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEntries();
    }, [activityType]);

    return (
        <CCard className="mt-4">
            <CCardHeader>
                <div className="d-flex justify-content-between align-items-center">
                    <span>Activity Log</span>
                    <CFormSelect
                        style={{ width: '150px' }}
                        value={activityType}
                        onChange={(e) => setActivityType(e.target.value)}
                    >
                        {activityOptions.map((opt) => (
                            <option key={opt} value={opt}>
                                {opt.toUpperCase()}
                            </option>
                        ))}
                    </CFormSelect>
                </div>
            </CCardHeader>

            <CCardBody>
                {loading ? (
                    <CSpinner />
                ) : (
                    <CTable striped hover responsive>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell scope="col">Timestamp</CTableHeaderCell>
                                <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {entries.map((entry, idx) => (
                                <CTableRow key={idx}>
                                    <CTableDataCell>
                                        {new Date(entry.timestamp).toLocaleString()}
                                    </CTableDataCell>
                                    <CTableDataCell>{entry.quantity}</CTableDataCell>
                                </CTableRow>
                            ))}
                        </CTableBody>
                    </CTable>
                )}
            </CCardBody>
        </CCard>
    );
}
