import React, { Fragment } from "react";
import './Slider.scss';

import { SliderBase, SliderInput } from './component';

export default function Slider() {
    return (
        <Fragment>
            <SliderBase />
            <SliderInput />
        </Fragment>
    )
}