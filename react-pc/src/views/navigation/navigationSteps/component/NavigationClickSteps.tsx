import React, { useState } from "react";
import { Card, Steps, Divider } from "antd";

const { Step } = Steps;

export function NavigationClickSteps() {

    const [current, setCurrent] = useState<number>(0);

    function onChange(e: React.SetStateAction<number>) {
        setCurrent(e);
    }

    return (
        <Card id="components-steps-demo-click" title="可点击">
            <div>
                <Steps current={current} onChange={onChange}>
                    <Step title="Step 1" description="This is a description." />
                    <Step title="Step 2" description="This is a description." />
                    <Step title="Step 3" description="This is a description." />
                </Steps>

                <Divider />

                <Steps current={current} onChange={onChange} direction="vertical">
                    <Step title="Step 1" description="This is a description." />
                    <Step title="Step 2" description="This is a description." />
                    <Step title="Step 3" description="This is a description." />
                </Steps>
            </div>
        </Card>
    )
}