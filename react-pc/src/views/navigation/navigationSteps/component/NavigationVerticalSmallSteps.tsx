import React from "react";
import { Card, Steps } from "antd";

const { Step } = Steps;

export function NavigationVerticalSmallSteps() {
    return (
        <Card id="components-steps-demo-verticalSmall" title="垂直方向迷你样式">
            <Steps direction="vertical" size="small" current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
            </Steps>
        </Card>
    )
}