import React from "react";
import { Card, Steps } from "antd";

const { Step } = Steps;

export function NavigationSmallSteps() {
    return (
        <Card id="components-steps-demo-small" title="迷你样式">
            <Steps size="small" current={1}>
                <Step title="Finished" />
                <Step title="In Progress" />
                <Step title="Waiting" />
            </Steps>
        </Card>
    )
}