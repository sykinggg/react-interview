import React from "react"
import { Fragment } from "react"

import './AutoComplete.scss';
import { asyncComponentArr } from "./component";
import { ChoiceCheckbox } from "../../../components";

export default function AutoComplete() {
    return (
        <Fragment>
            <ChoiceCheckbox name="autoComplete 自动填充" componentArr={asyncComponentArr} />
        </Fragment>
    )
}