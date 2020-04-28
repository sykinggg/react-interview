import React from "react";
import { Fragment } from "react";
import Container from "../../components/container/Container";
import { RouterList } from "./router";

export default function DataEntry() {
    return(
        <Fragment>
            <Container RouterList={RouterList} />
        </Fragment>
    )
}