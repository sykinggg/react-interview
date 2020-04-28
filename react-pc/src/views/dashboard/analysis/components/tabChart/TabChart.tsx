import React, { Fragment } from 'react';
import { Tabs, DatePicker } from 'antd';
import './TabChart.scss';
import BizchartsLineChart from '../charts/bizchartsLineChart/BizchartsLineChart';
import G2LineChart from '../charts/g2LineChart/G2LineChart';
import EchartLineChart from '../charts/echartLineChart/EchartLineChart';
import HighchartsLineChart from '../charts/highchartsLineChart/HighchartsLineChart';
import D3LineChart from '../charts/d3LineChart/D3LineChart';
import TabList from '../tabList/TabList';
import { G2plotBarChart } from '../charts';

const { TabPane } = Tabs;

export default function TabChart(props: any) {
    const bizchartsData = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    function callback(key: any) {
    }
    return (
        <Fragment>
            <Tabs defaultActiveKey="1" onChange={callback} tabBarExtraContent={<DatePicker />}>
                <TabPane tab="bizcharts line" key="1">
                    <BizchartsLineChart />
                </TabPane>
                <TabPane tab="g2 line" key="2">
                    <G2LineChart />
                </TabPane>
                <TabPane tab="echart line" key="3">
                    <EchartLineChart />
                </TabPane>
                <TabPane tab="highchart line" key="4">
                    <HighchartsLineChart />
                </TabPane>
                <TabPane tab="d3 line" key="5">
                    <D3LineChart />
                </TabPane>
                <TabPane tab="table" key="6">
                    <TabList data={bizchartsData} />
                </TabPane>
                <TabPane tab="g2plot" key="7">
                    <G2plotBarChart />
                </TabPane>
            </Tabs>
        </Fragment>
    )
}
