import React, { Fragment } from 'react';
import './Dashboard.scss';
import Container from '../../components/container/Container';
import { RouterList } from './router';

export default function Dashboard(props: any) {
    console.log(RouterList);
    return(
        <Fragment>
            <Container RouterList={RouterList} />
        </Fragment>
    )
}
