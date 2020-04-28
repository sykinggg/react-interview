import React, { Fragment } from "react";
import './Checkbox.scss';
import { asyncComponentArr } from "./component";
import { ChoiceCheckbox } from "../../../components";

export default function Checkbox() {
    return(
        <Fragment>
            <ChoiceCheckbox name="checkbox" componentArr={asyncComponentArr} />
        </Fragment>
    )
}