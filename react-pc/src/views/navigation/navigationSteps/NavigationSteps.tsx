import React from "react";
import { Fragment } from "react";

import './NavigationSteps.scss';
import { asyncComponentArr } from "./component";
import { ChoiceCheckbox } from "../../../components";

export default function NavigationSteps() {
    return (
        <Fragment>
            <ChoiceCheckbox name="steps 步骤条" componentArr={asyncComponentArr} />
        </Fragment>
    )
}