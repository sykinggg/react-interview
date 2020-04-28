import React, { Fragment } from 'react';
import './Analysis.scss';
import IntroduceRow from './components/IntroduceRow/IntroduceRow';
import TabChart from './components/tabChart/TabChart';
import Card from './components/card/Card';

export default function Analysis(props: any) {
    return (
        <Fragment>
            <IntroduceRow />
            <TabChart />
            <Card />
        </Fragment>
    )
}
