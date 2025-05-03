import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface ChartProps {
    options: Highcharts.Options | null;
    entries: any[];
}

const Chart = ({options, entries}: ChartProps) => {
    console.log(options);
    console.log(entries);
    // const options = {
    //     title: {
    //         text: 'Sensor Readings',
    //     },
    //     series: [
    //         {
    //             name: 'Temperature',
    //             data: [29, 71, 80, 35, 90, 60],
    //         },
    //     ],
    //     chart: {
    //         backgroundColor: '#000',
    //         style: {
    //             fontFamily: 'Orbitron',
    //         },
    //     },
    //     xAxis: {
    //         labels: { style: { color: '#ffcc33' } },
    //     },
    //     yAxis: {
    //         labels: { style: { color: '#ffcc33' } },
    //     },
    // };

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
