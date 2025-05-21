import { useEffect, useState } from 'react';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { CCard, CCardBody, CCardHeader } from '@coreui/react';

export function ActivityChartCard({ type }) {
    const [chartOptions, setChartOptions] = useState(null);

    useEffect(() => {
        axios.get(`http://logbook-alb-1951812183.us-east-2.elb.amazonaws.com/log/${type}/timeSeriesData`)
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
