import React from "react";
import { Fragment } from "react";
import { asyncComponentArr } from "./component";
import { ChoiceCheckbox } from "../../../components";

export default function NavigationPagination() {
    return (
        <Fragment>
            <ChoiceCheckbox name="pagination 分页" componentArr={asyncComponentArr} />
        </Fragment>
    )
}