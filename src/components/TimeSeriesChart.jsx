import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import { CSpinner } from '@coreui/react';
import '../styles.css';

// Apply dark theme manually
Highcharts.setOptions({
    chart: {
        spacingTop: 5,
        spacingRight: 5,
        backgroundColor: '#2a2a2b',
        style: {
            fontFamily: 'Arial, sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#E0E0E3',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#E0E0E3'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    background2: '#505053'
});

const apiUrl = process.env.REACT_APP_API_BASE_URL;

const TimeSeriesChart = ({ activity, days = 7, chartType = 'scatter', refreshKey }) => {
    const [options, setOptions] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChartData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${apiUrl}/log/${activity}/timeSeriesData`, {
                    params: { days, chartType: chartType }
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
