import React from "react";
import { Card, Steps, Popover } from "antd";

const { Step } = Steps;

export function NavigationPointCustomSteps() {

    function customDot(dot: any, { status, index }: any) {
        return (
            <Popover
                content={
                    <span>
                        step {index} status: {status}
                    </span>
                }
            >
                {dot}
            </Popover>
        )
    }

    return (
        <Card id="components-steps-demo-pointCustom" title="自定义点状步骤条">
            <Steps current={1} progressDot={customDot}>
                <Step title="Finished" description="You can hover on the dot." />
                <Step title="In Progress" description="You can hover on the dot." />
                <Step title="Waiting" description="You can hover on the dot." />
                <Step title="Waiting" description="You can hover on the dot." />
            </Steps>
        </Card>
    )
}