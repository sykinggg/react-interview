import React from "react";
import { Card, Checkbox } from "antd";

export function CheckboxDisabled() {
    return (
        <Card id="components-checkbox-demo-disabled" title="禁用">
            <div>
                <Checkbox defaultChecked={false} disabled />
                <br />
                <Checkbox defaultChecked disabled />
            </div>
        </Card>
    )
}