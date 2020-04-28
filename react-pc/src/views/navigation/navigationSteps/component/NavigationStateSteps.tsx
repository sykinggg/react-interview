import React from "react";
import { Card, Steps } from "antd";

const { Step } = Steps;

export function NavigationStateSteps() {
    return (
        <Card id="components-steps-demo-state" title="步骤状态">
            <Steps current={1} status="error">
                <Step title="Finished" description="This is a description" />
                <Step title="In Process" description="This is a description" />
                <Step title="Waiting" description="This is a description" />
            </Steps>
        </Card>
    )
}