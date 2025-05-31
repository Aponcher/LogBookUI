import React, {useEffect, useState} from 'react';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CSpinner,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow
} from '@coreui/react';
import '../styles.css';
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_BASE_URL;

export default function EntryTab({activity, refreshKey}) {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchEntries = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${apiUrl}/log/list/${activity}`);
                setEntries(response.data);
            } catch (err) {
                console.error('Failed to fetch log entries:', err);
                setEntries([]);
            } finally {
                setLoading(false);
            }
        };
        fetchEntries();
    }, [activity, refreshKey]);

    return (
        <CCard>
            <CCardHeader>
                <div className="d-flex justify-content-between align-items-center">
                    <span>Activity Log</span>
                </div>
            </CCardHeader>

            <CCardBody>
                {loading ? (
                    <CSpinner />
                ) : (
                    <div className="scroll-table">
                        <CTable color="dark" striped hover responsive>
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
                    </div>
                )}
            </CCardBody>
        </CCard>
    );
}
