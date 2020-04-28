import React, { useState } from "react";
import { Card, Steps } from "antd";

const { Step } = Steps;

export function NavigationTabSteps() {

    const [current, setCurrent] = useState(0);

    function onChange(e: React.SetStateAction<number>) {
        setCurrent(e);
    }

    return (
        <Card id="components-steps-demo-tab" title="导航步骤条">
            <div>
                <Steps
                    type="navigation"
                    size="small"
                    current={current}
                    onChange={onChange}
                    className="site-navigation-steps"
                >
                    <Step
                        title="Step 1"
                        subTitle="00:00:05"
                        status="finish"
                        description="This is a description."
                    />
                    <Step
                        title="Step 2"
                        subTitle="00:01:02"
                        status="process"
                        description="This is a description."
                    />
                    <Step
                        title="Step 3"
                        subTitle="waiting for longlong time"
                        status="wait"
                        description="This is a description."
                    />
                </Steps>
                <Steps
                    type="navigation"
                    current={current}
                    onChange={onChange}
                    className="site-navigation-steps"
                >
                    <Step status="finish" title="Step 1" />
                    <Step status="process" title="Step 2" />
                    <Step status="wait" title="Step 3" />
                    <Step status="wait" title="Step 4" />
                </Steps>
                <Steps
                    type="navigation"
                    size="small"
                    current={current}
                    onChange={onChange}
                    className="site-navigation-steps"
                >
                    <Step status="finish" title="finish 1" />
                    <Step status="finish" title="finish 2" />
                    <Step status="process" title="current process" />
                    <Step status="wait" title="wait" disabled />
                </Steps>
            </div>
        </Card>
    )
}