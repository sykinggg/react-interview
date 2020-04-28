import React from "react";
import { Card, Checkbox } from "antd";

export function CheckboxBase() {

    function onChange(e: { target: { checked: any; }; }) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <Card id="components-checkbox-demo-base" title="多选框 基本使用">
            <Checkbox onChange={onChange}>Checkbox</Checkbox>
        </Card>
    )
}