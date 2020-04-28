import React from "react";
import { Card, Steps } from "antd";
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from "@ant-design/icons";

const { Step } = Steps;

export function NavigationIconSteps() {
    return (
        <Card id="components-steps-demo-icon" title="icon">
            <Steps>
                <Step status="finish" title="Login" icon={<UserOutlined />} />
                <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
                <Step status="process" title="Pay" icon={<LoadingOutlined />} />
                <Step status="wait" title="Done" icon={<SmileOutlined />} />
            </Steps>
        </Card>
    )
}