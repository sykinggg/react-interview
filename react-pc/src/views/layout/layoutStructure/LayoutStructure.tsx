import React, { Fragment } from 'react';
import './LayoutStructure.scss';
import { asyncComponentArr } from './components';
import { ChoiceCheckbox } from '../../../components';



export default function LayoutStructure() {
    return (
        <Fragment>
            <ChoiceCheckbox name="Layout 布局" componentArr={asyncComponentArr} />
        </Fragment>
    )
}
