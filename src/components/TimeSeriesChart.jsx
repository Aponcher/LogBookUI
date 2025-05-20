import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import { CSpinner } from '@coreui/react';

const TimeSeriesChart = ({ activity, days = 7, chartType = 'line', refreshKey }) => {
    const [options, setOptions] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChartData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`http://logbook-alb-1951812183.us-east-2.elb.amazonaws.com/log/${activity}/timeSeriesData`, {
                    params: { days, type: chartType }
                });
                setOptions(res.data);
            } catch (err) {
                console.error('Error loading chart data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchChartData();
    }, [activity, days, chartType, refreshKey]);

    if (loading) return <CSpinner />;
    if (!options) return <div>Failed to load chart.</div>;

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default TimeSeriesChart;
