import { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { CCard, CCardBody, CCardHeader } from '@coreui/react';

const apiUrl = process.env.REACT_APP_API_BASE_URL;

export function ActivityChartCard({ type }) {
    const [chartOptions, setChartOptions] = useState(null);

    useEffect(() => {
        axios.get(`${apiUrl}/log/${type}/timeSeriesData`)
            .then(res => setChartOptions(res.data))
            .catch(err => console.error('Failed to load chart options', err));
    }, [chartOptions]);

    return (
        <CCard>
            <CCardHeader>{type} activity</CCardHeader>
            <CCardBody>
                {chartOptions ? (
                    <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                ) : (
                    <p>Loading chart...</p>
                )}
            </CCardBody>
        </CCard>
    );
}
