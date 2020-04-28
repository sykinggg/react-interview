import React from "react";
import { Card, Steps } from "antd";

const { Step } = Steps;

export function NavigationVerticalSteps() {
    return (
        <Card id="components-steps-demo-vertical" title="垂直方向">
            <Steps direction="vertical" current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        </Card>
    )
}