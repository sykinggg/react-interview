import React, { Fragment } from 'react';
import './Core.scss';
import { asyncComponentArr } from './component';
import { ChoiceCheckbox } from '../../../components';

export default function Core() {
  return (
    <Fragment>
      <ChoiceCheckbox name="react 核心" componentArr={asyncComponentArr} />
    </Fragment>
  )
}
