import React from "react";
import { Card, Checkbox, Row, Col } from "antd";

export function CheckboxGrid() {

    const onChange = (checkedValues: any) => {
        console.log('checked = ', checkedValues);
    }

    return (
        <Card id="components-checkbox-demo-grid" title="checkbox 布局">
            <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
                <Row>
                    <Col span={8}>
                        <Checkbox value="A">A</Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="B">B</Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="C">C</Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="D">D</Checkbox>
                    </Col>
                    <Col span={8}>
                        <Checkbox value="E">E</Checkbox>
                    </Col>
                </Row>
            </Checkbox.Group>
        </Card>
    )
}