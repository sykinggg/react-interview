import React, { Fragment } from 'react';
import './FormPage.scss';
import { RouterList } from './router';
import Container from '../../components/container/Container';

export default function FormPage(props: any) {
    return(
        <Fragment>
            <Container RouterList={RouterList} />
        </Fragment>
    )
}
