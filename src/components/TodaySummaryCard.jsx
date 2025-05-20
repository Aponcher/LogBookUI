import React, { useEffect, useState } from 'react';
import { CCard, CCardBody, CCardHeader, CSpinner } from '@coreui/react';
import axios from 'axios';

export default function TodaySummaryCard({ activity, refreshKey }) {
    const [goal, setGoal] = useState(null);
    const [actual, setActual] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSummary = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://logbook-alb-1951812183.us-east-2.elb.amazonaws.com/user/today/summary');
                setGoal(response.data.goals[activity] ?? 0);
                setActual(response.data.actual[activity] ?? 0);
            } catch (error) {
                console.error(`Failed to fetch summary for ${activity}:`, error);
                setGoal(0);
                setActual(0);
            } finally {
                setLoading(false);
            }
        };

        fetchSummary();
    }, [activity, refreshKey]);

    return (
        <CCard>
            <CCardHeader>{activity.toUpperCase()} Summary</CCardHeader>
            <CCardBody>
                {loading ? (
                    <CSpinner size="sm" />
                ) : (
                    <div>
                        <strong>{actual}</strong> / {goal} reps
                    </div>
                )}
            </CCardBody>
        </CCard>
    );
}
