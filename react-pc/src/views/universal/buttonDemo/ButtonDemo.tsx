import React, { Fragment } from 'react';
import './ButtonDemo.scss';
import { asyncComponentArr } from './component';
import { ChoiceCheckbox } from '../../../components';

export default function ButtonDemo() {
    return (
        <Fragment>
            <div className="ant-row">
                <ChoiceCheckbox name="Button 按钮" componentArr={asyncComponentArr} />
                {/* <div className="ant-col ant-col-12 code-boxes-col-2-1 pad-l-8 pad-r-8">
                    <ButtonTypeDemo />
                    <ButtonSizeDemo />
                    <ButtonLoadingDemo />
                    <ButtonGhostDemo />
                    <ButtonBlockDemo />
                </div>
                <div className="ant-col ant-col-12 code-boxes-col-2-1 pad-l-8 pad-r-8">
                    <ButtonIconDemo />
                    <ButtonEnableDemo />
                    <ButtonComplexDemo />
                    <ButtonDangerDemo />
                </div> */}
            </div>

        </Fragment>
    )
}
