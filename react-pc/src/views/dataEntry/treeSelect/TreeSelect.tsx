import { Fragment } from "react";
import React from "react";
import { TreeSelectBase, TreeSelectCheckbox } from "./component";

export default function TreeSelect() {
    return(
        <Fragment>
            <TreeSelectBase />
            <TreeSelectCheckbox />
        </Fragment>
    )
}