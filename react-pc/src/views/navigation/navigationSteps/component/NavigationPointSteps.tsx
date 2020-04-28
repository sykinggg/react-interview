import React from "react";
import { Card, Steps, Divider } from "antd";

const { Step } = Steps;

export function NavigationPointSteps() {
    return (
        <Card id="components-steps-demo-point" title="点状步骤条">
            <div>
                <Steps progressDot current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
                <Divider />
                <Steps progressDot current={1} direction="vertical">
                    <Step title="Finished" description="This is a description. This is a description." />
                    <Step title="Finished" description="This is a description. This is a description." />
                    <Step title="In Progress" description="This is a description. This is a description." />
                    <Step title="Waiting" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
            </div>
        </Card>
    )
}