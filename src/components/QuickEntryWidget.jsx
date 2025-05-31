import React, { useState } from 'react';
import {
    CCard,
    CCardHeader,
    CCardBody,
    CForm,
    CFormLabel,
    CFormSelect,
    CFormInput,
    CButton,
    CAlert
} from '@coreui/react';
import axios from 'axios';
import '../styles.css';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const QuickEntryWidget = ({ activity, onLogSuccess }) => {
    const [type, setType] = useState(activity);
    const [quantity, setQuantity] = useState(10);
    const [status, setStatus] = useState(null); // 'success' or 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${apiUrl}/log/${type}?quantity=${quantity}`);
            setStatus('success');
            onLogSuccess();
        } catch (err) {
            console.error('Failed to log entry:', err);
            setStatus('error');
        }
        setTimeout(() => setStatus(null), 3000); // Auto-clear after 3s
    };

    return (
        <CCard>
            <CCardHeader>Quick Entry</CCardHeader>
            <CCardBody>
                <CForm onSubmit={handleSubmit}>
                    <CFormLabel htmlFor="activityType">Activity</CFormLabel>
                    <CFormSelect
                        id="activityType"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        options={[
                            { label: 'Pushups', value: 'pushups' },
                            { label: 'Situps', value: 'situps' },
                            { label: 'Squats', value: 'squats' }
                        ]}
                        className="mb-3"
                    />

                    <CFormLabel htmlFor="quantity">Quantity (reps)</CFormLabel>
                    <CFormInput
                        id="quantity"
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="mb-3"
                    />

                    <CButton type="submit">Log</CButton>

                    {status === 'success' && <CAlert color="success" className="mt-3">Logged!</CAlert>}
                    {status === 'error' && <CAlert color="danger" className="mt-3">Failed to log.</CAlert>}
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default QuickEntryWidget;
