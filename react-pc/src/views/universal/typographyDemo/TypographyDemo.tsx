import React, { Fragment } from 'react';
import './TypographyDemo.scss';
import { asyncComponentArr, choiceList } from './component';
import { ChoiceCheckbox } from '../../../components';

export default function TypographyDemo() {
    return (
        <Fragment>
            <ChoiceCheckbox name="Button 按钮" choiceList={choiceList} componentArr={asyncComponentArr} />
        </Fragment>
    )
}