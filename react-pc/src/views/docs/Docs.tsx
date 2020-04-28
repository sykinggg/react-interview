import React, { Fragment } from 'react';
import Container from '../../components/container/Container';
import { RouterList } from './router';

export default function Docs() {
    return(
        <Fragment>
            <Container RouterList={RouterList} />
        </Fragment>
    )
}
