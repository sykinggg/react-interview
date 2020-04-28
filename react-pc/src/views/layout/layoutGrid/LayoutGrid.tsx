import React, { Fragment } from 'react';
import './LayoutGrid.scss';
import { asyncComponentArr } from './components';
import { ChoiceCheckbox } from '../../../components';

export default function LayoutGrid() {
    return (
        <Fragment>
            <ChoiceCheckbox name="Grid 栅格" componentArr={asyncComponentArr} />
        </Fragment>
    )
}
