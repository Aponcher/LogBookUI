// @ts-ignore
import Highcharts from 'highcharts';

// TODO other types of charts
export type ChartType = 'line' | 'bar' | 'area';

export type ChartOptionsInput = {
    type?: ChartType;
    title?: string;
    categories: string[];
    data: number[];
    seriesName?: string;
    color?: string;
    showLegend?: boolean;
};

export type MultiSeriesInput = {
    type?: ChartType;
    title?: string;
    categories: string[];
    series: {
        name: string;
        data: number[];
        color?: string;
    }[];
    showLegend?: boolean;
};

export function buildChartOptions({
                                      type = 'line',
                                      title = 'Untitled Chart',
                                      categories,
                                      data,
                                      seriesName = 'Data Series',
                                      color = '#ffcc33',
                                      showLegend = true
                                  }: ChartOptionsInput): Highcharts.Options {
    return {
        chart: {
            type,
            backgroundColor: '#111'
        },
        title: {
            text: title,
            style: { color: '#ffcc33' }
        },
        xAxis: {
            categories,
            labels: { style: { color: '#ffcc33' } }
        },
        yAxis: {
            title: { text: 'Value', style: { color: '#ffcc33' } },
            labels: { style: { color: '#ffcc33' } }
        },
        legend: {
            enabled: showLegend,
            itemStyle: { color: '#ffcc33' }
        },
        series: [
            {
                name: seriesName,
                data,
                type,
                color
            }
        ]
    };
}

export function buildMultiSeriesChartOptions({
                                                 type = 'line',
                                                 title = 'Untitled Multi-Series Chart',
                                                 categories,
                                                 series,
                                                 showLegend = true
                                             }: MultiSeriesInput): Highcharts.Options {
    return {
        chart: {
            type,
            backgroundColor: '#111'
        },
        title: {
            text: title,
            style: { color: '#ffcc33' }
        },
        xAxis: {
            categories,
            labels: { style: { color: '#ffcc33' } }
        },
        yAxis: {
            title: { text: 'Value', style: { color: '#ffcc33' } },
            labels: { style: { color: '#ffcc33' } }
        },
        legend: {
            enabled: showLegend,
            itemStyle: { color: '#ffcc33' }
        },
        series: series.map((s) => ({
            name: s.name,
            data: s.data,
            type,
            color: s.color || undefined
        }))
    };
}

