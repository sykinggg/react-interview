import React from "react";
import './NavigationMenu.scss';
import { Fragment } from "react";
import { asyncComponentArr } from "./component";
import { ChoiceCheckbox } from "../../../components";

export default function NavigationMenu() {
    return (
        <Fragment>
            <ChoiceCheckbox name="menu 路由菜单" componentArr={asyncComponentArr} />
        </Fragment>
    )
}
