import React, { useState } from "react";
import { Card, Steps, Button, message } from "antd";

const { Step } = Steps;

export function NavigationSwitchSteps() {

    const steps = [
        {
            title: 'First',
            content: 'First-content',
        },
        {
            title: 'Second',
            content: 'Second-content',
        },
        {
            title: 'Last',
            content: 'Last-content',
        },
    ];

    const [current, setCurrent] = useState<number>(0);

    function next() {
        setCurrent(current + 1);
    }

    function prev() {
        setCurrent(current - 1);
    }

    return (
        <Card id="components-steps-demo-switch" title="切换">
            <div>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={() => next()}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                            Done
                        </Button>
                    )}
                    {current > 0 && (
                        <Button style={{ margin: 8 }} onClick={() => prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </div>
        </Card>
    )
}