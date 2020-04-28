import React from "react";
import { Card, Steps } from "antd";

const { Step } = Steps;

export function NavigationBaseSteps() {
    return (
        <Card id="components-steps-demo-base" title="基础使用">
            <Steps current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        </Card>
    )
}