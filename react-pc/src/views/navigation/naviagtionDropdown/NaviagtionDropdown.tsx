import React, { Fragment } from "react";
import { asyncComponentArr } from "./component";
import { ChoiceCheckbox } from "../../../components";

export default function NaviagtionDropdown() {
    return (
        <Fragment>
            <ChoiceCheckbox name="dropdown 下拉功能组" componentArr={asyncComponentArr} />
        </Fragment>
    )
}