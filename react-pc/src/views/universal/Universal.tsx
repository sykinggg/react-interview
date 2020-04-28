import React, { Fragment } from 'react';
import Container from '../../components/container/Container';
import {RouterList} from './router';

export default function Universal(props: any) {
    return (
        <Fragment>
            <Container RouterList={RouterList} />
        </Fragment>
    )
}
