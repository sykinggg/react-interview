import { Fragment } from "react";
import React from "react";
import './Form.scss'
import { asyncComponentArr } from "./component";
import { ChoiceCheckbox } from "../../../components";

export default function Form() {
    return (
        <Fragment>
            <ChoiceCheckbox name="form 表单" componentArr={asyncComponentArr} />
        </Fragment>
    )
}