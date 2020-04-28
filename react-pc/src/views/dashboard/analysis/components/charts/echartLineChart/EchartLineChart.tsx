import React, { Fragment } from 'react';
import echarts from 'echarts';
import './EchartLineChart.scss';

export default function EchartLineChart() {

    setTimeout(() => {
        const element: any = document.getElementById('main');
        const myChart = echarts.init(element);

        const option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        myChart.setOption(option);
    })

    return (
        <Fragment>
            <div id="main"></div>
        </Fragment>
    )
}
