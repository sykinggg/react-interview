import React, { Fragment } from 'react';
import { asyncComponentArr } from './component';
import { ChoiceCheckbox } from '../../../components';

export default function NavigationBreadcrumb() {
    return (
        <Fragment>
            <ChoiceCheckbox name="Button 按钮" componentArr={asyncComponentArr} />
        </Fragment>
    )
}
