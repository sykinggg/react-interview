import React, { Fragment } from 'react';
import { Chart } from '@antv/g2';
import './G2LineChart.scss';

export default function G2LineChart(props: any) {
    const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
    ];
    setTimeout(() => {
        // Step 1: 创建 Chart 对象
        const chart = new Chart({
            container: 'mountNode', // 指定图表容器 ID
            // width: 600, // 指定图表宽度
            // height: 300, // 指定图表高度
            autoFit: true
        });

        // Step 2: 载入数据源
        chart.data(data);

        // Step 3: 创建图形语法，绘制柱状图
        chart.interval().position('genre*sold');

        // Step 4: 渲染图表
        chart.render();
    })
    return (
        <Fragment>
            <div id="mountNode"></div>
        </Fragment>
    )
}
